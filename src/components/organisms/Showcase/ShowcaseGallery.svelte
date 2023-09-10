

<script>
// @ts-nocheck

  export let contents = "";
  export let contentTitle = "";
  let showModal = false;
  let selectedImageIndex = 0;



  import Modal from "./Modal.svelte";

  import { data } from "./data";
  let galleryImages = [];


  //updating gallery
  const selectedContent = data[contents]?.find((content) => content.title.toLowerCase() === contentTitle.toLowerCase());
  if (selectedContent) {
    for(let image of selectedContent.images){
      galleryImages.push(image)
    }
    
  }

 
  
  function openModal(index){
    selectedImageIndex = index
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function nextImage() {
    selectedImageIndex = (selectedImageIndex + 1) % galleryImages.length;
  }

  function prevImage() {
    selectedImageIndex = (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
  }

  
</script>

<section class = "z-50 gallery px-5">
  
  <div class="gallery-container bg-none grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-2 md:gap-4 lg:gap-4 xl:gap-4">
    {#each galleryImages as image, index}
    <!-- Wrap the entire container in a clickable <div> -->
    <div on:click={() => openModal(index)}>
      <div class="image-container relative block overflow-hidden transform transition-transform rounded-2xl">
        <img src={image} class="gallery-img w-[300px] md:w-[360px] h-[100px] md:h-[240px] object-cover" alt='' />
      </div>
    </div>
    {/each}
  </div>


  {#if showModal}
    <Modal {selectedImageIndex} {galleryImages} {closeModal} {prevImage} {nextImage}/>
  {/if}

</section>


<style>
  .image-container{
    transition: box-shadow 0.3s ease-in-out;
    transform: scale(1);
  }

  .image-container:hover{
    box-shadow: 0 0 100px rgba(59, 127, 239, 0.5);
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
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