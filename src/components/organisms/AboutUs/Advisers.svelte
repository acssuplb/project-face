<script>
  const advisers = [
    {
      name: "Sir Koy Lapitan",
      position: "Senior Adviser",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Sir John O-Neil Geronimo",
      position: "Junior Adviser",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
</script>

<div class="advisers flex flex-col justify-center items-center h-fit p-20">
  <h3>Advisers</h3>
  <div class="flex flex-col gap-5">
    {#each advisers as text, index}
      <div class="advisers__container flex justify-center self-start w-100">
        <div class="senior flex flex-row gap-5 text-left items-center w-2/3">
          <img
            src="/assets/glassmorphic-hexagon.svg"
            alt="gradient-blur-ellipse"
            class="photo-size"
          />
          <div class="info-container flex flex-col gap-3 justify-self-center">
            <div class="flex flex-col">
              <p class="text-lg font-bold">{text.name}</p>
              <p class="text-base font-extralight text-slate-500">
                {text.position}
              </p>
            </div>
            <p class="text-base font-extralight w-100">
              “{text.testimonial}”
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @media (min-width: 0px) and (max-width: 820px) {
    .senior {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }
    .info-container {
      width: 60%;
    }
  }

  .photo-size {
    height: 200px;
    width: 200px;
  }
</style>
