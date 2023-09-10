<script>
    // Import statements
    import RegFormIllus from "./RegFormIllus.svelte";
    import { onMount } from "svelte";

    // Variables (for ui)
    let windowWidth = 0;
    let windowHeight = 0;

    // Modifies the size of form section according to viewport
    function updateSize() {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
        let a = document.getElementById("input-section");

        // Updates the size of form section according to the screen's width
        if (!(windowWidth * 0.75 > windowHeight && windowWidth > 720)) {
            if (a) {
                a.style.width = "100%";
            }
        } else {
            if (a) {
                a.style.width = "41.67%";
            }
        }

        // Updates the size of illustration photo according to the illustration's dimension
        let regformillusmeasure = document.getElementById(
            "reg-form-illus-measure"
        );
        let regformillus = document.getElementById("reg-form-illus-photo");
        if (
            regformillusmeasure &&
            regformillus &&
            regformillusmeasure?.clientWidth > regformillusmeasure?.clientHeight
        ) {
            regformillus.style.width = regformillusmeasure.clientHeight + "px";
        } else if (regformillus) {
            regformillus.style.width = "100%";
        }
    }

    // Makes the illustration beside the form to scroll along
    function updateIllusPos() {
        let illus = document.getElementById("reg-form-illus-photo");
        let illusPos = document
            .getElementById("reg-form-illus-photo")
            ?.getBoundingClientRect();
        let formPos = document
            .getElementById("input-section")
            ?.getBoundingClientRect();

        if (
            illus &&
            illusPos &&
            formPos &&
            formPos.top + illusPos.height / 2 - illusPos.height * 0.05<= windowHeight / 2 &&
            formPos.bottom - illusPos.height / 2 + illusPos.height * 0.15 >=
                windowHeight / 2
        ) {
            illus.style.top = `${
                windowHeight / 2 - (formPos.top + illusPos?.height / 2)
            }px`;
        }
    }

    onMount(() => {
        updateSize(); // Initial width calculation
        updateIllusPos();
        window.addEventListener("resize", updateSize); // Add event listener for resize
        window.addEventListener("resize", updateIllusPos);
        window.addEventListener("scroll", updateIllusPos); // Add event listener for scroll
    });
</script>

<div id="form" class="mr-[10%] ml-[10%] mt-7 flex">
    <div
        id="input-section"
        class="relative glassmorphic-rectangle bg-slate-700 flex-col"
    >
        <!-- Input Components -->
        <slot name="registration-form" />
    </div>

    {#if windowWidth * 0.75 > windowHeight && windowWidth > 720}
        <div
            id="reg-form-illus-measure"
            class="w-7/12 flex justify-center overflow-hidden"
        >
            <div id="reg-form-illus-photo" class="relative w-full h-fit">
                <!-- Illustration -->
                <RegFormIllus />
            </div>
        </div>
    {/if}
</div>

<style>
    .glassmorphic-rectangle {
        background: linear-gradient(
            0deg,
            rgba(0, 245, 241, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        padding: 25px;
        text-align: justify;
        border-radius: 16px;
        border: 0.01rem solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(21px);
    }
    #input-section {
        transition: 0.5s;
    }
    #reg-form-illus-photo {
        transition: 0.3s ease;
    }
</style>
