<script>
  export let imageSrc;
  export let nickname;

  let isHovered = false;

  function handleHover() {
    isHovered = true;
  }

  function handleUnhover() {
    isHovered = false;
  }
</script>

<div class="relative transition-transform transform-gpu hover:scale-[1.1] on:mouseenter={handleHover} on:mouseleave={handleUnhover} cursor-pointer grayscale">
  <!-- Outer glassmorphic rectangle -->
  <div class="glassmorphic drop-shadow-md border-[1rem] rounded-2xl border-opacity-10 h-[218px] w-[172px]"></div>

  <!-- Inner glassmorphic rectangle -->
  <div class="glassmorphic left-[11px] top-3 absolute rounded-2xl w-[150px] h-[160px]">
    <!-- Placeholder for developer image --> 
    <img src={imageSrc} alt={nickname} class="w-full h-full object-cover rounded-2xl" />
  </div>

  <!-- Developer nickname -->
  <p class="absolute w-238 h-12 left-4 bottom-[-7px] font-bold text-2xl">{nickname}</p>
</div>

<style>
  .glassmorphic {
    filter: drop-shadow(0px 8px 8px #000000);
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  .grayscale {
    filter: grayscale(100%);
    --tw-text-opacity: 1;
    color: rgb(226 232 240 / var(--tw-text-opacity));
  }

  .grayscale:hover {
    filter: grayscale(0%);
    color: white;
  }
</style>
