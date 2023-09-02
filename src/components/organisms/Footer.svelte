<script>
  import { FooterContentOne, FooterContentTwo } from "$components";

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

<div class="svg-container">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1826"
    height="65"
    viewBox="0 0 1826 65"
    fill="none"
    class="svg"
  >
    <path
      d="M0 65V0.0118731C45.9408 -0.496463 146.89 15.5415 278.585 5.23942C410.28 -5.06267 755.395 20.3936 911.734 27.0199C1163.05 37.672 1686.71 27.0199 1826 18.0735V65H0Z"
      fill="#060217"
    />
  </svg>
</div>
<div class="footer flex flex-col h-fit z-20">
  <div class="hidden md:flex lg:flex xl:flex w-100">
    <FooterContentOne />
  </div>
  <div class="flex md:hidden lg:hidden xl:hidden w-100">
    <FooterContentTwo />
  </div>
  <div
    class="footer__bottom flex flex-row pl-20 pr-20 pt-5 pb-5 w-100 justify-between items-center"
  >
    <div class="flex flex-row align-center justify-start flex-grow">
      <!-- <img
        src="/logo.webp"
        alt="The official seal of The Alliance of Computer Science Student"
        class="footer__logo"
      /> -->
      <div class="flex flex-col font-thin align-center justify-center">
        <p class="i-tiny">Alliance of Computer Science Students</p>
        <p class="i-super-tiny">University of the Philippines Los Banos</p>
      </div>
    </div>
    <div class="flex font-thin justify-end flex-grow">
      <p class="i-tiny">2023</p>
    </div>
  </div>
</div>

<style>
  @media (min-width: 0px) and (max-width: 500px) {
    .footer__bottom {
      row-gap: 1rem;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  .svg-container {
    width: 100%;
    height: 3rem;
    overflow: hidden;
    z-index: 2;
    position: relative;
  }
  .svg {
    z-index: 2;
    position: relative;
  }

  .footer {
    z-index: 1;
    position: relative;
    width: 100%;
    background-color: var(--color-dark-3);
    box-shadow: 0 0 100px rgba(59, 127, 239, 0.5);
    transition: box-shadow 0.5s ease-in-out;
  }

  .footer:hover {
    box-shadow: 0 0 110px rgba(59, 127, 239, 7);
  }
  .footer__bottom {
    background-color: var(--color-dark-4);
  }
</style>
