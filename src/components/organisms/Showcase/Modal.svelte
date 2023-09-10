<script>
    export let showModal;
    export let selectedImageIndex = "";
    export let galleryImages = "";
    export let closeModal = "";
  
    
</script>
  
<div class="modal z-50 fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center backdrop-blur-lg bg-base-black" >
    <button class="glassmorphic rounded-full w-12 h-12 absolute top-2 left-2 text-2xl cursor-pointer text-thin text-white z-20" on:click={() => closeModal()}>
        x
    </button>
    <button class="glassmorphic text-black p-3 rounded-full absolute left-5 z-20" on:click={() => selectedImageIndex = (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length}>
        <svg id="button"
            width="14"
            height="28"
            viewBox="0 0 21 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.9999 0L-6.10352e-05 21L20.9999 42L12.1016 21L20.9999 0Z"
                fill="url(#paint0_linear_181_281)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_181_281"
                    x1="48.7626"
                    y1="10.322"
                    x2="-9.2543"
                    y2="18.5085"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#2E3792" />
                    <stop offset="0.536458" stop-color="#00F5F1" />
                    <stop offset="1" stop-color="#00F5F1" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </button>
    <div class="relative p-6 max-w-4xl min-h-screen overflow-auto flex items-center">
        
        

        <img src={galleryImages[selectedImageIndex]} alt="" class="max-w-full h-auto  object-cover" />

    </div>
    <button class="glassmorphic text-black p-3 rounded-full absolute right-5 transform scale-x-[-1]" on:click={() => selectedImageIndex = (selectedImageIndex + 1) % galleryImages.length}>
        <svg id="button"
            width="14"
            height="28"
            viewBox="0 0 21 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.9999 0L-6.10352e-05 21L20.9999 42L12.1016 21L20.9999 0Z"
                fill="url(#paint0_linear_181_281)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_181_281"
                    x1="48.7626"
                    y1="10.322"
                    x2="-9.2543"
                    y2="18.5085"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#2E3792" />
                    <stop offset="0.536458" stop-color="#00F5F1" />
                    <stop offset="1" stop-color="#00F5F1" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </button>
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
    .modal {
    /* background: linear-gradient(
        135deg,
        rgba(16, 17, 44, 0.663) 0%,
        rgba(17, 28, 32, 0.8) 100%
    ); */
    background: linear-gradient(
        180deg,
        rgba(9, 9, 54, 0.663) 0%,
        rgba(6, 2, 23, 0.8) 100%
    );
}
</style>
