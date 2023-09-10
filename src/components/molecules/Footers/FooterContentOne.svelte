<script>
  import { Button } from "$components";

  let HomePage = [
    ["DevStories", "/#devstories"],
    ["Strengths", "/#strengths"],
    ["Contributions", "/#contributions"],
    ["Brief Showcase", "/#briefshowcase"],
  ];

  let Showcase = [
    ["Projects", "/showcase#projects"],
    ["Events", "/showcase#events"],
    ["Workshops", "/workshops#workshops"],
    ["Activities", "/activities#activities"],
  ];

  let AboutUs = [
    ["History", "/about-us#history"],
    ["Mission & Vision", "/about-us#mission-vision"],
    ["Core Vaues", "/about-us#core-values"],
    ["Advisers", "/about-us#advisers"],
  ];

  let Developers = [
    ["Executives", "/developers#executives"],
    ["Resident Members", "/developers#resident-members"],
    ["Member Roster", "/developers#member-roster"],
  ];

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div
  class="content-container grid grid-cols-12 pl-20 pr-20 pt-10 pb-10 w-100 gap-12 font-thin text-xs i-tiny leading-5"
>
  <div
    class="flex flex-row col-span-3 md:col-span-4 xl:col-span-3 text-left justify-between"
  >
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
        <a href="https://www.instagram.com/acssuplb/"
          ><img src="/assets/icon-instagram.svg" class="h-6 w-6" /></a
        >
      </div>
    </div>
  </div>
  <div
    class="flex flex-row col-span-6 md:col-span-4 xl:col-span-6 items-start justify-center gap-10"
  >
    <div
      class="flex md:flex-col md:flex-col lg:flex-col xl:flex-row gap-10 justify-around"
    >
      <div class="flex flex-col">
        <p class="font-normal text-sm mb-2">Home</p>
        {#each HomePage as item, index}
          <div class="page-container">
            <a href={item[1]}><p class="pages">{item[0]}</p></a>
          </div>
        {/each}
      </div>
      <div class="flex flex-col">
        <p class="font-normal text-sm mb-2">Showcase</p>
        {#each Showcase as item, index}
          <div class="page-container">
            <a href={item[1]}><p class="pages">{item[0]}</p></a>
          </div>
        {/each}
      </div>
    </div>
    <div
      class="flex md:flex-col md:flex-col lg:flex-col xl:flex-row gap-10 justify-around"
    >
      <div class="flex flex-col">
        <p class="font-normal text-sm mb-2">About Us</p>
        {#each AboutUs as item, index}
          <div class="page-container">
            <a href={item[1]}><p class="pages">{item[0]}</p></a>
          </div>
        {/each}
      </div>
      <!-- <div class="flex flex-col">
        <p class="font-normal text-sm mb-2">Developers</p>
        {#each Developers as item, index}
          <div class="page-container">
            <a href={item[1]}><p class="pages">{item[0]}</p></a>
          </div>
        {/each}
      </div> -->
    </div>
  </div>
  <div
    class="flex flex-col flex-grow col-span-3 md:col-span-4 xl:col-span-3 gap-3"
  >
    <div class="flex flex-col">
      <p class="text-xl font-bold">Let’s Discuss What’s Next</p>
      <p>Have a question? We’d love to here from you!</p>
    </div>
    <a href="/contact-us"><Button onClick={handleClick}>Contact Us</Button></a>
  </div>
</div>

<style>
  .content-container .pages:hover {
    cursor: pointer;
    color: var(--color-sky-blue);
  }

  /* .content-container {
    background-color: var(--color-dark-3);
  } */

  /* .vertical-line {
    width: 2px;
    height: 12rem;
    color: var(--color-white);
    background-color: var(--color-white);
    transition: width 0.3s ease-in-out; 
  } */

  /* @media (min-width: 1400px) and (max-width: 1700px) {
    .content {
      max-width: 25%;
      min-width: 22%;
    }
  }
  @media (min-width: 0px) and (max-width: 1400px) {
    .content {
      max-width: 50%;
      min-width: 35%;
    }
    .vertical-line {
      height: 18rem;
    }
  } */
</style>
