export const favoritedCollections =
  localStorage.getItem("favoriteIconCollections") ?? [];

export function isFavorited(id: string) {
  //FIXME: fix this: favoritedCollections.value.includes(id)
  return false;
}
