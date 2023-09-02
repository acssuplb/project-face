<script>
  import HexagonGlass from "$components/molecules/Home/HexagonGlass.svelte";
  import { onMount } from "svelte";

  onMount(() => {});
</script>

<div class="container mx-auto">
  <div
    class="flex flex-col first-letter:justify-center mt-[110px] mb-[40px] md:ml-[10%] md:mr-[10%] xl:ml-[16%] xl:mr-[40%] ss:ml-[6%] ss:mr-[6%] scrollFadeIn"
  >
    <h5 class="break-all">Contributions</h5>
    <div class="relative h-fit">
      <div id="background" class="h-full opacity-0 scrollFadeIn">
        <!-- Top Right Ellipse -->
        <img
          id="top1-pos"
          src="../assets/gradient-ellipse.svg"
          alt="Gradient Ellipse"
          class="absolute top-pos h-16 rotate-180"
        />
        <!-- Bottom Left Ellipse -->
        <img
          id="bot1-pos"
          src="../assets/gradient-ellipse.svg"
          alt="Gradient Ellipse"
          class="absolute h-16"
        />
      </div>
      <!-- CUSTOMIZE THIS: Add here the contibutions (should be a paragraph) -->
      <div id="background2" class="glassmorphic-rectangle p-10 mt-2 opacity-0 scrollFadeIn">
        <p class="font-light text-justify indent-8">
          Contributions, this is a sample sentence. Contributions, this is a
          sample sentence. Contributions, this is a sample sentence.
          Contributions, this is a sample sentence. Contributions, this is a
          sample sentence. Contributions, this is a sample sentence.
          Contributions, this is a sample sentence. Contributions, this is a
          sample sentence. Contributions, this is a sample sentence.
        </p>
      </div>
      <!-- END OF CUSTOMIZATION -->
    </div>
  </div>
</div>

<style>
  #top1-pos {
    top: -10px;
    left: calc(100% - 38px);
  }
  #bot1-pos {
    top: calc(100% - 48px);
    left: -15px;
  }
  #background{
    transition-delay: 0.5s;
  }
  #background2{
    transition-delay: 0.2s;
  }
</style>
