<script>
    import { onMount, afterUpdate } from "svelte";

    /**
     * @type {any}
     */
    export let text;
    /**
     * @type {boolean}
     */
    export let isFixed;
    /**
     * @type {any}
     */
    export let width;
    /**
     * @type {any}
     */
    export let tailwindcustomization;

    let titleWidth = 0;

    function updateSvgWidth() {
        const titleElement = document.getElementById(`title-${text}`);
        if (titleElement) {
            if (isFixed) {
                titleWidth = width;
            } else {
                titleWidth = titleElement.clientWidth;
            }
        }
    }

    onMount(() => {
        updateSvgWidth();
        window.addEventListener("resize", updateSvgWidth);
        return () => {
            window.removeEventListener("resize", updateSvgWidth);
        };
    });

    afterUpdate(() => { 
        updateSvgWidth();
    });
</script>

<div class="flex flex-col items-center">
    <h5 id={"title-" + text} class="font-bold w-fit z-10 {tailwindcustomization}">
        {text}
    </h5>
    <svg
        id="svgLine"
        height="10"
        viewBox="0 0 530 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={titleWidth}
    >
        <line
            x1="-6.10352e-05"
            y1="2"
            x2="530"
            y2="2"
            stroke="url(#paint0_linear_175_58)"
            stroke-width="4"
        />
        <defs>
            <linearGradient
                id="paint0_linear_175_58"
                x1="519"
                y1="3.99999"
                x2="6.49993"
                y2="3.99965"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#2E3792" stop-opacity="0" />
                <stop offset="0.276042" stop-color="#2E3792" />
                <stop offset="0.744792" stop-color="#00F5F1" />
                <stop offset="1" stop-color="#00F5F1" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
</div>

<style>
    #svgLine {
        max-width: 80vw;
    }
</style>
