<script>
    import {ShowcaseHeader, NavBar, ShowcaseImage, ShowcaseDescription, ShowcaseGallery, ShowcaseDevs} from "$components";
    import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";

    import { page } from '$app/stores'
    const showcaseId = page;
  
  
  </script>
  <head>
      <title>{showcaseId}</title>
  </head>
  
  <style>
      .showcase-background {
          background-image: url('/BACKGROUND.svg');
          background-repeat: no-repeat;
          background-size: cover;
      }
  </style>
  
  <div class="min-h-screen flex flex-col items-center showcase-background gap-10">
    <GradientBlur />
    
    <ShowcaseHeader/>
    <ShowcaseImage/>
    <ShowcaseDescription/>
    <ShowcaseGallery/>
    <ShowcaseDevs/>
      <!-- <header>
          <span class="text-[20px] font-light text-base-white">HEADER</span>
      </header>
       -->
      <!--header image-->
      <!-- <div class = "flex flex-col items-start gap-5 pl-20 pr-20">
          <a href = "/projects">  
              <div class ="flex flex-row items-center justify-center gap-[10px]">
                  <img src = "/arrow left.png" class ="w-5 h-8" alt=""/>
                  <span class="text-xl font-light text-base-white">
                      GO BACK TO PROJECTS
                  </span>
                  
              </div>
          </a>
         
          <ShowcaseImgHeader/>
      </div> -->
      
      <!-- showcase information-->
      <!-- <ShowcaseDetails/>    -->
      
  
      <!--showcase gallery-->
      <!-- <div class ="flex flex-col items-center mt-10">
          <div>
              <span class="text-2xl md:text-3xl tracking-wider font-bold text-white">
                  Gallery
              </span>
          </div>
          <div>
              <ShowcaseGallery/>
          </div>
      </div> -->
  
      <!--developer cards-->
      <!-- <div class ="flex flex-col items-center mt-10 ">
          <div>
              <span class="text-2xl md:text-3xl tracking-wider font-bold text-white">
                  Developers
              </span>
          </div>
          <div>
              <ShowcaseDev/>
          </div>
      </div>
       -->
 
  
  
  </div>