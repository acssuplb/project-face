<script>
  // Import Statements
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import { onMount } from "svelte";

  // CUSTOMIZE THIS: Array of strengths
  let strengths = [
    [
      "Technology Proficiency",
      "As technology grows and changes, our developers are equipped with strong collaborative skills and programming knowledge, which allow us to keep up with the cultural shift.",
    ],
    [
      "Competitive Workforce",
      "Our organization fosters excellence and innovation as our developers are skilled, motivated, and fueled with our love for technology and community. This also keeps us ahead while being disciplined and dependable.",
    ],
    [
      "Effective Research and Development Aptitude",
      "Our developers are innovative in developing solutions to solve community problems using technology, aligned with our organization's mission.",
    ],
    [
      "Agile Development",
      "Our developers are able to anticipate the need for flexibility and evolve in a changing environment while maintaining rapport among its constituents and clients.",
    ],
  ];
  // END OF CUSTOMIZATION

  // Adds glow animation on the background
  function bgElementChange() {
    let windowHeight = document.documentElement.clientHeight;
    let bg = document.getElementById("strength-glow");
    let bgelement = document
      .getElementById("strength-glow")
      ?.getBoundingClientRect();
    if (
      bgelement &&
      windowHeight / 2 >= bgelement.top &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.25
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-1.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.25 &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.5
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-2.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.5 &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.75
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-3.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.75 &&
      windowHeight / 2 < bgelement.top + bgelement.height
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-4.svg)";
      }
    } else {
      if (bg) {
        bg.style.opacity = "0";
        bg.style.backgroundImage = "none";
      }
    }
  }

  onMount(() => {
    bgElementChange();
    window.addEventListener("resize", bgElementChange);
    window.addEventListener("scrollend", bgElementChange);
  });
</script>

<div
  id="strengths"
  class="relative flex justify-center mt-[80px] mb-[40px] mx-auto container min-h-[700px]"
>
  <div
    id="strength-bg"
    class="relative flex justify-center items-center w-full min-h-full max-w-[1000px]"
  >
    <div id="strength-glow" class="w-full h-full" />
    <div id="strength" class="flex flex-col gap-10 w-[88%]">
      {#each strengths as strength, i}
        {#if (i + 1) % 2 == 0}
          <div class="flex justify-end">
            <div class="flex flex-col gap-3 scrollFadeIn max-w-full">
              <div class="flex">
                <div class="w-fit">
                  <UnderlinedText
                    text={strength[0]}
                    isFixed={true}
                    width={250}
                    textcustomization="text-2xl font-extrabold"
                    textboxcustomization=""
                  />
                </div>
              </div>
              <div class="flex">
                <div class="max-w-[400px] w-[100%] text-white">
                  <p class="font-light text-justify indent-8">
                    {strength[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        {:else}
          <div class="flex flex-col gap-3 scrollFadeIn max-w-[400px]">
            <div class="w-fit">
              <UnderlinedText
                text={strength[0]}
                isFixed={true}
                width={250}
                textcustomization="text-2xl font-extrabold"
                textboxcustomization=""
              />
            </div>
            <div class="max-w-[400px] w-[100%] text-white">
              <p class="font-light text-justify indent-8">
                {strength[1]}
              </p>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  #strength-bg {
    position: relative;
    background: url("/acss-cube.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #strength-glow {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  #strength {
    position: relative;
  }
</style>
