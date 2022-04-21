<script lang="ts">
	import Icon from './Icon.svelte';

	export let icons: string[];
	export let size;
	export let colorClass;
	export let namespace;

	function handleIconClick(icon: string) {
		console.log({ icon });
	}
</script>

<section
	class={`mt-2 mb-1 justify-center opacity-75 overflow-hidden flex-none pointer-events-none non-dragging flex flex-wrap select-none justify-center text-${size} ${colorClass}`}
>
	{#each icons as icon}
		<button
			class="flex px-1"
			on:click={() => {
				console.log({ icon });
			}}
		>
			<Icon icon={`${namespace}:${icon}`} />
		</button>
	{/each}
</section>
