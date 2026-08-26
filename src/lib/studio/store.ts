import { create } from "zustand";
import {
  defaultShadow,
  emptyViews,
  type BrushKind,
  type Design,
  type DesignElement,
  type ShapeKind,
  type ViewId,
} from "./types";
import { getProduct } from "./products";
import { saveCurrent, saveDesign } from "./storage";

export type ToolId =
  | "select"
  | "text"
  | "stickers"
  | "upload"
  | "draw"
  | "shapes"
  | "templates"
  | "background"
  | "layers";

const uid = () => Math.random().toString(36).slice(2, 10);

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v)) as T;

export function newDesign(): Design {
  return {
    id: uid(),
    name: "Untitled design",
    product: "tshirt",
    color: "#22252a",
    updatedAt: Date.now(),
    views: emptyViews(),
  };
}

interface DrawSettings {
  brush: BrushKind;
  color: string;
  size: number;
  opacity: number;
}

interface StudioState {
  design: Design;
  view: ViewId;
  tool: ToolId;
  selectedIds: string[];
  zoom: number;
  pan: { x: number; y: number };
  showGrid: boolean;
  showRulers: boolean;
  snap: boolean;
  guides: { v: number[]; h: number[] };
  draw: DrawSettings;
  favorites: string[];
  past: Design[];
  future: Design[];
  dirty: number;

  setTool: (t: ToolId) => void;
  setView: (v: ViewId) => void;
  setProduct: (id: string) => void;
  setColor: (c: string) => void;
  setName: (n: string) => void;
  setZoom: (z: number) => void;
  setPan: (p: { x: number; y: number }) => void;
  toggle: (k: "showGrid" | "showRulers" | "snap") => void;
  setGuides: (g: { v: number[]; h: number[] }) => void;
  setDraw: (p: Partial<DrawSettings>) => void;
  toggleFavorite: (id: string) => void;

  select: (ids: string[]) => void;
  addToSelection: (id: string) => void;
  elements: () => DesignElement[];
  selected: () => DesignElement[];

  commit: () => void;
  addElement: (el: Partial<DesignElement> & { type: DesignElement["type"] }) => string;
  updateElement: (id: string, patch: Partial<DesignElement>, history?: boolean) => void;
  updateSelected: (patch: Partial<DesignElement>) => void;
  removeSelected: () => void;
  duplicateSelected: () => void;
  reorder: (from: number, to: number) => void;
  bringForward: () => void;
  sendBackward: () => void;
  bringToFront: () => void;
  sendToBack: () => void;
  groupSelected: () => void;
  ungroupSelected: () => void;
  align: (
    mode: "left" | "right" | "top" | "bottom" | "centerH" | "centerV" | "spaceH" | "spaceV",
    bounds: { x: number; y: number; width: number; height: number },
  ) => void;
  clearView: () => void;

  undo: () => void;
  redo: () => void;
  loadDesign: (d: Design) => void;
  resetDesign: () => void;
  saveToLibrary: () => void;
}

function baseEl(type: DesignElement["type"], name: string) {
  return {
    id: uid(),
    type,
    name,
    x: 0,
    y: 0,
    width: 160,
    height: 160,
    rotation: 0,
    opacity: 1,
    visible: true,
    locked: false,
    groupId: null,
  };
}

export const elementDefaults = {
  text: (text = "YOUR TEXT") => ({
    ...baseEl("text", text.slice(0, 18)),
    text,
    width: 260,
    height: 70,
    fontFamily: "Anton",
    fontSize: 56,
    fill: "#ffffff",
    bold: false,
    italic: false,
    underline: false,
    letterSpacing: 0,
    lineHeight: 1.1,
    align: "center" as const,
    curve: 0,
    strokeColor: "#000000",
    strokeWidth: 0,
    backgroundColor: "transparent",
    gradient: false,
    gradientColor: "#ff4d6d",
    shadow: defaultShadow(),
  }),
  image: (src: string, type: "sticker" | "image", name: string) => ({
    ...baseEl(type, name),
    src,
    width: 220,
    height: 220,
    flipX: false,
    flipY: false,
    outlineColor: "#ffffff",
    outlineWidth: 0,
    brightness: 0,
    contrast: 0,
    saturation: 0,
    blur: 0,
    tint: "#ffffff",
    tintStrength: 0,
    shadow: defaultShadow(),
    crop: null,
  }),
  shape: (shape: ShapeKind) => ({
    ...baseEl("shape", shape),
    shape,
    width: 160,
    height: 160,
    fill: "#f4c542",
    stroke: "#000000",
    strokeWidth: 0,
    cornerRadius: 8,
    sides: 6,
    gradient: false,
    gradientColor: "#ff4d6d",
    shadow: defaultShadow(),
  }),
};

