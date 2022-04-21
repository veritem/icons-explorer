<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import { Route } from 'tinro';
	import 'uno.css';
	import Allcollections from './pages/allcollections.svelte';
	import Collection from './pages/collection.svelte';
	import Home from './pages/index.svelte';
</script>

<section class="bg-white dark:bg-dark h-full w-full min-h-screen font-sans">
	<Route path="/">
		<Home />
	</Route>

	<Route path="/collections">
		<Allcollections />
	</Route>

	<Route path="/collection/:id">
		<Collection />
	</Route>
</section>
