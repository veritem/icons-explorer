<script lang="ts">
  import Iconify from "@purge-icons/generated";
  import { onMount } from "svelte";

  let iconEl;

  export let icon;

  async function update() {
    // await tick();

    if (iconEl) {
      const svg = Iconify.renderSVG(icon, {});
      console.log({ svg });
      if (svg) {
        iconEl.textContent = "";
        iconEl.appendChild(svg);
      } else {
        const span = document.createElement("span");
        span.className = "iconify";
        span.dataset.icon = icon;
        iconEl.textContent = "";
        iconEl.appendChild(span);
      }
    }
  }

  onMount(async () => await update());
</script>

<div bind:this={iconEl} />

<style>
  span.iconify {
    background: #5551;
    border-radius: 100%;
    min-width: 1em;
    min-height: 1em;
    display: block;
  }
</style>
