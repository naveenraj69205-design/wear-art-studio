export interface FontDef {
  family: string;
  category: string;
}

export const FONT_CATEGORIES = [
  "Modern",
  "Streetwear",
  "Graffiti",
  "Handwritten",
  "Script",
  "Luxury",
  "Minimal",
  "Bold",
  "Vintage",
  "Retro",
  "Gothic",
  "Sports",
  "Futuristic",
  "Cartoon",
  "Tattoo",
  "Signature",
] as const;

export const FONTS: FontDef[] = [
  // Modern
  { family: "Inter", category: "Modern" },
  { family: "Manrope", category: "Modern" },
  { family: "Sora", category: "Modern" },
  { family: "Outfit", category: "Modern" },
  { family: "Plus Jakarta Sans", category: "Modern" },
  { family: "Figtree", category: "Modern" },
  { family: "DM Sans", category: "Modern" },
  { family: "Urbanist", category: "Modern" },
  // Streetwear
  { family: "Anton", category: "Streetwear" },
  { family: "Archivo Black", category: "Streetwear" },
  { family: "Bebas Neue", category: "Streetwear" },
  { family: "Teko", category: "Streetwear" },
  { family: "Big Shoulders Display", category: "Streetwear" },
  { family: "Chakra Petch", category: "Streetwear" },
  { family: "Saira Condensed", category: "Streetwear" },
  { family: "Oswald", category: "Streetwear" },
  // Graffiti
  { family: "Rubik Puddles", category: "Graffiti" },
  { family: "Rubik Wet Paint", category: "Graffiti" },
  { family: "Rubik Spray Paint", category: "Graffiti" },
  { family: "Rubik Glitch", category: "Graffiti" },
  { family: "Rubik Burned", category: "Graffiti" },
  { family: "Bungee", category: "Graffiti" },
  { family: "Bungee Shade", category: "Graffiti" },
  { family: "Permanent Marker", category: "Graffiti" },
  // Handwritten
  { family: "Caveat", category: "Handwritten" },
  { family: "Kalam", category: "Handwritten" },
  { family: "Patrick Hand", category: "Handwritten" },
  { family: "Shadows Into Light", category: "Handwritten" },
  { family: "Indie Flower", category: "Handwritten" },
  { family: "Architects Daughter", category: "Handwritten" },
  { family: "Gloria Hallelujah", category: "Handwritten" },
  { family: "Just Another Hand", category: "Handwritten" },
  // Script
  { family: "Dancing Script", category: "Script" },
  { family: "Great Vibes", category: "Script" },
  { family: "Sacramento", category: "Script" },
  { family: "Parisienne", category: "Script" },
  { family: "Pinyon Script", category: "Script" },
  { family: "Allura", category: "Script" },
  { family: "Tangerine", category: "Script" },
  { family: "Yellowtail", category: "Script" },
  // Luxury
  { family: "Playfair Display", category: "Luxury" },
  { family: "Cormorant Garamond", category: "Luxury" },
  { family: "Cinzel", category: "Luxury" },
  { family: "Marcellus", category: "Luxury" },
  { family: "Italiana", category: "Luxury" },
  { family: "Bodoni Moda", category: "Luxury" },
  { family: "Prata", category: "Luxury" },
  { family: "Gilda Display", category: "Luxury" },
  // Minimal
  { family: "Work Sans", category: "Minimal" },
  { family: "Karla", category: "Minimal" },
  { family: "Rubik", category: "Minimal" },
  { family: "Nunito Sans", category: "Minimal" },
  { family: "Barlow", category: "Minimal" },
  { family: "Public Sans", category: "Minimal" },
  { family: "Space Grotesk", category: "Minimal" },
  { family: "Epilogue", category: "Minimal" },
  // Bold
  { family: "Alfa Slab One", category: "Bold" },
  { family: "Titan One", category: "Bold" },
  { family: "Passion One", category: "Bold" },
  { family: "Fjalla One", category: "Bold" },
  { family: "Ultra", category: "Bold" },
  { family: "Bowlby One SC", category: "Bold" },
  { family: "Black Ops One", category: "Bold" },
  { family: "Squada One", category: "Bold" },
  // Vintage
  { family: "Abril Fatface", category: "Vintage" },
  { family: "Yeseva One", category: "Vintage" },
  { family: "Lobster", category: "Vintage" },
  { family: "Rye", category: "Vintage" },
  { family: "Sancreek", category: "Vintage" },
  { family: "Bevan", category: "Vintage" },
  { family: "Special Elite", category: "Vintage" },
  { family: "Limelight", category: "Vintage" },
  // Retro
  { family: "Monoton", category: "Retro" },
  { family: "Righteous", category: "Retro" },
  { family: "Bungee Inline", category: "Retro" },
  { family: "Shrikhand", category: "Retro" },
  { family: "Poiret One", category: "Retro" },
  { family: "Lexend Zetta", category: "Retro" },
  { family: "Rampart One", category: "Retro" },
  { family: "Kanit", category: "Retro" },
  // Gothic
  { family: "UnifrakturMaguntia", category: "Gothic" },
  { family: "Pirata One", category: "Gothic" },
  { family: "MedievalSharp", category: "Gothic" },
  { family: "Grenze Gotisch", category: "Gothic" },
  { family: "Eater", category: "Gothic" },
  { family: "Nosifer", category: "Gothic" },
  { family: "Metal Mania", category: "Gothic" },
  { family: "Almendra Display", category: "Gothic" },
  // Sports
  { family: "Graduate", category: "Sports" },
  { family: "Bungee Outline", category: "Sports" },
  { family: "Racing Sans One", category: "Sports" },
  { family: "Faster One", category: "Sports" },
  { family: "Wallpoet", category: "Sports" },
  { family: "Staatliches", category: "Sports" },
  { family: "Saira Stencil One", category: "Sports" },
  { family: "Allerta Stencil", category: "Sports" },
  // Futuristic
  { family: "Orbitron", category: "Futuristic" },
  { family: "Audiowide", category: "Futuristic" },
  { family: "Michroma", category: "Futuristic" },
  { family: "Syncopate", category: "Futuristic" },
  { family: "Iceberg", category: "Futuristic" },
  { family: "Quantico", category: "Futuristic" },
  { family: "Zen Dots", category: "Futuristic" },
  { family: "Megrim", category: "Futuristic" },
  // Cartoon
  { family: "Fredoka", category: "Cartoon" },
  { family: "Baloo 2", category: "Cartoon" },
  { family: "Luckiest Guy", category: "Cartoon" },
  { family: "Chewy", category: "Cartoon" },
  { family: "Bangers", category: "Cartoon" },
  { family: "Sigmar One", category: "Cartoon" },
  { family: "Boogaloo", category: "Cartoon" },
  { family: "Modak", category: "Cartoon" },
  // Tattoo
  { family: "Butcherman", category: "Tattoo" },
  { family: "Creepster", category: "Tattoo" },
  { family: "New Rocker", category: "Tattoo" },
  { family: "Jolly Lodger", category: "Tattoo" },
  { family: "Emilys Candy", category: "Tattoo" },
  { family: "Ewert", category: "Tattoo" },
  { family: "Trade Winds", category: "Tattoo" },
  { family: "Vast Shadow", category: "Tattoo" },
  // Signature
  { family: "Mrs Saint Delafield", category: "Signature" },
  { family: "Herr Von Muellerhoff", category: "Signature" },
  { family: "Mr De Haviland", category: "Signature" },
  { family: "Style Script", category: "Signature" },
  { family: "Meddon", category: "Signature" },
  { family: "Petit Formal Script", category: "Signature" },
  { family: "Alex Brush", category: "Signature" },
  { family: "Norican", category: "Signature" },
];

const loaded = new Set<string>();

/** Lazily inject a Google Font stylesheet for a single family. */
export function loadFont(family: string) {
  if (typeof document === "undefined" || loaded.has(family)) return;
  loaded.add(family);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  ).replace(/%20/g, "+")}:wght@400;700&display=swap`;
  document.head.appendChild(link);
}

export function loadFonts(families: string[]) {
  families.forEach(loadFont);
}
