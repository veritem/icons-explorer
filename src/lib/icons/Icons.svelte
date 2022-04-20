<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icons: string[];
  export let size;
  export let colorClass;
  export let namespace;
</script>

<section
  class={`mt-2 mb-1 justify-center opacity-75 overflow-hidden flex-none pointer-events-none non-dragging flex flex-wrap select-none justify-center text-${size} ${colorClass}`}
>
  {#each icons as icon}
    <div class="flex px-1">
      <Icon icon={`${namespace}:${icon}`} />
    </div>
  {/each}
</section>
