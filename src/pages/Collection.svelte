<script lang="ts">
  import { meta } from "tinro";
  import Footer from "../lib/Footer.svelte";
  import IconSet from "../lib/icons/IconSet.svelte";
  import Nav from "../lib/Nav.svelte";
  import { setCurrentCollection, useCurrentCollection } from "../store";

  const collection = useCurrentCollection();

  $: setCurrentCollection(meta().params.id);
</script>

{#if !collection}
  <div class="py-8 px-4 text-gray-700 text-center dark:text-dark-700">
    Loading...
  </div>
{:else}
  <Nav />
  <section class="m-10">
    <div>
      <input
        type="text"
        placeholder="search"
        class="px-2 w-full py-2 border border-gray-200 focus:outline-none rounded-sm dark:border-dark-200 dark:bg-transparent dark:text-white"
      />
    </div>
    <div class="text-dark-500 dark:text-gray-300">
      <IconSet icons={collection.icons} />
    </div>
  </section>
  <Footer />
{/if}
