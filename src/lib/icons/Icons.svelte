<script lang="ts">
  export let icons: any[];
  export let size;
  export let colorClass;
</script>

<section
  class="mt-2 mb-1 justify-center opacity-75 overflow-hidden flex-none pointer-events-none non-dragging flex flex-wrap select-none justify-center"
>
  {#each icons as icon}
    <div class="non-dragging icons-item flex tooltip" />
  {/each}
</section>
