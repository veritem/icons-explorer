<script lang="ts">
	import { isFavorited } from '../../store';
	import type { CollectionInfo } from '../data';
	import Icons from '../icons/Icons.svelte';

	export let collection: CollectionInfo;
</script>

<section class="px-2 py-4 relative bg border-r border-b border-gray-200 dark:border-dark-200">
	<a
		href={`/collection/${collection.id}`}
		class="flex flex-col text-gray-900 transition-all text-center justify-center dark:text-gray-300 hover:text-primary"
	>
		<div class="flex-auto text-lg">
			{collection.name}
			<div class="flex-auto opacity-50 text-xs">
				<span>{collection.author?.name}</span>
				<span class="px-1 opacity-25">/</span>
				<span>{collection.license?.title}</span>
				<span class="px-1 opacity-25">/</span>
				<span>{collection.total} icons</span>
			</div>
		</div>
		<Icons icons={collection.sampleIcons} size="xl" colorClass="" namespace={collection.id} />
	</a>

	{#if isFavorited(collection.id)}
		<button class="i-carbon-bookmark absolute top-0 right-0 p-2 text-lg dark:text-gray-100" />
	{/if}
</section>
