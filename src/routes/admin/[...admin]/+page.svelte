<script>
    import { onMount } from "svelte";
    import { renderStudio } from "sanity";
    import sanityConfig from "$lib/admin/config";

    /**
     * @type {HTMLDivElement}
     */
    let studioElement;

    onMount(() => {
        if (studioElement) {
            renderStudio(studioElement, sanityConfig);
        }
    });
</script>

<div id="app" bind:this={studioElement} />

<style>
    #app {
        height: 100vh;
        max-height: 100dvh;
        overscroll-behavior: none;
        -webkit-font-smoothing: antialiased;
        overflow: auto;
    }
</style>
