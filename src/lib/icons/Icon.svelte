<script lang="ts">
  import Iconify from "@purge-icons/generated";
  import { tick } from "svelte";

  let iconEl;

  export let icon;

  async function update(icon) {
    await tick();
    if (iconEl.value) {
      const svg = Iconify.renderSVG(icon, {});
      if (svg) {
        iconEl.value.textContent = "";
        iconEl.value.appendChild(svg);
      } else {
        const span = document.createElement("span");
        span.className = "iconify";
        span.dataset.icon = icon;
        iconEl.value.textContent = "";
        iconEl.value.appendChild(span);
      }
    }
  }

  $: update(icon);
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
