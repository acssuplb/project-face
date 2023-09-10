<script>
// @ts-nocheck

    export let contents = "";
    export let contentTitle = "";


  import BackButton from "$components/atoms/BackButton.svelte";
    import { data } from "./data";

    
    // let words = id.split(' ');

    // if (words.length > 0){
    //     contents = words[0];

    //     words.splice(0,1);
    //     contentTitle = words.join(' ');
    // }
    
</script>

<header class="description relative h-55vh min-h-300px px-5">
    {#each data[contents] as content }
        {#if content.title.toLowerCase() === contentTitle}
            <div class="showcase-content flex flex-col justify-center md:w-[700px] lg:w-[900px]  xl:w-[1200px] h-full ">
                <div class = "py-5">

                    
                </div>
                <div class="showcase-container">
                    <div class="showcase-title perspective-60" >
                        <div class = "flex flex-row items-center gap-4">
                            <BackButton/>
                            <h5 class="text-3xl lg:text-4xl font-normal transform-style-flat origin-top-center text-white">
                            
                                {content.title}
                            </h5>
                        </div>
                  
                    </div>
                    <div class="showcase-blurb border-white">
                        <h2 class=" text-4xl lg:text-5xl font-bold tracking-wider text-white mt-10">
                            {content.blurb}
                        </h2>
                    </div>
                </div>
            </div>
        {/if}
    {/each}



</header>

<style>

    @media (max-width: 640px) {
        .showcase-content {
            padding-top: 8rem;
        }

        /* .text-base {
            font-size: 18px;
            line-height: 1rem;
            
        }
        .text-2xl {
            font-size: 24px;
            line-height: 1.75rem;
            
            margin-top: 1.5rem;

        } */
    }


    @media (min-width: 641px) and (max-width: 767px) {
        .showcase-content {
            padding-top: 8rem;


        }

        /* .text-base {
            font-size: 20px;
            
        }
        .text-2xl {
            font-size: 28px;
            line-height: 2.25rem;
            font-weight:400;
            margin-top: 2rem;

        } */
    }

 
    @media (min-width: 768px) and (max-width: 1023px) {
        .showcase-content {
            padding-top: 8rem;
        }

        /* .text-base {
            font-size: 28px;
            
        }
        .text-2xl {
            font-size: 36px;
            line-height: 2.5rem;
            
            margin-top: 2.25rem;

        } */
    }

   
    @media (min-width: 1024px) {
        .showcase-content {
            padding-top: 5rem;


        }
        /* .text-base {
            font-size: 36px;
            
        }
        .text-3 {
            font-size: 48px;
            line-height: 3rem;
            
            margin-top: 2.5rem;
        } */
    }
</style>


<!-- <div>
    <img src= "/acss_uplb_website.png" class = "w-[1900px] h-[400px] rounded-2xl " alt =""/>
</div>


 -->
