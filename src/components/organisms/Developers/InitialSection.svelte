<!-- InitialSection.svelte -->
<script>
  import ScrollIcon from './ScrollIcon.svelte';
  import {slide, fade} from 'svelte/transition'; 

  const gallery_items = [
    {
      url: "https://res.cloudinary.com/beswift/image/upload/v1650390102/photo-1649894222226-056a1a79d9fb_xlv73h.jpg",
      description: "Dog",
    },
    {
      url: "https://res.cloudinary.com/beswift/image/upload/v1650391131/photo-1648800475313-2bb7fbec8701_ae60yw.jpg",
      description: "Building",
    },
    {
      url: "https://res.cloudinary.com/beswift/image/upload/v1650391337/photo-1647067867267-e01d98462f3c_ugtnwe.jpg",
      description: "Staircase",
    },
    {
      url: "https://res.cloudinary.com/beswift/image/upload/v1650391490/photo-1644241687200-eadaf7601290_xcz2kh.jpg",
      description: "Staircase",
    },
  ];
  let currentSlideItem = 0;
  function nextImage() {
    currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
  }
  
  // Automatically change the image every 3 seconds
  let interval;
  
  function startAutoSlide() {
    interval = setInterval(nextImage, 3000);
  }
  
  startAutoSlide(); // Start the automatic slideshow
</script>


<section class="container mx-auto px-36">
  <div class="flex flex-col min-h-screen gap-5 md:flex-row md:align-center md:justify-between md:gap-20 full-height py-28 px-4 md:px-8 lg:px-16 xl:px-20">
    
      <!-- Left side: Slideshow with Fade Animation -->
      <div class="relative">
        <!-- Hexagon -->
        <div class="absolute top-[-40px] right-[-45px]">
          <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] ss:max-w-[100%] w-24"/>
        </div>

        <!-- Hexagon -->
        <div class="absolute bottom-[-40px] left-[-45px]">
          <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] ss:max-w-[100%] w-24"/>
        </div>

        <!-- Images -->
        <div class="slideshow flex md:flex-1 items-center justify-center w-[400px] h-[450px]">
          <!-- Reference: https://cloudinary.com/blog/how-to-create-a-carousel-in-3-ways-in-svelte -->
          {#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
            <img in:slide out:fade src={item.url} alt={item.description} class="w-full h-full object-cover max-w-xs md:max-w-lg rounded-2xl"/>
          {/each}
        </div>
  
        <!-- Hexagon -->
        <div class="absolute top-[40px] right-[-30px]">
          <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] ss:max-w-[100%] w-16"/>
        </div>
  
        <!-- Hexagon -->
        <div class="absolute bottom-[40px] left-[-30px]">
          <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] ss:max-w-[100%] w-16"/>
        </div>
      </div>


      <!-- Right side: Text and scroll icon -->
      <div class="flex flex-col md:justify-center md:flex-1 gap-10">
          <div class="flex flex-col gap-1">

              <!-- "Meet the Team" text -->
              <h1 class="text-6xl font-bold leading-tight lg:text-15xl md:leading-snug tracking-wide text-white">
                  Meet the Team
              </h1>

              <!-- Description text -->
              <p class="font-light text-slate-200 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
          </div>

      <!-- Scroll icon animation -->
      <ScrollIcon />
    </div>
  </div>
</section>

<style>
    .slideshow {
    filter: drop-shadow(0px 4px 4px #000000);
    border-radius: 16px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
</style>