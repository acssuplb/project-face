<script>
    import { onMount } from "svelte";

    /**
     * @type {any}
     */
    export let eventURL;
    /**
     * @type {any}
     */
    export let id;
    /**
     * @type {any}
     */
    export let isHighlighted;

    function updateEvents() {
        let element = document.getElementById(`hex${id}`);
        if (element) {
            element.style.backgroundImage = `url(${eventURL})`;
            element.style.backgroundSize = "cover";
            element.style.backgroundPosition = `center`;
        }
    }

    onMount(() => {
        updateEvents();
    });
</script>

{#if isHighlighted}
    <div class="relative">
        <img
            src="/assets/gradient-blur-hexagon.svg"
            alt="Gradient Blur Hexagon"
            class="absolute min-w-[130px] min-h-[130px] top-[-20px] left-[-15px]"
        />
        <div class="relative hexagon-border">
            <div class="absolute hexagon" />
            <slot name="image" />
            <div class="hexagon-filter-chosen absolute" />
        </div>
    </div>
{:else}
    <div class="relative hexagon-border">
        <div class="absolute hexagon" />
        <slot name="image" />
        <div class="hexagon-filter absolute" />
    </div>
{/if}

<style>
    .hexagon {
        width: 102px;
        height: 102px; /* Height is set to the same value as the width to create a regular hexagon */
        /* background-color: rgb(6, 2, 23); */
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    }
    .hexagon-border {
        padding-top: 1px;
        padding-left: 1px;
        width: 103px;
        height: 103px;
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        background: linear-gradient(
            155deg,
            rgb(255, 255, 255, 1) 0%,
            rgb(255, 255, 255, 0.2) 33%
        );
        backdrop-filter: blur(50px);
    }
    .hexagon-filter {
        padding-top: 1px;
        padding-left: 1px;
        width: 105px;
        height: 105px;
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        background: linear-gradient(
            155deg,
            rgb(255, 255, 255, 0.3) -30%,
            rgb(6, 2, 23, 1) 30%
        );
        opacity: 30%;
        backdrop-filter: blur(40px);
    }
    .hexagon-filter-chosen {
        padding-top: 1px;
        padding-left: 1px;
        width: 105px;
        height: 105px;
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        background: linear-gradient(
            155deg,
            rgb(0, 245, 241, 1) -30%,
            rgb(46, 55, 146, 1) 40%
        );
        opacity: 30%;
        backdrop-filter: blur(50px);
    }
</style>
