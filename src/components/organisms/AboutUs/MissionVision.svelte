<div class="mission-vision flex flex-row gap-8 p-20 w-full h-fit">
  <div
    class="mission-container flex grow justify-start items-start w-1/2 h-fit"
  >
    <div class="flex flex-col pt-12 p-10 gap-3 text-right">
      <h3 class="mission-title">Mission</h3>
      <div class="card flex items-center h-fit">
        <p class="text-base font-extralight">
          It shall be the mission of this organization to develop students
          worthy of the title “Iskolar ng Bayan para sa Bayan”; to continuously
          expand the knowledge, wisdom, skills, and abilities of the members
          through its principles; to help the university, more importantly its
          students, in all that it can offer; and to assist in shaping
          individuals that shall lead in solving problems of the community using
          technology, especially computing sciences as its tool
        </p>
      </div>
    </div>
  </div>
  <div class="vision-container flex grow justify-start items-start w-1/2 h-fit">
    <div class="flex flex-col pt-12 p-10 gap-3 text-left">
      <h3 class="vision-title">Vision</h3>
      <div class="card flex items-center h-fit">
        <p class="text-base font-extralight">
          It shall be the vision of this organization to become a national
          organization that shall be helpful to the country and its people, and
          establish a company that shall offer accessible, effective, and
          reliable services to the public.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  @media (min-width: 800px) and (max-width: 1200px) {
    .mission-vision {
      display: grid;
      flex-direction: column;
    }
    .mission-container {
      justify-self: flex-end;
      align-items: flex-end;
      width: 80%;
    }
    .vision-container {
      width: 80%;
    }
  }
  @media (min-width: 0px) and (max-width: 800px) {
    .mission-vision {
      flex-direction: column;
      height: auto !important;
      justify-content: center;
      align-items: center;
      padding: 0px;
    }
    .mission-container,
    .vision-container {
      width: 80%;
      height: auto !important;
    }
  }
  .mission-title,
  .vision-title {
    transition: color 0.5s, text-shadow 0.5s;
  }

  .mission-container:hover .mission-title,
  .vision-container:hover .vision-title {
    text-shadow: 0 0 1px white, 0 0 3px white, 0 0 3px white;
    color: transparent;
  }

  .card {
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
