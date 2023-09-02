<script>
  import { Button } from "$components";

  let string = "",
    buttonVisible = true;

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div class="grid grid-cols-10 pl-20 pr-20 h-screen">
  <div class="flex justify-center items-center lg:col-span-5 xl:col-span-4">
    <div class="hidden justify-center xl:justify-end lg:p-10 lg:block xl:block">
      <img src="/assets/contactUS-photo.png" alt="photo" />
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center sm:col-span-6 md:col-span-9 lg:col-span-5 xl:col-span-6"
  >
    <div class="grid grid-row-8 gap-3">
      <div class="flex flex-col justify-start items-start row-span-2">
        <h4 class="font-bold m-0">
          Get in <span style="color:var(--color-blue)">Touch!</span>
        </h4>
        <p class="font-base font-lightweight">
          We will answer as soon as we can!
        </p>
      </div>
      <div class="flex justify-start items-center row-span-1">
        <div class="grid grid-cols-4 gap-3">
          <input
            class="p-3 bg-transparent border-solid border col-span-2"
            placeholder="Full Name"
          />
          <input
            class="p-3 bg-transparent border-solid border col-span-2"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="flex justify-start items-center row-span-4 h-auto">
        <textarea
          class="custom-scrollbar p-3 bg-transparent border-solid border w-full h-[40vh]"
          placeholder="Your Message"
        />
      </div>
      <div class="flex row-span-1">
        <Button onClick={handleClick}>
          <a href="../../ContactUs">Contact Us</a>
        </Button>
      </div>
    </div>
  </div>
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--color-blue);
    border-radius: 9999px;
  }

  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: var(--color-blue) transparent;
  }
</style>
