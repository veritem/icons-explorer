<script>
  import { categories } from "../lib/data";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";

  // const categories = [];
</script>

<nav
  class="flex justify-between px-8 py-4 border-b border-gray-200 dark:bg-dark-100 dark:border-dark-200"
>
  <select class="text-current dark:bg-dark-100 mx-3">
    <option>All</option>
    {#each categories as cat}
      <option value={cat}>{cat.split("/")[0].trim()}</option>
    {/each}
  </select>
  <a href="/" class="py-1 font-light text-xl dark:text-white">Icônes</a>
  <div class="flex gap-4">
    <div class="i-carbon-search text-xl dark:text-white" />
    <!-- svelte-ignore a11y-missing-content -->
    <div class="i-carbon-logo-github text-xl dark:text-white" />
    <!-- <a
      href="https://github.com/veritem/icons-explorer"
      class="  text-2xl"
    /> -->

    <ThemeSwitcher />
  </div>
</nav>
