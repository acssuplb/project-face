<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  // Splide Options to autoplay
  const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    // autoWidth: true,
    arrows: false,
    interval: 3000,

    breakpoints: {
      900: {
        width: 600,
      },
      700: {
        width: 500,
      },
      580: {
        width: 400,
      },
      480: {
        width: 300,
      },
      380: {
        width: 200,
      },
    },
    pagination: true,
  };

  const coreValues = [
    {
      title: "Initiative",
      definition:
        "The organization shall have the ability to act on its own willingness in doing its responsibilities towards the society.",
    },
    {
      title: "Involvement",
      definition:
        "The organization, within its capabilities, shall conduct and participate in activities beneficial to its members, the organization, and the society.",
    },
    {
      title: "Commitment",
      definition:
        "The organization shall be dedicated in upholding its mission, vision, principles, and values.",
    },
    {
      title: "Competence",
      definition:
        "The organization shall produce reliable and well-created output.",
    },
    {
      title: "Leadership",
      definition:
        "The organization shall guide, influence, and empower its members towards fulfilling the goals of the organization.",
    },
    {
      title: "Responsibility",
      definition:
        "The organization shall be ready to perform its functions and be held accountable for any ramifications.",
    },
    {
      title: "Integrity",
      definition:
        "The organization shall embody principles that are morally upright and just.",
    },
    {
      title: "Critical Thinking",
      definition:
        "The organization shall be logical and rational when evaluating a problem, and therefore, form a valid judgment or conclusion based on the given facts.",
    },
    {
      title: "Creativity",
      definition:
        "The organization shall use its artistry and imagination properly to produce any original output.",
    },
    {
      title: "Transparency",
      definition:
        "The organization shall be open to its members about matters concerning the body.",
    },
  ];
  let currentSlide = Math.floor(coreValues.length / 2);

  function nextSlide() {
    currentSlide = (currentSlide + 1) % coreValues.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + coreValues.length) % coreValues.length;
  }
</script>

<div
  id="core-values"
  class="scrollFadeIn relative z-0 flex flex-col w-100 h-fit xl:h-screen p-10 lg:p-20 xl:p-20 justify-center items-center"
>
  <div
    class="flex flex-col justify-center gap-3 items-center text-center w-100"
  >
    <h3 class="mission-title text-5xl lg:text-6xl xl:text-6xl">Core Values</h3>
    <p class="title text-lg font-extralight">
      The organization adopts these values to reinforce its core and its
      principles.
    </p>
  </div>
  <div class="w-full flex justify-center items-center gap-5 mt-5 md:mt-10">
    <div class="arrows flex">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="/assets/left-arrow.png"
        alt="photo"
        on:click={prevSlide}
        class="h-10 w-10 cursor-pointer {currentSlide === 0 ? 'hidden' : ''}"
      />
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="/assets/left-arrow-disabled.png"
        alt="photo"
        hidden
        class="h-10 w-10 {currentSlide === 0 ? 'flex' : ''}"
      />
    </div>
    <div class="w-full carouselOne hidden flex justify-center items-center">
      <Splide {options} hasTrack={false} aria-label="...">
        <div class="custom-wrapper">
          <SplideTrack>
            {#each coreValues as text}
              <SplideSlide>
                <div
                  class="flex flex-col w-100 not-mid glass justify-center items-center p-10 sm:p-20"
                >
                  <p class="text-xl font-bold mb-3">{text.title}</p>
                  <p class="text-base font-extralight">
                    {text.definition}
                  </p>
                </div>
              </SplideSlide>
            {/each}
          </SplideTrack>
        </div>
      </Splide>
    </div>
    <div
      class="carouselTwo hidden w-4/5 gap-5 {currentSlide < 1
        ? 'justify-end'
        : ''}"
    >
      {#each coreValues as text, index}
        <div
          class="carousel flex w-1/2 h-fit
            {index === currentSlide - 1 || index === currentSlide
            ? 'active'
            : 'hidden'}"
        >
          <div
            class="flex flex-col glass not-mid justify-center items-center duration-300 p-20"
          >
            <p class="text-xl font-bold mb-3">{text.title}</p>
            <p class="text-base font-extralight">
              {text.definition}
            </p>
          </div>
        </div>
      {/each}
    </div>
    <div class="carouselThree w-4/5">
      <div
        class="flex items-center gap-5 h-fut
      {currentSlide < 1 ? 'justify-end' : ''}"
      >
        {#each coreValues as text, index}
          <div
            class="carousel flex w-1/3 h-fit
          {index === currentSlide - 1 ||
            index === currentSlide ||
            index === currentSlide + 1
              ? 'active'
              : 'hidden'}"
          >
            <div
              class={index === currentSlide
                ? "flex flex-col glass mid justify-center items-center duration-300 p-20"
                : "flex flex-col glass not-mid justify-center items-center duration-300 p-20"}
            >
              <p class="text-xl font-bold mb-3">{text.title}</p>
              <p class="text-base font-extralight">
                {text.definition}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="flex flex-row" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="arrows flex">
      <img
        src="/assets/right-arrow.png"
        alt="photo"
        on:click={nextSlide}
        class="h-10 w-10 cursor-pointer {currentSlide === coreValues.length - 1
          ? 'hidden'
          : ''}"
      />
      <img
        src="/assets/right-arrow-disabled.png"
        alt="photo"
        hidden
        class="h-10 w-10 {currentSlide === coreValues.length - 1 ? 'flex' : ''}"
      />
    </div>
  </div>
</div>

<style>
  @media (min-width: 900px) and (max-width: 1260px) {
    .carouselThree {
      display: none;
    }
    .carouselTwo {
      display: flex;
    }
  }
  @media (min-width: 600px) and (max-width: 900px) {
    .carouselThree {
      display: none;
    }
    .carouselTwo {
      display: none;
    }
    .carouselOne {
      display: flex;
    }
    .title {
      width: 80%;
    }
    .arrows {
      display: none;
    }
  }
  @media (min-width: 0px) and (max-width: 600px) {
    .carouselThree {
      display: none;
    }
    .carouselTwo {
      display: none;
    }
    .carouselOne {
      display: flex;
    }

    .not-mid {
      height: 300px !important;
    }

    .arrows {
      display: none;
    }
  }
  @media (min-width: 0px) and (max-width: 370px) {
    .not-mid {
      height: 500px !important;
    }
  }

  .mid {
    height: 325px;
    max-height: fit-content;
    padding: 20px;
  }

  .not-mid {
    height: 250px;
    max-height: fit-content;
    padding: 20px;
  }
  .glass {
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(21px);
    padding: 3rem;
    text-align: center;
  }
</style>
