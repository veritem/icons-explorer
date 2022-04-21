import { get, writable } from 'svelte/store';
import type { CollectionMeta } from '../lib/data';
import { getFullMeta, getMeta } from '../lib/data';

const collection = writable<CollectionMeta>(null);
const currentCollectionId = writable('');
const loaded = writable(false);
const installed = writable(false);

export function useCurrentCollection() {
	return collection;
}

export function isLoading() {
	return loaded;
}

export async function setCurrentCollection(id: string) {
	currentCollectionId.set(id);

	if (!id) {
		loaded.set(false);
		installed.set(false);
		collection.set(null);

		return get(collection);
	}

	if (id === 'all') {
		const meta = await getFullMeta();
		collection.set({
			id: 'all',
			name: 'All',
			icons: meta.flatMap((c) => c.icons)
		});
	} else {
		collection.set(await getMeta(id));
		loaded.set(false);
	}

	return collection;
}
