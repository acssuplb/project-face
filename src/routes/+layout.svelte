<script>
  import "../app.css";
  import { NavBar, Footer, ChatBot } from "$components";
  import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
  import { onMount } from "svelte";

  function scrollFadeIn() {
    let scrollFadeInElements = document.getElementsByClassName("scrollFadeIn");

    for (let element of scrollFadeInElements) {
      if (
        element instanceof HTMLElement &&
        element.getBoundingClientRect().top <
          document.documentElement.clientHeight * 0.5
      ) {
        element.style.opacity = "1";
      }
    }
  }

  onMount(() => {
    scrollFadeIn();
    window.addEventListener("scroll", scrollFadeIn);
    window.addEventListener("resize", scrollFadeIn);
  });
</script>

<main class="overflow-hidden">
  <NavBar />
  <GradientBlur />
  <ChatBot />
  <slot />
  <Footer />
</main>