export const useStudio = create<StudioState>()((set, get) => {
  const mutate = (fn: (d: Design) => void, history = true) => {
    const state = get();
    const next = clone(state.design);
    fn(next);
    next.updatedAt = Date.now();
    set({
      design: next,
      past: history ? [...state.past, state.design].slice(-60) : state.past,
      future: history ? [] : state.future,
      dirty: state.dirty + 1,
    });
    saveCurrent(next);
  };

  return {
    design: newDesign(),
    view: "front",
    tool: "select",
    selectedIds: [],
    zoom: 1,
    pan: { x: 0, y: 0 },
    showGrid: false,
    showRulers: true,
    snap: true,
    guides: { v: [], h: [] },
    draw: { brush: "brush", color: "#ffffff", size: 8, opacity: 1 },
    favorites: [],
    past: [],
    future: [],
    dirty: 0,

    setTool: (tool) => set({ tool }),
    setView: (view) => set({ view, selectedIds: [] }),
    setProduct: (id) => mutate((d) => void (d.product = getProduct(id).id)),
    setColor: (color) => mutate((d) => void (d.color = color)),
    setName: (name) => mutate((d) => void (d.name = name)),
    setZoom: (zoom) => set({ zoom: Math.min(4, Math.max(0.25, zoom)) }),
    setPan: (pan) => set({ pan }),
    toggle: (k) => set({ [k]: !get()[k] } as never),
    setGuides: (guides) => set({ guides }),
    setDraw: (p) => set({ draw: { ...get().draw, ...p } }),
    toggleFavorite: (id) =>
      set({
        favorites: get().favorites.includes(id)
          ? get().favorites.filter((f) => f !== id)
          : [...get().favorites, id],
      }),

    select: (selectedIds) => set({ selectedIds }),
    addToSelection: (id) =>
      set({
        selectedIds: get().selectedIds.includes(id)
          ? get().selectedIds.filter((s) => s !== id)
          : [...get().selectedIds, id],
      }),
    elements: () => get().design.views[get().view].elements,
    selected: () => {
      const ids = get().selectedIds;
      return get().elements().filter((e) => ids.includes(e.id));
    },

    commit: () => {
      const s = get();
      set({ past: [...s.past, clone(s.design)].slice(-60), future: [] });
    },

    addElement: (el) => {
      const id = uid();
      mutate((d) => {
        d.views[get().view].elements.push({ ...(el as DesignElement), id });
      });
      set({ selectedIds: [id], tool: "select" });
      return id;
    },

    updateElement: (id, patch, history = true) =>
      mutate((d) => {
        const list = d.views[get().view].elements;
        const i = list.findIndex((e) => e.id === id);
        if (i >= 0) list[i] = { ...list[i], ...patch } as DesignElement;
      }, history),

    updateSelected: (patch) =>
      mutate((d) => {
        const ids = get().selectedIds;
        const list = d.views[get().view].elements;
        list.forEach((e, i) => {
          if (ids.includes(e.id) && !e.locked)
            list[i] = { ...e, ...patch } as DesignElement;
        });
      }),

    removeSelected: () =>
      mutate((d) => {
        const ids = get().selectedIds;
        const v = d.views[get().view];
        v.elements = v.elements.filter((e) => !ids.includes(e.id) || e.locked);
        set({ selectedIds: [] });
      }),

    duplicateSelected: () => {
      const ids = get().selectedIds;
      const newIds: string[] = [];
      mutate((d) => {
        const v = d.views[get().view];
        v.elements
          .filter((e) => ids.includes(e.id))
          .forEach((e) => {
            const copy = { ...clone(e), id: uid(), x: e.x + 20, y: e.y + 20 };
            newIds.push(copy.id);
            v.elements.push(copy);
          });
      });
      set({ selectedIds: newIds });
    },

    reorder: (from, to) =>
      mutate((d) => {
        const list = d.views[get().view].elements;
        const [item] = list.splice(from, 1);
        list.splice(to, 0, item);
      }),

    bringForward: () =>
      mutate((d) => {
        const list = d.views[get().view].elements;
        const ids = get().selectedIds;
        for (let i = list.length - 2; i >= 0; i--)
          if (ids.includes(list[i].id) && !ids.includes(list[i + 1].id))
            [list[i], list[i + 1]] = [list[i + 1], list[i]];
      }),
    sendBackward: () =>
      mutate((d) => {
        const list = d.views[get().view].elements;
        const ids = get().selectedIds;
        for (let i = 1; i < list.length; i++)
          if (ids.includes(list[i].id) && !ids.includes(list[i - 1].id))
            [list[i], list[i - 1]] = [list[i - 1], list[i]];
      }),
    bringToFront: () =>
      mutate((d) => {
        const v = d.views[get().view];
        const ids = get().selectedIds;
        v.elements = [
          ...v.elements.filter((e) => !ids.includes(e.id)),
          ...v.elements.filter((e) => ids.includes(e.id)),
        ];
      }),
    sendToBack: () =>
      mutate((d) => {
        const v = d.views[get().view];
        const ids = get().selectedIds;
        v.elements = [
          ...v.elements.filter((e) => ids.includes(e.id)),
          ...v.elements.filter((e) => !ids.includes(e.id)),
        ];
      }),

    groupSelected: () => {
      const gid = uid();
      mutate((d) => {
        const ids = get().selectedIds;
        d.views[get().view].elements.forEach((e) => {
          if (ids.includes(e.id)) e.groupId = gid;
        });
      });
    },
    ungroupSelected: () =>
      mutate((d) => {
        const ids = get().selectedIds;
        d.views[get().view].elements.forEach((e) => {
          if (ids.includes(e.id)) e.groupId = null;
        });
      }),

    align: (mode, b) =>
      mutate((d) => {
        const ids = get().selectedIds;
        const list = d.views[get().view].elements;
        const sel = list.filter((e) => ids.includes(e.id));
        if (mode === "spaceH" || mode === "spaceV") {
          const horiz = mode === "spaceH";
          const sorted = [...sel].sort((a, z) => (horiz ? a.x - z.x : a.y - z.y));
          if (sorted.length < 3) return;
          const first = sorted[0];
          const last = sorted[sorted.length - 1];
          const total = horiz
            ? last.x + last.width - first.x
            : last.y + last.height - first.y;
          const used = sorted.reduce(
            (a, e) => a + (horiz ? e.width : e.height),
            0,
          );
          const gap = (total - used) / (sorted.length - 1);
          let cursor = horiz ? first.x : first.y;
          sorted.forEach((e) => {
            if (horiz) e.x = cursor;
            else e.y = cursor;
            cursor += (horiz ? e.width : e.height) + gap;
          });
          return;
        }
        sel.forEach((e) => {
          if (mode === "left") e.x = b.x;
          if (mode === "right") e.x = b.x + b.width - e.width;
          if (mode === "top") e.y = b.y;
          if (mode === "bottom") e.y = b.y + b.height - e.height;
          if (mode === "centerH") e.x = b.x + (b.width - e.width) / 2;
          if (mode === "centerV") e.y = b.y + (b.height - e.height) / 2;
        });
      }),

    clearView: () =>
      mutate((d) => {
        d.views[get().view] = { elements: [] };
        set({ selectedIds: [] });
      }),

    undo: () => {
      const s = get();
      if (!s.past.length) return;
      const prev = s.past[s.past.length - 1];
      set({
        design: prev,
        past: s.past.slice(0, -1),
        future: [s.design, ...s.future].slice(0, 60),
        selectedIds: [],
      });
      saveCurrent(prev);
    },
    redo: () => {
      const s = get();
      if (!s.future.length) return;
      const next = s.future[0];
      set({
        design: next,
        future: s.future.slice(1),
        past: [...s.past, s.design],
        selectedIds: [],
      });
      saveCurrent(next);
    },

    loadDesign: (d) =>
      set({ design: clone(d), past: [], future: [], selectedIds: [], view: "front" }),
    resetDesign: () =>
      set({ design: newDesign(), past: [], future: [], selectedIds: [] }),
    saveToLibrary: () => {
      saveDesign(get().design);
      set({ dirty: 0 });
    },
  };
});
