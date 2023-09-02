<script>
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
    console.log("prev", currentSlide - 1);
    console.log("current", currentSlide);
    console.log(coreValues.length - 1);
    console.log("next", currentSlide + 1);
    console.log(coreValues[currentSlide]);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + coreValues.length) % coreValues.length;

    console.log("prev", currentSlide - 1);
    console.log("current", currentSlide);
    console.log(coreValues.length + 1);
    console.log("next", currentSlide + 1);

    console.log(coreValues[currentSlide]);
  }
</script>

<div class="mt-20 flex flex-col w-100 h-fit p-20 justify-center items-center">
  <div class="flex flex-col justify-center items-center text-center w-100">
    <h3 class="mission-title">Core Values</h3>
    <p class="title text-lg font-extralight">
      The organization adopts these values to reinforce its core and its
      principles.
    </p>
  </div>
  <div class="w-100 flex justify-center items-center gap-5 mt-10">
    <div class="flex">
      <img
        src="/assets/left-arrow.png"
        alt="photo"
        on:click={prevSlide}
        class="h-10 w-10 cursor-pointer {currentSlide === 0 ? 'hidden' : ''}"
      />
      <img
        src="/assets/left-arrow-disabled.png"
        alt="photo"
        hidden
        class="h-10 w-10 {currentSlide === 0 ? 'flex' : ''}"
      />
    </div>
    <div class="carouselOne hidden w-4/5">
      {#each coreValues as text, index}
        <div
          class="carousel flex w-100 h-fit
            {index === currentSlide ? 'active' : 'hidden'}"
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
    <div class="flex">
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
  @media (min-width: 900px) and (max-width: 1200px) {
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
    .title {
      width: 80%;
    }

    .not-mid {
      height: fit-content !important;
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
