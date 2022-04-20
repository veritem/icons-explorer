<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";

  const categories = [];
</script>

<nav
  class="flex justify-between py-2 border-b border-gray-200 dark:bg-dark-100 dark:border-dark-200 p-2"
>
  <select class="text-current dark:bg-dark-100">
    <option>All</option>
    {#each categories as cat}
      <option>{cat}</option>
    {/each}
  </select>
  <h1 class="py-1 font-light">Icônes</h1>
  <div class="dark:text-white">
    <!-- svelte-ignore a11y-missing-content -->
    <a
      href="https://github.com/veritem/icons-explorer"
      class="i-carbon-logo-github  dark:text-white"
    />

    <ThemeSwitcher />
  </div>
</nav>
