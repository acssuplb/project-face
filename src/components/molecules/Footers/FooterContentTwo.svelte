<script>
  import { Button } from "$components";

  let HomePage = [
    ["DevStories", ""],
    ["Strengths", ""],
    ["Contributions", ""],
    ["Brief Showcase", ""],
  ];

  let Showcase = [
    ["Projects", ""],
    ["Events", ""],
    ["Workshops", ""],
    ["Activities", ""],
  ];

  let AboutUs = [
    ["History", ""],
    ["Mission & Vision", ""],
    ["Core Vaues", ""],
    ["Advisers", ""],
  ];

  let Developers = [
    ["Executives", ""],
    ["Resident Members", ""],
    ["Member Roster", ""],
  ];

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div
  class="content-container flex flex-col pl-20 pr-20 pt-10 pb-10 w-100 gap-12 font-thin text-xs i-tiny leading-5"
>
  <div class="content flex flex-row justify-between gap-3">
    <div class="flex flex-row text-left justify-between">
      <div class="flex-col">
        <p class="font-normal mb-1">Contacts</p>
        <p>Third Floor, Physical Sciences Building,</p>
        <p>UPLB 4031 Los Baños, Philippines</p>
        <p>0912 345 7890</p>
        <p>acssph@gmail.com</p>
        <div class="flex flex-row justify-start gap-6 mt-4">
          <a href="https://www.facebook.com/ACSSPH"
            ><img src="/assets/icon-facebook.svg" class="h-6 w-6" /></a
          >
          <a href="https://twitter.com/ACSSUPLB">
            <img src="/assets/icon-twitter.svg" class="h-6 w-6" />
          </a>
          <a href="/"
            ><img src="/assets/icon-instagram.svg" class="h-6 w-6" /></a
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-grow gap-3">
      <div class="flex flex-col">
        <p class="text-xl font-bold">Let’s Discuss What’s Next</p>
        <p>Have a question? We’d love to here from you!</p>
      </div>
      <Button onClick={handleClick}>Contact Us</Button>
    </div>
  </div>

  <div class="sitemap flex flex-row items-start justify-between">
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">Home</p>
      {#each HomePage as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">Showcase</p>
      {#each Showcase as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">About Us</p>
      {#each AboutUs as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">Developers</p>
      {#each Developers as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- <div class="grid w-full">
  <div class="flex gap-10 w-full justify-self-center self-center">
    <div class="flex flex-col font-thin text-base i-tiny text-right w-1/2">
      <p class="i-regular font-normal text-xl mb-1">Contacts</p>
      <p>Third Floor, Physical Sciences Building,</p>
      <p>UPLB 4031 Los Baños, Philippines</p>
      <p>0912 345 7890</p>
      <p>acssph@gmail.com</p>
    </div>
    <div class="vertical-line h-100" />
    <div class="flex flex-col gap-3 font-thin text-base i-tiny w-1/2">
      <div class="flex flex-col">
        <p class="i-large-bold text-xl">Let’s Discuss What’s Next</p>
        <p>Have a question? We’d love to here from you!</p>
      </div>
      <Button onClick={handleClick}>Contact Us</Button>
    </div>
  </div>
  <div class="flex flex-row gap-3 mt-8 justify-around">
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">Home</p>
      {#each HomePage as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">Showcase</p>
      {#each Showcase as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">About Us</p>
      {#each AboutUs as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">Developers</p>
      {#each Developers as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
  </div>
</div> -->

<style>
  @media (min-width: 0px) and (max-width: 680px) {
    .sitemap {
      display: none;
    }
    .content {
      column-gap: 3rem;
    }
  }
  @media (min-width: 0px) and (max-width: 500px) {
    .content {
      row-gap: 3rem;
      flex-direction: column;
      justify-content: center;
    }
  }

  /* .content-container p:hover {
    cursor: pointer;
    color: var(--color-sky-blue);
  } */

  /* .vertical-line {
    width: 2px;
    height: 8rem;
    color: var(--color-white);
    background-color: var(--color-white);
    transition: width 0.3s ease-in-out;
  } */
</style>
