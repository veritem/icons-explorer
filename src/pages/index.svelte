<script lang="ts">
  import Collections from "../lib/collections/Collections.svelte";
  import { collections } from "../lib/data/index";
  import Nav from "../lib/Nav.svelte";
</script>

<Nav />
<Collections {collections} />
