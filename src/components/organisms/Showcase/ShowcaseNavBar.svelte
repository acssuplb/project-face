<script>
// @ts-nocheck
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let tabs;
    export let activeTab;

    function handleTabClick(tab) {
        dispatch('tabChange', tab);
    }
</script>

<section class='showcase-navbar'>
    <!-- tabs -->
    <ul class="navbar-text flex justify-center gap-10 lg:gap-24 list-none">
            {#each tabs as tab}
                <li on:click={() => handleTabClick(tab)} class = "hover:cursor-pointer">
                    <span class:active={tab === activeTab}>{tab}</span>
                </li>
            {/each}
        
    </ul>
</section>

<style>
    .active{
        color:aquamarine
    }
    
    @media (max-width: 640px) {
        .navbar-text {
            font-size: 16px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }

    @media (min-width: 641px) and (max-width: 767px) {
        .navbar-text {
            font-size: 18px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .navbar-text {
            font-size: 20px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }
   
    @media (min-width: 1024px) {
        .navbar-text {
            font-size: 20px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }
</style>
