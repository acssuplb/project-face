<script>
    // Import statements
    import { onMount } from "svelte";

    // CUSTOMIZE THIS: Add here the statistics
    let statistics = [
        [8, "Years of Service"],
        [65, "Active Members"],
        [91, "Alumni"],
    ];
    // END OF CUSTOMIZATION

    let spotlight = 0;
    /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
    let spotlightInterval;
    /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
    let changeSpotlightValue;
    /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
    let opacityFullInterval;

    // Manages the transition from one statistic to another
    function changeSpotlight() {
        spotlightInterval = setInterval(() => {
            let statisticElement = document.getElementById("statistics");
            if (statisticElement) {
                statisticElement.style.opacity = "0";
            }

            // Change the spotlight
            changeSpotlightValue = setInterval(() => {
                if (spotlight + 1 < statistics.length) {
                    spotlight++;
                } else {
                    spotlight = 0;
                }

                clearInterval(changeSpotlightValue);
            }, 500);

            // Change the opacity from 0 to 1
            opacityFullInterval = setInterval(() => {
                if (statisticElement) {
                    statisticElement.style.opacity = "1";
                }
                clearInterval(opacityFullInterval);
                clearInterval(spotlightInterval);
                changeSpotlight();
            }, 600);
        }, 4000);
    }

    onMount(() => {
        changeSpotlight();

        return () => {
            clearInterval(spotlightInterval);
            clearInterval(changeSpotlightValue);
            clearInterval(opacityFullInterval);
        };
    });
</script>

<div id="statistics" class="flex flex-row items-center transition duration-500">
    <div
        class="relative z-10 flex items-center justify-center glassmorphic-box mr-4 border-l"
    >
        <p class="font-bold text-lg">
            {statistics[spotlight][0]}
        </p>
    </div>
    <p
        class="relative z-10 font-light work-sans border-l border-slate-600 py-4 px-4"
    >
        {statistics[spotlight][1]}
    </p>
</div>

<style>
    .glassmorphic-box {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 16px;
        border: 0.01rem solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        backdrop-filter: blur(21px);
    }
</style>
