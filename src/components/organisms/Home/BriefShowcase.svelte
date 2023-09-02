<script>
  // Import statements
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import HexagonGlass from "$components/molecules/Home/HexagonGlass.svelte";
  import { onMount } from "svelte";

  // CUSTOMIZE THIS: This is where you can modify the brief showcase ([1] Event Name, [2] URL of the event photo from static folder)
  let events = [
    ["ACSS WEEK 2023 Sublimed", "../home-briefshowcase/briefshowcase-1.jpg"],
    ["ACSS WEEK 2023 Exhibit", "../home-briefshowcase/briefshowcase-2.jpg"],
    [
      "ACSS WEEK 2023 Company Talks",
      "../home-briefshowcase/briefshowcase-3.jpg",
    ],
    [
      "Git To The Point: A GitHub Workshop",
      "../home-briefshowcase/briefshowcase-4.jpg",
    ],
    [
      "Ad Astra: An ACSS-UPLB Orientation",
      "../home-briefshowcase/briefshowcase-5.jpg",
    ],
    [
      "BSCS Freshie Kumustahan 2022",
      "../home-briefshowcase/briefshowcase-6.jpg",
    ],
  ];
  // END OF CUSTOMIZATION

  // Variables (for ui)
  let circleBlurMargin = 0;
  let windowWidth = 0;
  $: spotlight = 1;
  let canAutoChange = true;
  /**
   * @type {string | number | NodeJS.Timer | undefined}
   */
  let interval;

  // Updates the top position of gradient blur after resize
  function updateCircleBlurMargin() {
    let circleBlur = document.getElementById("circle-blur");
    let briefShowcase = document.getElementById("brief-showcase");
    if (circleBlur && briefShowcase) {
      circleBlurMargin = circleBlur?.clientWidth * -0.08;
      circleBlur.style.top = circleBlurMargin + "px";
    }
  }

  // This handles the auto-change of spotlight
  function updateCanAutoChange() {
    canAutoChange = !canAutoChange;
  }

  // Updates the windowWidth variable
  function updateSize() {
    windowWidth = document.documentElement.clientWidth;
  }

  // Updates the event to be in spotlight
  /**
   * @param {number} newSpotlight
   */
  function updateSpotlight(newSpotlight) {
    spotlight = newSpotlight;
    let showcased = document.getElementById("showcased");
    if (showcased) {
      showcased.style.backgroundImage = `url(${events[spotlight - 1][1]})`;
    }
  }

  // 4s interval of changing event
  function newInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      if (canAutoChange) {
        if (spotlight !== 6) {
          updateSpotlight(spotlight + 1);
        } else {
          updateSpotlight(1);
        }
      }
    }, 4000);
  }

  onMount(() => {
    updateCircleBlurMargin();
    updateSize();
    updateSpotlight(1);
    newInterval();

    window.addEventListener("resize", updateCircleBlurMargin);
    window.addEventListener("resize", updateSize);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div
  class="flex flex-col gap-8 mt-[110px] mb-[40px] ml-[10%] mr-[10%] w-[80%] h-fit scrollFadeIn"
>
  <h5 class="break-words text-center">Brief Showcase</h5>
  <div
    id="brief-showcase"
    class="flex flex-row justify-center relative w-[100%] h-[100%]"
  >
    <div
      class="w-[100%] min-w-[8vw] max-w-[180px] h-fit flex flex-col items-center justify-center gap-12 mt-10"
    >
      <!-- Left Hexagonal Photos -->
      {#if windowWidth > 1100}
        {#each Array(3) as a, index}
          {#if spotlight == index + 1}
            {#if (index + 1) % 2 != 0}
              <div
                on:mouseover={() => {
                  updateSpotlight(index + 1);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index][1]}
                  id={index + 1}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 1}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {:else}
              <div
                id="left-aligned"
                on:mouseover={() => {
                  updateSpotlight(index + 1);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index][1]}
                  id={index + 1}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 1}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {/if}
          {:else if (index + 1) % 2 != 0}
            <div
              on:mouseover={() => {
                updateSpotlight(index + 1);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index][1]}
                id={index + 1}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 1}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {:else}
            <div
              id="left-aligned"
              on:mouseover={() => {
                updateSpotlight(index + 1);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index][1]}
                id={index + 1}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 1}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    <!-- Gradient Blur -->
    <img
      id="circle-blur"
      src="/assets/gradient-blur-ellipse.svg"
      alt="Gradient Blur Ellipse"
      class="absolute w-[600px] h-[600px] max-w-[78vw] max-h-[78vw] top-0"
      on:click={() => {
        newInterval();
        if (spotlight != 6) {
          updateSpotlight(spotlight + 1);
        } else {
          updateSpotlight(1);
        }
      }}
    />
    <div class="flex flex-col gap-6 items-center">
      <!-- Image On Spotlight -->
      <div
        id="showcased"
        class="rounded-full w-[500px] h-[500px] max-w-[64vw] max-h-[64vw] bg-[#060217]"
      />
      <!-- Title Of The Event On Spotlight -->
      <div
        id="showcase-name"
        class="flex items-center justify-center w-fit rounded-2xl cursor-pointer"
        on:click={() => {
          window.location.assign("./Showcase");
        }}
      >
        <UnderlinedText
          text={events[spotlight - 1][0]}
          isFixed={false}
          width={0}
          tailwindcustomization="text-white text-sm font-normal text-center hover:text-[#00F5F1] transition duration-500 ease"
        />
      </div>
    </div>
    <div
      class="w-[100%] min-w-[8vw] max-w-[180px] h-fit flex flex-col items-center justify-center gap-12 mt-10"
    >
      <!-- Right Hexagonal Photos -->
      {#if windowWidth > 1100}
        {#each Array(3) as a, index}
          {#if spotlight == index + 4}
            {#if (index + 3) % 2 != 0}
              <div
                on:mouseover={() => {
                  updateSpotlight(index + 4);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index + 3][1]}
                  id={index + 4}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 4}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {:else}
              <div
                id="right-aligned"
                on:mouseover={() => {
                  updateSpotlight(index + 4);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index + 3][1]}
                  id={index + 4}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 4}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {/if}
          {:else if (index + 3) % 2 != 0}
            <div
              on:mouseover={() => {
                updateSpotlight(index + 4);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index + 3][1]}
                id={index + 4}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 4}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {:else}
            <div
              id="right-aligned"
              on:mouseover={() => {
                updateSpotlight(index + 4);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index + 3][1]}
                id={index + 4}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 4}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    <div />
  </div>
</div>

<style>
  #showcased {
    background-size: cover;
    background-position: center;
  }
  #showcase-name:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(0, 245, 241, 0) 0%,
      rgba(46, 55, 146, 0.3) 10%,
      rgba(46, 55, 146, 0.3) 90%,
      rgba(46, 55, 156, 0) 100%
    );
    filter: blur(20px);
    opacity: 0;
    transition: opacity 0.3s;
  }

  #showcase-name:hover:before {
    opacity: 1;
  }

  #showcase-name {
    position: relative;
  }
  .hex {
    width: 102px;
    height: 102px;
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }
  #left-aligned {
    margin-right: 103px;
  }
  #right-aligned {
    margin-left: 103px;
  }
</style>
