<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icons: any[];
  export let size;
  export let colorClass;
</script>

<section
  class={`mt-2 mb-1 justify-center opacity-75 overflow-hidden flex-none pointer-events-none non-dragging flex flex-wrap select-none justify-center text-${size} ${colorClass}`}
>
  {#each icons as icon}
    <Icon {icon} />
  {/each}
</section>
