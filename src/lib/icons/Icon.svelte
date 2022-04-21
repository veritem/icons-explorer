<script lang="ts">
	import Iconify from '@purge-icons/generated';
	import { onDestroy, onMount } from 'svelte';

	let iconEl;

	export let icon;

	async function update() {
		// await tick();

		if (iconEl) {
			const svg = Iconify.renderSVG(icon, {});
			if (svg) {
				iconEl.textContent = '';
				iconEl.appendChild(svg);
			} else {
				const span = document.createElement('span');
				span.className = 'iconify';
				span.dataset.icon = icon;
				iconEl.textContent = '';
				iconEl.appendChild(span);
			}
		}
	}

	onMount(async () => {
		await update();
	});

	onDestroy(() => {
		iconEl = '';
		icon = '';
	});

	function handleIconClick() {
		console.log({ icon });
	}
</script>

<div bind:this={iconEl} />

<style>
	/**
	 Svelte ignore next line 
	
	*/
	span.iconify {
		background: #5551;
		border-radius: 100%;
		min-width: 1em;
		min-height: 1em;
		margin: 2rem;
		display: block;
	}
</style>
