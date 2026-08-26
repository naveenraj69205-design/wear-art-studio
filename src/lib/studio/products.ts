import type { ViewId } from "./types";

export interface PrintArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  /** SVG path in a 600 x 720 canvas per view */
  paths: Record<ViewId, string>;
  printAreas: Record<ViewId, PrintArea>;
}

export const STAGE_W = 600;
export const STAGE_H = 720;

interface GarmentOpts {
  shoulderY?: number;
  neckW?: number;
  neckDepth?: number;
  bodyW?: number;
  hemW?: number;
  hemY?: number;
  sleeveW?: number;
  sleeveDrop?: number;
  sleeveEnd?: number;
}

/** Parametric garment silhouette generator (front/back body with sleeves). */
function body(o: GarmentOpts = {}) {
  const {
    shoulderY = 150,
    neckW = 60,
    neckDepth = 34,
    bodyW = 150,
    hemW = 160,
    hemY = 610,
    sleeveW = 90,
    sleeveDrop = 300,
    sleeveEnd = 118,
  } = o;
  const cx = STAGE_W / 2;
  return [
    `M ${cx - neckW} ${shoulderY}`,
    `C ${cx - neckW / 2} ${shoulderY + neckDepth}, ${cx + neckW / 2} ${shoulderY + neckDepth}, ${cx + neckW} ${shoulderY}`,
    `L ${cx + bodyW} ${shoulderY + 18}`,
    `L ${cx + bodyW + sleeveW} ${sleeveDrop - 40}`,
    `L ${cx + bodyW + sleeveW - 12} ${sleeveDrop + sleeveEnd - 40}`,
    `L ${cx + bodyW - 14} ${sleeveDrop + sleeveEnd - 70}`,
    `L ${cx + hemW} ${hemY}`,
    `Q ${cx} ${hemY + 26}, ${cx - hemW} ${hemY}`,
    `L ${cx - bodyW + 14} ${sleeveDrop + sleeveEnd - 70}`,
    `L ${cx - bodyW - sleeveW + 12} ${sleeveDrop + sleeveEnd - 40}`,
    `L ${cx - bodyW - sleeveW} ${sleeveDrop - 40}`,
    `L ${cx - bodyW} ${shoulderY + 18}`,
    "Z",
  ].join(" ");
}

const sleevePanel =
  "M 190 200 L 410 190 L 440 520 Q 300 560, 160 520 Z";

const capPath =
  "M 110 400 C 110 220, 490 220, 490 400 L 500 430 Q 300 470, 100 430 Z M 100 430 L 60 470 Q 300 520, 540 470 L 500 430";

const pantsPath =
  "M 190 150 L 410 150 L 430 330 L 420 640 L 330 640 L 300 380 L 270 640 L 180 640 L 170 330 Z";

const area = (x: number, y: number, w: number, h: number): PrintArea => ({
  x,
  y,
  width: w,
  height: h,
});

function standardAreas(top = 220): Record<ViewId, PrintArea> {
  return {
    front: area(190, top, 220, 300),
    back: area(190, top, 220, 300),
    leftSleeve: area(240, 260, 120, 200),
    rightSleeve: area(240, 260, 120, 200),
    leftChest: area(215, top + 10, 90, 90),
    rightChest: area(300, top + 10, 90, 90),
  };
}

function garmentViews(opts: GarmentOpts, hooded = false): Record<ViewId, string> {
  const base = body(opts);
  const withHood = hooded
    ? `${base} M 240 150 C 250 92, 350 92, 360 150 C 340 176, 260 176, 240 150 Z`
    : base;
  return {
    front: withHood,
    back: base,
    leftSleeve: sleevePanel,
    rightSleeve: sleevePanel,
    leftChest: withHood,
    rightChest: withHood,
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "tshirt",
    name: "T-Shirt",
    category: "Tops",
    paths: garmentViews({}),
    printAreas: standardAreas(),
  },
  {
    id: "oversized",
    name: "Oversized Tee",
    category: "Tops",
    paths: garmentViews({
      bodyW: 172,
      hemW: 178,
      sleeveW: 96,
      sleeveDrop: 330,
      neckW: 66,
      hemY: 630,
    }),
    printAreas: {
      ...standardAreas(200),
      front: area(170, 200, 260, 340),
      back: area(170, 200, 260, 340),
    },
  },
  {
    id: "hoodie",
    name: "Hoodie",
    category: "Outerwear",
    paths: garmentViews(
      { bodyW: 168, hemW: 172, sleeveW: 96, sleeveDrop: 340, neckW: 62 },
      true,
    ),
    printAreas: standardAreas(250),
  },
  {
    id: "sweatshirt",
    name: "Sweatshirt",
    category: "Tops",
    paths: garmentViews({ bodyW: 162, hemW: 166, sleeveW: 94, sleeveDrop: 340 }),
    printAreas: standardAreas(235),
  },
  {
    id: "shirt",
    name: "Shirt",
    category: "Tops",
    paths: garmentViews({ bodyW: 146, hemW: 150, neckW: 52, sleeveW: 84 }),
    printAreas: standardAreas(225),
  },
  {
    id: "jacket",
    name: "Jacket",
    category: "Outerwear",
    paths: garmentViews({
      bodyW: 170,
      hemW: 168,
      sleeveW: 100,
      sleeveDrop: 350,
      neckW: 58,
      hemY: 585,
    }),
    printAreas: standardAreas(240),
  },
  {
    id: "pants",
    name: "Pants",
    category: "Bottoms",
    paths: {
      front: pantsPath,
      back: pantsPath,
      leftSleeve: sleevePanel,
      rightSleeve: sleevePanel,
      leftChest: pantsPath,
      rightChest: pantsPath,
    },
    printAreas: {
      front: area(195, 200, 100, 160),
      back: area(305, 200, 100, 160),
      leftSleeve: area(200, 380, 90, 180),
      rightSleeve: area(310, 380, 90, 180),
      leftChest: area(195, 180, 90, 90),
      rightChest: area(315, 180, 90, 90),
    },
  },
  {
    id: "cap",
    name: "Cap",
    category: "Headwear",
    paths: {
      front: capPath,
      back: capPath,
      leftSleeve: capPath,
      rightSleeve: capPath,
      leftChest: capPath,
      rightChest: capPath,
    },
    printAreas: {
      front: area(215, 280, 170, 110),
      back: area(215, 280, 170, 110),
      leftSleeve: area(140, 300, 110, 80),
      rightSleeve: area(350, 300, 110, 80),
      leftChest: area(200, 300, 90, 70),
      rightChest: area(310, 300, 90, 70),
    },
  },
];

export const getProduct = (id: string) =>
  PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];

export const COLOR_PRESETS = [
  "#ffffff",
  "#e9e6df",
  "#c9c4b8",
  "#9aa0a6",
  "#4a4f55",
  "#22252a",
  "#000000",
  "#1c2b5a",
  "#2f6f4f",
  "#0f766e",
  "#7f1d1d",
  "#b91c1c",
  "#ea580c",
  "#f4c542",
  "#7c3aed",
  "#db2777",
];
