export type ViewId =
  | "front"
  | "back"
  | "leftSleeve"
  | "rightSleeve"
  | "leftChest"
  | "rightChest";

export const VIEW_IDS: ViewId[] = [
  "front",
  "back",
  "leftSleeve",
  "rightSleeve",
  "leftChest",
  "rightChest",
];

export const VIEW_LABELS: Record<ViewId, string> = {
  front: "Front",
  back: "Back",
  leftSleeve: "Left sleeve",
  rightSleeve: "Right sleeve",
  leftChest: "Left chest",
  rightChest: "Right chest",
};

export type ElementType = "text" | "sticker" | "image" | "shape" | "draw";

export interface BaseElement {
  id: string;
  type: ElementType;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  visible: boolean;
  locked: boolean;
  groupId?: string | null;
}

export interface ShadowProps {
  enabled: boolean;
  color: string;
  blur: number;
  offsetX: number;
  offsetY: number;
}

export interface TextElement extends BaseElement {
  type: "text";
  text: string;
  fontFamily: string;
  fontSize: number;
  fill: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  letterSpacing: number;
  lineHeight: number;
  align: "left" | "center" | "right";
  curve: number;
  strokeColor: string;
  strokeWidth: number;
  backgroundColor: string;
  gradient: boolean;
  gradientColor: string;
  shadow: ShadowProps;
}

export interface ImageLikeElement extends BaseElement {
  type: "sticker" | "image";
  src: string;
  flipX: boolean;
  flipY: boolean;
  outlineColor: string;
  outlineWidth: number;
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
  tint: string;
  tintStrength: number;
  shadow: ShadowProps;
  crop?: { x: number; y: number; width: number; height: number } | null;
}

export type ShapeKind =
  | "rect"
  | "circle"
  | "triangle"
  | "star"
  | "heart"
  | "polygon"
  | "line"
  | "arrow";

export interface ShapeElement extends BaseElement {
  type: "shape";
  shape: ShapeKind;
  fill: string;
  stroke: string;
  strokeWidth: number;
  cornerRadius: number;
  sides: number;
  gradient: boolean;
  gradientColor: string;
  shadow: ShadowProps;
}

export type BrushKind =
  | "pencil"
  | "brush"
  | "marker"
  | "spray"
  | "highlighter"
  | "eraser";

export interface DrawElement extends BaseElement {
  type: "draw";
  points: number[];
  stroke: string;
  strokeWidth: number;
  brush: BrushKind;
  tension: number;
}

export type DesignElement =
  | TextElement
  | ImageLikeElement
  | ShapeElement
  | DrawElement;

export interface ViewState {
  elements: DesignElement[];
}

export interface Design {
  id: string;
  name: string;
  product: string;
  color: string;
  updatedAt: number;
  views: Record<ViewId, ViewState>;
}

export const emptyViews = (): Record<ViewId, ViewState> => ({
  front: { elements: [] },
  back: { elements: [] },
  leftSleeve: { elements: [] },
  rightSleeve: { elements: [] },
  leftChest: { elements: [] },
  rightChest: { elements: [] },
});

export const defaultShadow = (): ShadowProps => ({
  enabled: false,
  color: "#000000",
  blur: 12,
  offsetX: 4,
  offsetY: 6,
});
