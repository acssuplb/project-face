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
          <a href="https://www.instagram.com/acssuplb/"
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
      <a href="/contact-us"><Button onClick={handleClick}>Contact Us</Button></a
      >
    </div>
  </div>

  <div class="sitemap flex flex-row items-start justify-between">
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">Home</p>
      {#each HomePage as item, index}
        <div class="page-container">
          <a href={item[1]}><p>{item[0]}</p></a>
        </div>
      {/each}
    </div>
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">Showcase</p>
      {#each Showcase as item, index}
        <div class="page-container">
          <a href={item[1]}><p>{item[0]}</p></a>
        </div>
      {/each}
    </div>
    <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">About Us</p>
      {#each AboutUs as item, index}
        <div class="page-container">
          <a href={item[1]}><p>{item[0]}</p></a>
        </div>
      {/each}
    </div>
    <!-- <div class="flex flex-col">
      <p class="font-normal text-sm mb-1">Developers</p>
      {#each Developers as item, index}
        <div class="page-container">
          <a href={item[1]}><p>{item[0]}</p></a>
        </div>
      {/each}
    </div> -->
  </div>
</div>

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
</style>
