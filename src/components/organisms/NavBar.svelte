<script>
  import { Button, HamburgerMenu } from "$components";
  import { page } from "$app/stores";

  let pages = [
    { title: "About Us", url: "/about-us" },
    { title: "Showcase", url: "/showcase" },
    { title: "Developers", url: "/developers" },
  ];

  const isActive = (/** @type {string} */ path) => {
    return $page.url.pathname == path;
  };

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }

  // let showComponent = true;
  // const handleHover = () => {
  //   showComponent = true;
  // };

  // const handleLeave = () => {
  //   showComponent = false;
  // };
</script>

<header>
  <nav class="p-10 fixed z-50">
    <div class="flex lg:hidden xl:hidden justify-start self-start">
      <HamburgerMenu />
    </div>
  </nav>
  <div class="hoverable-component bg-transparent">
    <!-- {#if showComponent} -->
    <nav
      class="hovered-section"
      on:mouseenter={handleHover}
      on:mouseleave={handleLeave}
    >
      <div
        class="flex flex-row justify-between items-center fixed top-0 w-screen pl-10 xl:pl-20 lg:pl-20 pr-20 pb-3 pt-10 lg:pt-3 xl:pt-3 z-50 backdrop-blur-none lg:backdrop-blur-md xl:backdrop-blur-md"
      >
        <div class="hidden lg:grid xl:grid grid-cols-2">
          <a href="/">
            <img
              src="/logo.webp"
              alt="The official seal of The Alliance of Computer Science Student"
              class="nav__logo"
            />
          </a>
        </div>
        <div class="hidden lg:flex items-center flex justify-end gap-5">
          <ul class="flex flex-row gap-5">
            {#each pages as { title, url }}
              <li>
                <a
                  href={url}
                  class={`duration-300 ${
                    isActive(url)
                      ? "text-base-sky-blue hover:text-base-white gradient-line mt-1"
                      : ""
                  } hover:text-base-sky-blue`}>{title}</a
                >
              </li>
            {/each}
          </ul>
          <a href="/contact-us">
            <Button onClick={handleClick}>Contact Us</Button>
          </a>
        </div>
      </div>
    </nav>
    <!-- {/if} -->
  </div>
</header>

<style>
  /* .hoverable-component .hovered-section {
    display: none; 
  }
  .hoverable-component:hover .hovered-section {
    display: block !important;
  } */
  .show {
    opacity: 1;
  }
  .nav {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding: 3rem;

    width: 100%;
    max-height: 5rem;
  }

  .nav__logo {
    max-height: 4rem;
  }

  .nav__right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    column-gap: 3rem;
  }
</style>
