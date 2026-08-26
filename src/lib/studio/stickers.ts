import cyberSamurai from "@/assets/stickers/cyber-samurai.png";
import animeHeroine from "@/assets/stickers/anime-heroine.png";
import pirateCaptain from "@/assets/stickers/pirate-captain.png";
import chromeDragon from "@/assets/stickers/chrome-dragon.png";
import graffitiRiot from "@/assets/stickers/graffiti-riot.png";
import gothicSkull from "@/assets/stickers/gothic-skull.png";
import retroRacer from "@/assets/stickers/retro-racer.png";
import cosmicWolf from "@/assets/stickers/cosmic-wolf.png";
import cyberCat from "@/assets/stickers/cyber-cat.png";
import mechaUnit from "@/assets/stickers/mecha-unit.png";
import astroBoombox from "@/assets/stickers/astro-boombox.png";
import maskedHero from "@/assets/stickers/masked-hero.png";
import neonTiger from "@/assets/stickers/neon-tiger.png";
import riderClub from "@/assets/stickers/rider-club.png";
import stayHungry from "@/assets/stickers/stay-hungry.png";
import ggChampion from "@/assets/stickers/gg-champion.png";
import hoopFire from "@/assets/stickers/hoop-fire.png";

export interface Sticker {
  id: string;
  name: string;
  src: string;
  categories: string[];
  tags: string[];
  badge?: "trending" | "new" | "popular";
  license: string;
}

export const STICKER_CATEGORIES = [
  "Trending",
  "Popular",
  "New",
  "Anime",
  "Heroes",
  "Pirates",
  "Gaming",
  "Racing",
  "Horror",
  "Warriors",
  "Cyberpunk",
  "Fantasy",
  "Monsters",
  "Graffiti",
  "Gothic",
  "Streetwear",
  "Cute",
  "Sports",
  "Music",
  "Cars",
  "Bikes",
  "Space",
  "Animals",
];

const ORIGINAL = "Original artwork — cleared for commercial print";

