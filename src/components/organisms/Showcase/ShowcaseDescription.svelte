<script>
    const description = "We have always wanted to reach more people. Other than our social media handles, our official website is also our official introduction to the World Wide Web. Our website is likewise a convenient way to get the latest information about our developers, our recent events and activities, and our recent projects."
</script>

<section class="relative z-1 px-5 ">
  <div class="description-content ">
      <div class="description-container" >
          <div class="description-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center ">
              <div class="h-full">
                  <div>
                      <h4 class="title font-bold text-white">Description</h4>
                  </div>
                  
              </div>

              <div class="xl:w-[500px]">
                  <h5 class="description font-normal text-white">{description}</h5>
              </div>
          </div>
      </div>
  </div>
</section>

<style>
  /* Small screen */
  @media (max-width: 640px) {
    .description-content {
      padding-top: 1rem;


    }
    .description-grid {
      gap: 2rem;
    }
    .title {
      font-size: 1.5rem; /* Adjusted font size */
    }
    .description {
      font-size: 0.875rem; /* Adjusted font size */
      
    }
  }

  /* Medium screen */
  @media (min-width: 641px) and (max-width: 767px) {
    .description-content {
      padding-top: 2rem;

    }
    .description-grid {
      gap: 2.5rem;
    }
    .title {
      font-size: 1.875rem; /* Adjusted font size */
    }
    .description {
      font-size: 1rem; /* Adjusted font size */
    }
  }

  /* Large screen */
  @media (min-width: 768px) and (max-width: 1023px) {
    .description-content {
      padding-top: 3rem;

    }

    .description-grid {
      gap: 3rem;
    }
    .title {
      font-size: 2.25rem; /* Adjusted font size */
    }
    .description {
      font-size: 1rem; /* Adjusted font size */
    }
  }

  /* Extra large screen */
  @media (min-width: 1024px) {
    .description-content {
      padding-top: 4rem;


    }
    .description-grid {
      gap: 4rem;
    }
    .title {
      font-size: 3rem; /* Adjusted font size */
    }
    .description {
      font-size: 1rem; /* Adjusted font size */
    }
  }
</style>