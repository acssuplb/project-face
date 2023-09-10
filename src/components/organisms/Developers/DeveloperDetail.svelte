<script>
    export let developer;
    export let closeModal;

    import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
    import { onMount } from "svelte";
    import Carousel from "./Carousel.svelte";

    let top = 0;

    function onCloseButtonClick() {
        scrollableMain();
        closeModal(); // Call the closeModal function passed from the parent
    }

    // Removes the scrollbar on main
    function fixedMain() {
        let main = document.getElementById("fixed-on-modal-on");
        if (main) {
            top = main.getBoundingClientRect().top;
            main.style.position = "fixed";
            main.style.top = top + "px";
            main.style.width = "100vw";
        }
    }

    // Adds the scrollbar on main
    function scrollableMain() {
        let main = document.getElementById("fixed-on-modal-on");
        if (main) {
            main.style.position = "static";
            window.scrollTo({ top:top*-1, left:0, behavior: "instant"})
            main.style.width = "auto";
        }
    }

    onMount(() => {
        fixedMain();
        window.addEventListener("resize", fixedMain);
        return()=>{
            scrollableMain();
            window.removeEventListener("resize", fixedMain);
        }
    });
</script>

<div
    class="modal fixed inset-0 flex justify-center z-20 backdrop-blur-lg bg-base-black mx-auto px-5 overflow-y-auto overflow-x-hidden md:items-center"
>
    <div
        class="relative top-[150px] flex flex-col h-fit gap-0 md:flex-row md:align-center md:justify-between md:px-8 md:py-0 md:gap-10 md:top-0 xl:gap-20"
    >
        <div
            class="photo top-[150px] flex items-center max-w-full min-h-fit md:top-0 md:min-h-fit xl:top-0 xl:min-h-fit"
        >
            <div
                class="mask1 md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]"
            >
                <img
                    src={developer.imageSrc}
                    alt={developer.nickname}
                    class="w-full h-full object-cover"
                />
            </div>

            <div
                class="absolute md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]"
            >
                <!-- Close button -->
                <div
                    class="close-btn -left-[1.3%] top-[17.5%] xl:top-[70px] xl:left-[-6px] md:top-[50px] md:left-[-6px] mx-auto items-center justify-center relative"
                >
                    <button
                        class="flex flex-col justify-between h-full gap-1 relative"
                        on:click={onCloseButtonClick}
                    >
                        <div
                            class="inside absolute inset-0 flex flex-col items-center justify-center hover:scale-110 transition-transform"
                        >
                            <div class="relative top-[10%] md:top-0 xl:top-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-[6vw] h-[6vw] xl:w-[35px] xl:h-[35px] md:w-[25px] md:h-[25px] text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <div>
                                <span
                                    class="text-white text-[10px] md:text-[10px] xl:text-[12px]"
                                    >Close</span
                                >
                            </div>
                        </div>
                        <div>
                            <img
                                src="Hexagon Gradient.svg"
                                alt="close-btn"
                                class="max-w-[91px] max-h-[91px] w-[18vw] h-[18vw] xl:w-[91px] xl:h-[91px] md:w-[70px] md:h-[70px]"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Developer information -->
        <div
            id="details"
            class="details flex pb-[10vw] justify-center md:pb-0 md:top-0 xl:pb-0 xl:top-0"
        >
            <div
                class="glassmorphic drop-shadow-md border-[1rem] rounded-2xl border-opacity-10 h-fit w-[380px] max-w-[80vw] p-9"
            >
                <div class="flex flex-col justify-between h-full gap-8">
                    <!-- Use flex and justify-between to span content from top to bottom -->

                    <div class="flex flex-col items-center justify-center">
                        <h2
                            class="text-base-sky-blue text-2xl font-bold text-center"
                        >
                            {developer.fullName}
                        </h2>
                        <p class="font-semibold">{developer.batch}</p>
                    </div>

                    <div class="bio justify-center flex-col items-center">
                        <p class="text-center">{developer.bio}</p>
                    </div>

                    <!-- Skills Carousel -->
                    <div
                        class="skills flex-wrap flex-col justify-center items-center"
                    >
                        <p class="text-base-sky-blue mb-2 font-semibold">
                            Skills:
                        </p>

                        {#if developer.skills.length == 1}
                            <div class="flex flex-wrap gap-2">
                                <div
                                    class="glassmorphic flex-auto rounded-lg py-1 px-1 mb-1 items-center justify-center"
                                >
                                    <p class="text-center">
                                        {developer.skills}
                                    </p>
                                </div>
                            </div>
                        {:else}
                            <div class="skills-carousel-container">
                                <Carousel autoplay="2000">
                                    {#each developer.skills as skill, index (index)}
                                        <div
                                            class="glassmorphic flex flex-wrap rounded-lg py-1 px-1 mb-1 items-center justify-center"
                                        >
                                            <p class="text-center">{skill}</p>
                                        </div>
                                    {/each}
                                </Carousel>
                            </div>
                        {/if}
                    </div>

                    <div class="contacts flex-col items-end">
                        <p class="text-base-sky-blue mb-2 font-semibold">
                            Contacts:
                        </p>
                        <div
                            class="icon-container flex flex-row items-center justify-center gap-6"
                            style="transition: transform 0.5s;"
                        >
                            <a href={developer.contacts.gmail} target="_blank">
                                <img
                                    src="assets/gmail-icon.png"
                                    alt="Gmail"
                                    class="icon-image"
                                />
                            </a>
                            <a href={developer.contacts.github} target="_blank">
                                <img
                                    src="assets/github-icon.png"
                                    alt="GitHub"
                                    class="icon-image"
                                />
                            </a>
                            <a
                                href={developer.contacts.linkedin}
                                target="_blank"
                            >
                                <img
                                    src="assets/linkedin-icon.png"
                                    alt="LinkedIn"
                                    class="icon-image"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .modal {
        /* background: linear-gradient(
            135deg,
            rgba(16, 17, 44, 0.663) 0%,
            rgba(17, 28, 32, 0.8) 100%
        ); */
        background: linear-gradient(
            180deg,
            rgba(9, 9, 54, 0.663) 0%,
            rgba(6, 2, 23, 0.8) 100%
        );
    }

    .photo {
        filter: drop-shadow(0px 1px 1px #000000);
    }

    .mask1 {
        -webkit-mask-image: url("/assets/honeycomb.png");
        mask-image: url("assets/honeycomb.png");
        -webkit-mask-size: 100%;
        mask-size: 100%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
    }

    .glassmorphic {
        filter: drop-shadow(0px 8px 8px #000000);
        border: 0.05rem solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
            135deg,
            rgba(223, 203, 203, 0.231) 0%,
            rgba(44, 78, 104, 0.42) 100%
        );
    }

    .icon-image {
        width: 25px;
        height: 25px;
        -webkit-clip-path: url(#mask);
        clip-path: url(#mask);
        transition: transform 0.3s ease-in-out;
    }

    .icon-image:hover {
        transform: scale(1.2); /* Add a hover effect to scale the icons */
    }
</style>
