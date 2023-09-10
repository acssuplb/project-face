<script>
  import { dev } from "$app/environment";


    export let contentTitle = "";


    import developer from "$lib/admin/schemas/developer";
    import { data } from "./data";


</script>




<section class="z-50 px-5 md:py-10">
    <div class="dev-cards-content">
        <div class=" flex flex-col md:items-center ">
            <h4 class="text-4xl lg:text-5xl font-bold text-white">
                Developers
            </h4>
            
            <div class="lg:w-[1000px]">
                <div class="flex flex-wrap gap-2 sm:gap-4 md:gap-5 md:justify-center py-10 ">
                    {#each data["projects"] as content}
                        {#if content.title.toLowerCase() === contentTitle }
                            {#each content.developers as dev}
                                <div class="glassmorphic-rectangle py-4 px-2  sm:py-8 flex flex-col justify-self-center items-center w-[145px] h-[210px] sm:w-[200px] md:w-[232px] sm:h-[300px] rounded-2xl relative">
                                    <div class=" w-[80px] h-[80px] sm:h-[150px] sm:w-[135px] rounded-full border border-[#D9D9D9] mx-auto flex items-center justify-center ">
                                        <div class="w-[60px] h-[60px] sm:h-[100px] sm:w-[100px] rounded-full relative">
                                            <img src="{dev.pic[0]}"  class="h-full w-full rounded-full object-cover" />
                                        </div>
                                    </div>
        
                                    
                                    <div class="absolute bottom-[120px]  sm:bottom-[165px] left-[40px] md:left-[55px] transform -translate-x-1/2  translate-y-1/3 transform transition-transform hover:scale-110">
                                        <div class=" bg-center bg-cover rounded-full absolute bottom-[3px] left-[1px] sm:bottom-[4px] sm:left-[2px]" >
                                            
                                            <img src = "{dev.ts[0]} " class=""/>
                                            
                                        </div>
                                        
                                        <img src="/Hexagon Gradient.svg" class= "w-[20px] sm:w-full" />
                                    </div>
                                    <div class="absolute top-[10px] right-[18px] sm:top-[20px] sm:right-[20px] md:right-[40px] transform -translate-x-1/2  translate-y-1/3 transform transition-transform hover:scale-110">
                                        <div class=" bg-center bg-cover rounded-full absolute bottom-[3px] left-[1px] sm:bottom-[4px] sm:left-[2px]" >
                                            <img src = "{dev.ts[1]}" class=""/>
                                        </div>
                                        <img src="/Hexagon Gradient.svg"  class= "w-[20px] sm:w-full" />
                                    </div>
                                    <div class="absolute bottom-[122px] right-[15px] sm:bottom-[165px] sm:right-[10px] md:right-[25px] transform -translate-x-1/2  translate-y-1/3 transform transition-transform hover:scale-110">
                                        <div class="bg-center bg-cover rounded-full absolute bottom-[3px] left-[1px] sm:bottom-[4px] sm:left-[2px]" >
                                            <img src = "{dev.ts[2]}" class=""/>
                                        </div>
                                        <img src="/Hexagon Gradient.svg" class= "w-[20px] sm:w-full"  />
                                    </div>
                                    
        
                                    <div class="flex flex-col justify-center items-center mt-4 sm:mt-2 gap-2 sm:p-2 sm:gap-2">
                                        <h4 class="text-name font-bold text-sm sm:text-lg text-white justify-center text-center leading-4 sm:leading-5">{@html dev.name}</h4>
                                        <h5 class="text-position font-normal text-xs text-white text-center leading-none">{@html dev.role}</h5>
                                        
                                    </div>
                                    <div class="flex flex-row justify-center space-x-2 sm:space-x-3 items-center mt-2 gap-1 ">
                                        {#each dev.socials as social,i}
                                            <a href = "{dev.links[i]}">
                                                <img src="{social}" class="transform transition-transform w-[10px] sm:w-full sm:h-full hover:scale-110">
                                            </a>
                                        {/each}
                                    </div>
        
                                </div>
                            {/each}
                        {/if}
                    {/each} 
                </div>  
            </div>
  
        
    
        </div>

    </div>
</section>




<style>


    .glassmorphic-rectangle {
        border-radius: 16px;
        border: 0.01rem solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 100%
        );
        backdrop-filter: blur(21px);
    
    }
</style>


<!-- </div> -->