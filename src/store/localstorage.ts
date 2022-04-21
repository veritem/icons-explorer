export const favoritedCollections = localStorage.getItem('favoriteIconCollections') ?? [];

export function isFavorited(id: string) {
	return favoritedCollections.includes(id);
}
