<script>
// @ts-nocheck

    import { data } from "./data";
    import {page} from '$app/stores'
    const showcaseId = $page.params.showcaseId
    export let contents;
</script>
  
<div class="margin-0  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-start gap-8 xl:gap-10 mt-10 ">
    {#each data[contents] as content (content.title)}
        <a href ="/showcase/{content.title}">   
        <div class="flex flex-col items-center gap-4 transform transition-transform hover:scale-105">
            <div class="box-container rounded-2xl flex-shrink-1">
                <img src="acss_uplb_website.jpg" alt="" class=" w-full h-full rounded-2xl  object-fit">
            </div>
            <div class="text-container  border border-[#3E3B4C] rounded-2xl border-solid flex items-center">
                <div class="content-container px-8">
                    <div class="flex flex-col justify-center">
                        <div>
                            <h3 class="text-title text-white">{content.title}</h3>
                        </div>
                        <div>
                            <h4 class="text-blurb font-normal text-white">{content.blurb}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a>
    {/each}
</div>


<style>

    .box-container{
        max-width: 480px;
    
    }

    .text-container{
        height: 150px;
        max-width: 480px;
        

    }
    /* Small screen */
    @media (max-width: 640px) {

        .text-title {
            font-size: 16px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 12px; /* Adjusted font size */
        }
    }

    /* Medium screen */
    @media (min-width: 641px) and (max-width: 767px) {

        .text-title {
            font-size: 18px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 14px; /* Adjusted font size */
        }
    }

    /* Large screen */
    @media (min-width: 768px) and (max-width: 1023px) {

        .text-title {
            font-size: 18px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 16px; /* Adjusted font size */
        }
    }

    /* Extra large screen */
    @media (min-width: 1024px) {
        .text-title {
            font-size: 20px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 16px; /* Adjusted font size */
        }
    }
</style>