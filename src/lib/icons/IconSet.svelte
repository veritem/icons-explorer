<script lang="ts">
	import { useCurrentCollection } from '../../store';
	import type { CollectionMeta } from '../data';
	import Icons from './Icons.svelte';

	export let icons: string[];

	let max = 500;

	let collection: CollectionMeta;

	$: {
		useCurrentCollection().subscribe((c) => {
			if (c === null) return;
			collection = c;
		});
	}
</script>

<div class="px-4 pt-2 pb-4 text-center">
	<!-- {#each icons as icon}
    <div class="icons-item flex tooltip" />

  {/each}
  <p class="text-gray-500 text-sm pt-4 dark:text-white">
    {icons.length} icons
  </p> -->
	<!-- <Icons
    icons={icons.slice(0, max)}
    size="2xl"
    colorClass=""
    namespace={collection.id}
  /> -->

	<Icons {icons} size="2xl" colorClass="" namespace={collection.id} />
	<!--  -->
	<!-- {#if icons.length > max}
    <div class="flex justify-center">
      TODO: Implement show more
      <button class="text-sm text-gray-500 dark:text-white"> Show more </button>
    </div>
  {/if} -->
	<p class="text-gray-500 text-sm pt-4">
		{icons.length} icons
	</p>
</div>
