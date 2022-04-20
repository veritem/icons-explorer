<script>
  import { meta } from "tinro";
  import IconSet from "../lib/icons/IconSet.svelte";
  import { setCurrentCollection, useCurrentCollection } from "../store";

  const collection = useCurrentCollection();

  $: setCurrentCollection(meta().params.id);
</script>

{#if !collection}
  <div class="py-8 px-4 text-gray-700 text-center dark:text-dark-700">
    Loading...
  </div>
{:else}
  <IconSet icons={collection.icons} />
{/if}
