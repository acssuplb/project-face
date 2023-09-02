<script lang="ts">
  // DevStoriesHeader and DevStoriesTemplate located in the molecules folder
  import { DevStoriesHeader, DevStoriesTemplate } from "$components";
  // devStories is an object that contains the name, position, story, and image url of each developer
  let devStories = {
    "Louise Gabrielle Talip": [
      "Head Developer for Logistics and External Affairs (A.Y 2021-2022)",
      "Being part of ACSS has truly been one of the highlights of my college life. All the late-night Discord study sessions, nerding out with different people about the latest tech trends, TV shows, and games, or just finding a safe space to be myself – ACSS provided it all. It has helped me grow not only as a leader but also as a person, cultivating experiences and relationships that I'll carry with me beyond graduation.",
      "./home-devstories/loys.jpg",
    ],
    "Christopher Marlo Jimenez": [
      "Head Developer for Finance and Management Team (A.Y 2023-2024)",
      "Surprisingly, it's neither the programming nor the skills I have picked up as a developer that I will highlight during my stay in the Alliance. No, instead I'm putting into the picture the values of leadership and camaraderie I have come to develop. Here I have met the most interesting people I will ever come across, and it is honestly an honor I get to call them my friends. I have learned from them as they have from me. I have led my peers as they have led me. This two-way communication between me and them will always be my greatest treasure from ACSS. My ates and kuyas from the organization have and continue to raise me with the principles and thinking of an Iskolar ng Bayan, and I aim to continue this legacy.",
      "./home-devstories/chris.jpg",
    ],
    "Danielle Lei Araez": [
      "Developer for Media and Publicity",
      "Joining ACSS enabled me to gain new friends and made me feel at ease especially in classes as I get to see fellow members during lecture or laboratory sessions. It also helped me tap on to my collaborative and creative skills as a member of the Media and Publicity team. I am profoundly grateful for ACSS for letting me shine and boost my capabilities as an aspiring developer.",
      "./home-devstories/danie.jpg",
    ],
    "Mark Jay Nicolas": [
      "Alumnus Developer",
      "ACSS isn't just an organization; it's a family that fosters growth and support. Being a part of ACSS has shown me the true essence of unity and collaboration. Just like a family, its members are always ready to lend a helping hand and provide unwavering support. Together, we've grown, learned, and achieved more than I could have imagined. ACSS truly embodies the spirit of a family that's there for each other every step of the way.",
      "./home-devstories/markjay.jpg",
    ],
    "Kenneth Renz Tegrado": [
      "Developer for Academic Affairs",
      "Being a cherished member of this student organization has been an enriching journey that's surpassed all my expectations. It's not just about the skill-building workshops, impactful projects, and leadership opportunities that have given me a new perspective on my potential; it's also about the friendships formed and the sense of belonging that have turned mere colleagues into a close-knit family. This organization has not only enhanced my university experience but also equipped me with invaluable life skills and a network of connections that I'll forever be grateful for, as I confidently stride towards a future shaped by these unforgettable experiences.",
      "./home-devstories/renz.jpg",
    ],
  };
  // convert the object to an array to iterate through it through the each statement
  let stories = Object.entries(devStories);

  // import SplideJS for the Dev Story Carousel
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  // Splide Options to autoplay
  const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    arrows: true, // show left and right arrows
    interval: 3000, //
  };
</script>

<section class="scrollFadeIn py-32 xl:px-[10%] z-[1]">
  <!-- div class to center the dev story header -->
  <div class="flex flex-col items-center">
    <DevStoriesHeader />
  </div>
  <div class="pt-20 z-1 relative">
    <!-- Gradient Shapes at the Back -->
    <!-- Ellipse Top -->
    <img
      src="/assets/gradient-ellipse.svg"
      alt="Gradient Ellipse"
      class="absolute w-[70px] top-[6%] md:top-[15%] left-[75%] origin-center rotate-45"
    />

    <!-- Ellipse Bottom -->
    <img
      src="/assets/gradient-ellipse.svg"
      alt="Gradient Ellipse"
      class="absolute w-[45px] top-[80%] sm:top-[65%] left-[35%] opacity-40"
    />

    <!-- Hexagon Left -->
    <img
      src="/assets/gradient-hexagon.svg"
      alt="Gradient Hexagon"
      class="absolute w-[140px] top-[30%] md:top-[8%] left-[-8%] md:left-[0%] 2xl:left-[15%]"
    />

    <!-- Hexagon Right -->
    <img
      src="/assets/gradient-hexagon-2.svg"
      alt="Gradient Hexagon"
      class="absolute w-[70px] top-[85%] left-[90%] md:top-[85%] md:left-[70%]"
    />

    <!-- Splide Carousel -->
    <Splide {options} hasTrack={false} aria-label="...">
      <div class="custom-wrapper">
        <SplideTrack>
          {#each stories as [name, [position, story, imageUrl]], index}
            <SplideSlide>
              <DevStoriesTemplate
                {name}
                {position}
                {story}
                {imageUrl}
                {index}
              />
            </SplideSlide>
          {/each}
        </SplideTrack>

        <div class="splide__arrows" />
      </div>
    </Splide>
  </div>
</section>

<style>
  /* so that the image would not be draggable */
  img {
    -drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
