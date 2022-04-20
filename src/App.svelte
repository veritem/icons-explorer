<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import { Route } from "tinro";
  import "uno.css";
  import Footer from "./lib/Footer.svelte";
  import Nav from "./lib/Nav.svelte";
  import About from "./pages/about.svelte";
  import Allcollections from "./pages/Allcollections.svelte";
  import Collection from "./pages/Collection.svelte";
  import Home from "./pages/index.svelte";
</script>

<section class="bg-white dark:bg-dark h-full w-full min-h-screen">
  <Nav />
  <Route path="/">
    <Home />
  </Route>

  <Route path="/collection/all">
    <Allcollections />
  </Route>

  <Route path="/collection/:id">
    <Collection />
  </Route>

  <Route path="/about">
    <About />
  </Route>

  <Footer />
</section>
