<!-- Incoming/Ongoing Event Section -->
<script lang="ts">
  let eventName = "ACSS Orientation";
  let eventDescription =
    "Lorem ipsum dolor sit amet consectetur. Euismod tellus mattis eget bibendum tempus non sed. Posuere dis sapien suspendisse tellus. Urna venenatis.";
  let eventImage = "/assets/placeholder-event-image.svg";
  let eventDateTime = "September 21, 2023 7:00 PM";
  import { Button } from "$components";
  import { goto } from "$app/navigation";

  let link = "/registration/form-acss-orientation";
  function routeToPage() {
    goto(link);
  }
</script>

<section class="scrollFadeIn">
  <div
    class="banner-container p-2 grid grid-cols-1 ss:mt-20 md:mt-28 max-sm:mx-4 max-lg:mx-10 max-xl:mx-16 max-3xl:mx-28 3xl:mx-40"
  >
    <div class="p-10 lg:px-14 xl:px-[18%] md:grid md:grid-cols-3 md:gap-8">
      <div class="md:col-span-2 justify-self-center">
        <!-- Incoming Event Header -->
        <div
          class="flex flex-row gap-2 px-4 py-2 mb-4 justify-center items-center max-w-fit incoming-event"
        >
          <img
            src="/assets/notification.svg"
            alt="Notification Vector"
            width="30"
            height="33.42"
            class="w-[30px]"
          />

          <p class="font-bold text-sm ss:text-base">Incoming Event</p>
        </div>

        <!-- Event Name -->
        <p
          class="max-ss:text-3xl text-4xl lg:text-5xl content-center font-bold gradient-line py-2 max-w-fit"
        >
          {eventName}
        </p>

        <!-- Event Description -->
        <p class="pt-4">{eventDescription}</p>

        <!-- Date and Time -->
        <div
          class="glassmorphic-rectangle flex flex-row gap-2 min-[485px]:gap-5 p-[7%] min-[485px]:p-3.5 min-[485px]:w-[325px] my-4 items-center"
        >
          <img
            src="/assets/calendar.svg"
            alt="Calendar Icon"
            width="40"
            height="40"
            class="w-[40px]"
          />
          <p class="text-center">{eventDateTime}</p>
        </div>

        <!-- Register Button -->
        <Button onClick={routeToPage}>Register Now</Button>
      </div>

      <!-- Event Image -->
      <div class="justify-self-end self-center">
        <img
          src={eventImage}
          alt="ACSS Event Placeholder"
          width="381"
          height="349"
          class="object-cover"
        />
      </div>
    </div>
  </div>
</section>

<style>
  /* for the date and time background */
  .glassmorphic-rectangle {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  /* incoming event blue green gradient background */
  .banner-container {
    background: linear-gradient(
      0deg,
      rgba(0, 245, 241, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: 20px;
  }

  /* incoming event header background */
  .incoming-event {
    border-radius: 60px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>
