import type { IconifyJSON } from "@purge-icons/generated";
import { writable } from "svelte/store";
import infoJSON from "./collections-info.json";

export interface CollectionInfo {
  id: string;
  name: string;
  author?: { name: string; url: string };
  license?: { title: string; url: string };
  url?: string;
  sampleIcons?: string[];
  category?: string;
  palette?: string;
  total?: number;
  prepacked?: IconifyJSON;
}

export interface CollectionMeta extends CollectionInfo {
  icons: string[];
  categories?: Record<string, string[]>;
}

const loadedMeta = writable<CollectionMeta>();
const installed = writable<string[]>();

export const collections = infoJSON.map((c) =>
  Object.freeze(c as any as CollectionInfo)
);

export const categories = Array.from(
  new Set(collections.map((i) => i.category).filter((i) => i != null))
);

const categoryFilter = writable<string | undefined>(undefined);

// computed
// export const sortedCollectionsInfo = () => {
//   let $catFilter;

//   categoryFilter.subscribe(($) => ($catFilter = $))();

//   return collections
//     .filter((c) => {
//       if (!$catFilter) return true;
//       return c.category === $catFilter;
//     })
//     .sort(
//       (a, b) =>
//         favoritedCollections.value.indexOf(b.id) -
//         favoritedCollections.value.indexOf(a.id)
//     );
// };
