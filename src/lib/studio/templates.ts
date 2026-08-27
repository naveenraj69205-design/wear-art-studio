import { elementDefaults } from "./store";
import { STICKERS } from "./stickers";
import type { DesignElement } from "./types";

export interface Template {
  id: string;
  name: string;
  category: string;
  product: string;
  color: string;
  build: () => DesignElement[];
}

const sticker = (id: string, x: number, y: number, size: number) => {
  const s = STICKERS.find((k) => k.id === id) ?? STICKERS[0]!;
  return {
    ...elementDefaults.image(s.src, "sticker", s.name),
    x,
    y,
    width: size,
    height: size,
  } as DesignElement;
};

const text = (
  value: string,
  x: number,
  y: number,
  props: Partial<ReturnType<typeof elementDefaults.text>> = {},
) =>
  ({ ...elementDefaults.text(value), x, y, ...props }) as DesignElement;

export const TEMPLATE_CATEGORIES = [
  "Streetwear",
  "Minimal",
  "Oversized",
  "College",
  "Sports",
  "Gaming",
  "Luxury",
  "Vintage",
  "Anime",
  "Hip-hop",
  "Couple",
  "Birthday",
  "Motivation",
  "Travel",
];

export const TEMPLATES: Template[] = [
  {
    id: "street-ronin",
    name: "Neon Ronin Drop",
    category: "Streetwear",
    product: "oversized",
    color: "#22252a",
    build: () => [
      sticker("cyber-samurai", 30, 20, 200),
      text("NEON RONIN", 0, 240, {
        fontFamily: "Anton",
        fontSize: 44,
        width: 260,
        fill: "#e7ff3d",
      }),
      text("東京 · 2099", 0, 296, {
        fontFamily: "Chakra Petch",
        fontSize: 20,
        width: 260,
        fill: "#ffffff",
      }),
    ],
  },
  {
    id: "minimal-line",
    name: "Minimal Mark",
    category: "Minimal",
    product: "tshirt",
    color: "#ffffff",
    build: () => [
      text("less. but better.", 0, 100, {
        fontFamily: "Work Sans",
        fontSize: 28,
        width: 220,
        fill: "#101010",
      }),
    ],
  },
  {
    id: "oversized-dragon",
    name: "Chrome Dragon Oversize",
    category: "Oversized",
    product: "oversized",
    color: "#000000",
    build: () => [sticker("chrome-dragon", 10, 30, 240)],
  },
  {
    id: "college-varsity",
    name: "Varsity Crew",
    category: "College",
    product: "sweatshirt",
    color: "#1c2b5a",
    build: () => [
      text("BROOKLYN", 0, 40, {
        fontFamily: "Graduate",
        fontSize: 48,
        width: 220,
        fill: "#ffffff",
        strokeColor: "#f4c542",
        strokeWidth: 2,
      }),
      text("EST. 1994", 0, 110, {
        fontFamily: "Graduate",
        fontSize: 22,
        width: 220,
        fill: "#f4c542",
      }),
    ],
  },
  {
    id: "sports-clutch",
    name: "Clutch Hoops",
    category: "Sports",
    product: "tshirt",
    color: "#000000",
    build: () => [sticker("hoop-fire", 20, 40, 190)],
  },
  {
    id: "gaming-champ",
    name: "Esports Champion",
    category: "Gaming",
    product: "hoodie",
    color: "#22252a",
    build: () => [
      sticker("gg-champion", 20, 20, 190),
      text("BUILT TO WIN", 0, 230, {
        fontFamily: "Orbitron",
        fontSize: 24,
        width: 220,
        fill: "#c6f24e",
      }),
    ],
  },
  {
    id: "luxury-script",
    name: "Maison Script",
    category: "Luxury",
    product: "shirt",
    color: "#e9e6df",
    build: () => [
      text("Maison", 0, 90, {
        fontFamily: "Cormorant Garamond",
        fontSize: 54,
        width: 220,
        fill: "#1a1a1a",
      }),
      text("PARIS · MILANO", 0, 160, {
        fontFamily: "Cinzel",
        fontSize: 16,
        width: 220,
        fill: "#8a7a52",
      }),
    ],
  },
  {
    id: "vintage-ride",
    name: "Ride Free",
    category: "Vintage",
    product: "tshirt",
    color: "#4a4f55",
    build: () => [sticker("rider-club", 20, 50, 190)],
  },
  {
    id: "anime-sakura",
    name: "Sakura Blade",
    category: "Anime",
    product: "oversized",
    color: "#ffffff",
    build: () => [
      sticker("anime-heroine", 30, 30, 200),
      text("桜 BLADE", 0, 250, {
        fontFamily: "Bebas Neue",
        fontSize: 40,
        width: 260,
        fill: "#db2777",
      }),
    ],
  },
  {
    id: "hiphop-boombox",
    name: "Astro Beats",
    category: "Hip-hop",
    product: "hoodie",
    color: "#000000",
    build: () => [sticker("astro-boombox", 20, 40, 190)],
  },
  {
    id: "couple-kings",
    name: "Couple Kings",
    category: "Couple",
    product: "tshirt",
    color: "#000000",
    build: () => [
      text("HERS", 0, 120, {
        fontFamily: "Bebas Neue",
        fontSize: 64,
        width: 220,
        fill: "#ffffff",
      }),
      text("since 2024", 0, 200, {
        fontFamily: "Dancing Script",
        fontSize: 26,
        width: 220,
        fill: "#db2777",
      }),
    ],
  },
  {
    id: "birthday-glow",
    name: "Birthday Glow",
    category: "Birthday",
    product: "tshirt",
    color: "#7c3aed",
    build: () => [
      text("BIRTHDAY", 0, 90, {
        fontFamily: "Monoton",
        fontSize: 38,
        width: 220,
        fill: "#ffffff",
      }),
      text("SQUAD", 0, 150, {
        fontFamily: "Monoton",
        fontSize: 38,
        width: 220,
        fill: "#f4c542",
      }),
    ],
  },
  {
    id: "motivation-hungry",
    name: "Stay Hungry",
    category: "Motivation",
    product: "tshirt",
    color: "#ffffff",
    build: () => [sticker("stay-hungry", 20, 60, 190)],
  },
  {
    id: "travel-wolf",
    name: "Cosmic Trails",
    category: "Travel",
    product: "hoodie",
    color: "#0f766e",
    build: () => [
      sticker("cosmic-wolf", 25, 30, 190),
      text("WANDER FAR", 0, 240, {
        fontFamily: "Space Grotesk",
        fontSize: 26,
        width: 220,
        fill: "#ffffff",
      }),
    ],
  },
];
