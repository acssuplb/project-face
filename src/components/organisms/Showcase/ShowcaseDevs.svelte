<script>
    let devs = [
        {id: 0, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]},
        {id: 1, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]},
        {id: 2, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]},
        {id: 3, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]},
        {id: 4, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]},
        {id: 5, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]},
        {id: 6, name: "Darwin Reigh Calub", role: "Frontend Developer", socials: ["/github icon.svg", "/google icon.svg", "/linkedin icon.svg"], ts:["/Python.svg","/Javascript.svg","/Subtract.svg"]}
    ]
</script>






<section class="px-5 md:py-10">
    <div class="dev-cards-content">
        <div class=" flex flex-col md:items-center ">
            <h4 class="title text-5xl font-bold  text-white">
                Developers
            </h4>
            
            <div class="">
                <div class="flex flex-wrap gap-5 md:gap-10 md:justify-center py-10 ">
                    
                    {#each devs as dev (dev.id)}
                        <div class="glassmorphic-rectangle py-8 flex flex-col justify-self-center items-center w-[200px] md:w-[232px] h-[300px]  rounded-2xl relative">
                            
                            <div class=" h-[150px] w-[135px] rounded-full border border-[#D9D9D9] mx-auto flex items-center justify-center ">
                                <div class="h-[100px] w-[100px] rounded-full bg-gray-300 relative">
                                    <img src="/acss-cube-1.svg"  class="h-full w-full rounded-full object-cover" />
                                </div>
                            </div>

                            <!--hexagon-->
                            <div class="absolute bottom-[165px] left-[40px] md:left-[55px] transform -translate-x-1/2  translate-y-1/3 transform transition-transform hover:scale-110">
                                <div class=" bg-center bg-cover rounded-full absolute bottom-[8px] left-[6px]" >
                                    
                                    <img src = "{dev.ts[0]}"/>
                                    
                                </div>
                                
                                <img src="/Hexagon Gradient.svg"  />
                            </div>
                            <div class="absolute top-[20px] right-[20px] md:right-[40px] transform -translate-x-1/2  translate-y-1/3 transform transition-transform hover:scale-110">
                                <div class=" bg-center bg-cover rounded-full absolute bottom-[8px] left-[7px]" >
                                    <img src = "{dev.ts[1]}"/>
                                </div>
                                <img src="/Hexagon Gradient.svg"  />
                            </div>
                            <div class="absolute bottom-[165px] right-[10px] md:right-[25px] transform -translate-x-1/2  translate-y-1/3 transform transition-transform hover:scale-110">
                                <div class=" bg-center bg-cover rounded-full absolute bottom-[8px] left-[7px]" >
                                    <img src = "{dev.ts[2]}"/>
                                </div>
                                <img src="/Hexagon Gradient.svg"  />
                            </div>
                            

                            <div class="flex flex-col justify-center items-center mt-2 p-2 gap-2">
                                <h4 class="text-name font-bold text-lg text-white justify-center text-center leading-5">{dev.name}</h4>
                                <h5 class="text-position font-normal text-xs text-white">{dev.role}</h5>
                                
                            </div>
                            <div class="flex flex-row justify-center space-x-3 items-center gap-1 ">
                                {#each dev.socials as social}
                                    <a href = ""><img src="{social}" class="transform transition-transform hover:scale-110"></a>
                                {/each}
                                

                            </div>
                            




                        </div>
                    {/each} 
                </div>  
            </div>
  
        
    
        </div>

    </div>


</section>


<style>

/* .dev-cards-content{
            padding-top: 5rem;
            padding-right: 4rem;
            padding-left: 4rem;

        }
.title {
    font-size: 48px;
} */
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
    @media (max-width: 640px) {
    .title {
        font-size: 1.5rem;
    }

    }
    @media (min-width: 641px) and (max-width: 767px) {
    .title {
        font-size: 1.875rem;
    }

    }

    @media (min-width: 768px) and (max-width: 1023px) {

    .title {
        font-size: 2.25rem;
    }

    }

    @media (min-width: 1024px) {

    .title {
        font-size: 3rem;
    } 
    }
</style>


<!-- </div> -->