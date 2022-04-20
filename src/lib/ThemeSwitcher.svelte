<script lang="ts">
  let isDark = false;
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("theme") === "light") {
      isDark = false;
    } else {
      isDark = true;
      document.getElementsByTagName("html")[0].classList.add("dark");
    }
    // if (
    //   localStorage.getItem("theme") === "dark" ||
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // ) {
    //   isDark = true;
    // }
  }
  function toggleDarkMode() {
    if (isDark) {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      localStorage.theme = "light";
      isDark = false;
    } else {
      document.getElementsByTagName("html")[0].classList.add("dark");
      localStorage.theme = "dark";
      isDark = true;
    }
  }
</script>

<button
  on:click={toggleDarkMode}
  class="i-carbon-sun  dark:i-carbon-moon dark:text-white text-2xl"
/>
