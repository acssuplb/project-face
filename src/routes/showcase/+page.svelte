<script>
// @ts-nocheck

  import {
    Activities,
    Events,
    Projects,
    Workshops,
    ShowcaseNavBar,
    ShowcaseTitle,
    ShowcaseCards,
  } from "$components";
  import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
  
  const showcaseComponents = {
    Projects,
    Events,
    Workshops,
    Activities
  };


  let tabs = ["Projects", "Events", "Workshops", "Activities"]
  let activeTab = sessionStorage.getItem("activeTab") || "Projects";

  const tabChange = (e) => {
    activeTab = e.detail;
   
    sessionStorage.setItem("activeTab", activeTab);
  }
</script>


<head>
  <title>Showcasing Excellence - The Alliance of Computer Science Students UPLB</title>
  <meta name="title" content="Showcasing Excellence - The Alliance of Computer Science Students UPLB" />
  <meta
  property="og:title"
  content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta
  property="twitter:title"
  content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta name="description" content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best." />
  <meta
    property="og:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
  <meta
    property="twitter:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
</head>

<div class="overflow-hidden w-full flex flex-col items-center px-5 py-10 relative z-20" >

  <ShowcaseTitle/>
 
  <ShowcaseNavBar {activeTab} {tabs} on:tabChange={tabChange}/>
  {#each tabs as tab}
    {#if activeTab === tab}
      <svelte:component this={showcaseComponents[tab]}/>
    {/if}
  {/each}
  <!-- <div class="showcase-container  flex flex-col items-center  ">

    


  </div> -->
</div>


