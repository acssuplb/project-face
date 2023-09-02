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
    NavBar,
    Footer,
  } from "$components";
  import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
  
  const showcaseComponents = {
    Projects,
    Events,
    Workshops,
    Activities,
  };


  let tabs = ["Projects", "Events", "Workshops", "Activities"]
  let activeTab = "Projects" 

  const tabChange = (e) => {
    activeTab = e.detail;
  }
</script>

<style>
  .showcase-background {
      background-image: url('/BACKGROUND.svg');
      background-repeat: no-repeat;
      background-size: cover;
  }
  @media (max-width: 640px){
    .showcase-container {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
  }

  @media (min-width: 641px) and (max-width: 767px){
    .showcase-container {
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px){
    .showcase-container {
      padding-right: 3.5rem;
      padding-left: 3.5rem;
    }
  }

  @media (min-width: 1024px){
    .showcase-container {
      padding-right: 4rem;
      padding-left: 4rem;
    }

  }
  
</style>
<head>
  <title>Showcase</title>
</head>

<div class="overflow-hidden w-full flex flex-col bg-base-black items-center px-5 py-10" >
  <GradientBlur />
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


