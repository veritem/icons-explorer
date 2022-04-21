<script lang="ts">
	import type { CollectionInfo } from '../data/index';
	import Collection from './Collection.svelte';

	export let collections: CollectionInfo[];
</script>

<div class="collections-list grid overflow-y-overly">
	{#each collections as collection}
		<Collection {collection} />
	{/each}
</div>

<style>
	.collections-list {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
