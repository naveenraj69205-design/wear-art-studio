import type { Design } from "./types";

const KEY = "studio.designs.v1";
const CURRENT = "studio.current.v1";

function read(): Record<string, Design> {
  if (typeof localStorage === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

function write(all: Record<string, Design>) {
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function listDesigns(): Design[] {
  return Object.values(read()).sort((a, b) => b.updatedAt - a.updatedAt);
}

export function saveDesign(design: Design) {
  const all = read();
  all[design.id] = { ...design, updatedAt: Date.now() };
  write(all);
}

export function deleteDesign(id: string) {
  const all = read();
  delete all[id];
  write(all);
}

export function getDesign(id: string): Design | null {
  return read()[id] ?? null;
}

export function saveCurrent(design: Design) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(CURRENT, JSON.stringify(design));
}

export function loadCurrent(): Design | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(CURRENT);
    return raw ? (JSON.parse(raw) as Design) : null;
  } catch {
    return null;
  }
}
