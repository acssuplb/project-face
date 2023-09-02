

<section class = "gallery px-5">
  <div class = "gallery-container bg-none grid grid-cols-3 lg:grid-cols-4 justify-center items-start gap-2 md:gap-4 lg:gap-4 xl:gap-8  mb-4">
    <div class="image-container relative block overflow-hidden transform transition-transform rounded-2xl hover:scale-105">
        <img src="/acss_uplb_website.jpg" class="gallery-img max-w-full h-[full] object-contain  " alt=''/>
    </div>
    <div class="image-container relative block overflow-hidden transform transition-transform rounded-2xl hover:scale-105">
      <img src="/acss_uplb_website.jpg" class="gallery-img max-w-full h-full object-contain  " alt=''/>
    </div>
    <div class="image-container relative block overflow-hidden transform transition-transform rounded-2xl hover:scale-105">
      <img src="/acss_uplb_website.jpg" class="gallery-img max-w-full h-full object-contain  " alt=''/>
    </div>  
    <div class="image-container relative block overflow-hidden transform transition-transform rounded-2xl hover:scale-105">
      <img src="/acss_uplb_website.jpg" class="gallery-img max-w-full h-full object-contain  " alt=''/>
    </div>
  </div>
</section>


<style>
  .image-container:hover{
    box-shadow: 0 0 100px rgba(59, 127, 239, 0.5);
    transition: box-shadow 0.5s ease-in-out;
  }

  @media (max-width: 640px){
    .gallery-container {
      padding-top: 1rem;
    }
  }

  @media (min-width: 641px) and (max-width: 767px){
    .gallery-container {
      padding-top: 2rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px){
    .gallery-container {
      padding-top: 3rem;
    }
  }

  @media (min-width: 1024px){
    .gallery-container {
      padding-top: 4rem;
    }
  

  }
</style>