<script>
  import {
    InitialSection,
    ResidentMembers,
    MembersRoster,
    NavBar,
    Footer,
  } from "$components";
  import { onMount } from 'svelte';

  let activeSection = "initial"; // To keep track of the active section

  function handleScroll(event) {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.clientHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
      // Reached the bottom of the page, update activeSection
      switch (activeSection) {
        case "initial":
          activeSection = "executives";
          break;
        case "executives":
          activeSection = "roster";
          break;
        case "roster":
          activeSection = "residents";
          break;
        // You can add more cases if you have additional sections
      }

      // Scroll to the next section smoothly
      const sectionElement = document.getElementById(activeSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="container">
  <NavBar />

  <div id="initial">
    <InitialSection
      imageURL='sample.png'
      title="Meet the Team"
      description="Alliance of Computer Science Students — University of the Philippines Los Baños Alliance of Computer Science"
    />
  </div>

  <div id="resident">
    <ResidentMembers />
  </div>

  <!-- <div id="roster">
    <MembersRoster />
  </div> -->

  <!-- <div id="residents">
    <ResidentMembers />
  </div> -->

  <!-- <Footer /> -->
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