export const STICKERS: Sticker[] = [
  {
    id: "cyber-samurai",
    name: "Neon Ronin",
    src: cyberSamurai,
    categories: ["Trending", "Cyberpunk", "Warriors", "Anime", "Streetwear"],
    tags: ["samurai", "cyberpunk", "neon", "sword", "warrior", "ninja", "anime"],
    badge: "trending",
    license: ORIGINAL,
  },
  {
    id: "anime-heroine",
    name: "Sakura Blade",
    src: animeHeroine,
    categories: ["Anime", "Trending", "Cute", "Fantasy"],
    tags: ["anime", "manga", "girl", "heroine", "katana", "character"],
    badge: "popular",
    license: ORIGINAL,
  },
  {
    id: "pirate-captain",
    name: "Black Tide Captain",
    src: pirateCaptain,
    categories: ["Pirates", "Popular", "Fantasy", "Streetwear"],
    tags: ["pirate", "captain", "skull", "flag", "vintage", "sea"],
    badge: "popular",
    license: ORIGINAL,
  },
  {
    id: "chrome-dragon",
    name: "Chrome Dragon",
    src: chromeDragon,
    categories: ["Fantasy", "Monsters", "Trending", "Streetwear"],
    tags: ["dragon", "chrome", "metallic", "fantasy", "beast", "y2k"],
    badge: "trending",
    license: ORIGINAL,
  },
  {
    id: "graffiti-riot",
    name: "RIOT Throw-Up",
    src: graffitiRiot,
    categories: ["Graffiti", "Streetwear", "Popular"],
    tags: ["graffiti", "spray", "street", "tag", "lettering", "urban"],
    license: ORIGINAL,
  },
  {
    id: "gothic-skull",
    name: "Cathedral Skull",
    src: gothicSkull,
    categories: ["Gothic", "Horror", "Streetwear", "Popular"],
    tags: ["skull", "gothic", "dark", "horror", "tattoo", "bones"],
    badge: "popular",
    license: ORIGINAL,
  },
  {
    id: "retro-racer",
    name: "Grand Prix 77",
    src: retroRacer,
    categories: ["Racing", "Cars", "Retro" as string, "Streetwear"],
    tags: ["racing", "car", "retro", "speed", "vintage", "motorsport"],
    license: ORIGINAL,
  },
  {
    id: "cosmic-wolf",
    name: "Cosmic Wolf",
    src: cosmicWolf,
    categories: ["Animals", "Space", "Trending", "Fantasy"],
    tags: ["wolf", "space", "cosmic", "galaxy", "animal", "howl"],
    badge: "trending",
    license: ORIGINAL,
  },
  {
    id: "cyber-cat",
    name: "Y2K Cyber Cat",
    src: cyberCat,
    categories: ["Cute", "Cyberpunk", "Animals", "New"],
    tags: ["cat", "cute", "y2k", "cyber", "kawaii", "animal"],
    badge: "new",
    license: ORIGINAL,
  },
  {
    id: "mecha-unit",
    name: "Mecha Unit 09",
    src: mechaUnit,
    categories: ["Anime", "Gaming", "Cyberpunk", "New"],
    tags: ["mecha", "robot", "anime", "gundam-style", "machine", "future"],
    badge: "new",
    license: ORIGINAL,
  },
  {
    id: "astro-boombox",
    name: "Astro Boombox",
    src: astroBoombox,
    categories: ["Music", "Space", "Streetwear"],
    tags: ["music", "astronaut", "boombox", "space", "hiphop", "retro"],
    license: ORIGINAL,
  },
  {
    id: "masked-hero",
    name: "Night Sentinel",
    src: maskedHero,
    categories: ["Heroes", "Trending", "Streetwear"],
    tags: ["hero", "masked", "comic", "vigilante", "cape", "superhero"],
    badge: "trending",
    license: ORIGINAL,
  },
  {
    id: "neon-tiger",
    name: "Neon Tiger",
    src: neonTiger,
    categories: ["Animals", "Streetwear", "Popular"],
    tags: ["tiger", "animal", "neon", "tribal", "wild", "roar"],
    badge: "popular",
    license: ORIGINAL,
  },
  {
    id: "rider-club",
    name: "Ride Free Club",
    src: riderClub,
    categories: ["Bikes", "Streetwear", "Cars"],
    tags: ["motorcycle", "biker", "vintage", "wings", "ride", "club"],
    license: ORIGINAL,
  },
  {
    id: "stay-hungry",
    name: "Stay Hungry",
    src: stayHungry,
    categories: ["Streetwear", "Popular"],
    tags: ["motivation", "typography", "grunge", "quote", "bold"],
    badge: "popular",
    license: ORIGINAL,
  },
  {
    id: "gg-champion",
    name: "GG Champion",
    src: ggChampion,
    categories: ["Gaming", "New", "Cyberpunk"],
    tags: ["gaming", "esports", "controller", "champion", "armor"],
    badge: "new",
    license: ORIGINAL,
  },
  {
    id: "hoop-fire",
    name: "Clutch Hoops",
    src: hoopFire,
    categories: ["Sports", "Streetwear"],
    tags: ["basketball", "sports", "fire", "varsity", "hoops"],
    license: ORIGINAL,
  },
];

export function searchStickers(query: string, category: string) {
  const q = query.trim().toLowerCase();
  return STICKERS.filter((s) => {
    const inCat = category === "All" || s.categories.includes(category);
    if (!inCat) return false;
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q) ||
      s.tags.some((t) => t.includes(q)) ||
      s.categories.some((c) => c.toLowerCase().includes(q))
    );
  });
}

export function similarStickers(sticker: Sticker, limit = 6) {
  return STICKERS.filter((s) => s.id !== sticker.id)
    .map((s) => ({
      s,
      score:
        s.categories.filter((c) => sticker.categories.includes(c)).length * 2 +
        s.tags.filter((t) => sticker.tags.includes(t)).length,
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.s);
}
