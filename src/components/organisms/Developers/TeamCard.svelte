<script>
  export let teamName;
  export let description;

  let fontSizeClass = '';

  // Adjust font size class based on teamName length
  if (teamName.length > 20 && teamName.length < 27) fontSizeClass = 'text-3xl'; // You can adjust the size as needed
  else if (teamName.length >= 27) fontSizeClass = 'text-2xl'; // You can adjust the size as needed
  else fontSizeClass = 'text-4xl'; // Default size
</script>

<section class="container mx-auto relative">
  <div class="absolute flex-col md:flex-row md:gap-4 flex px-1 md:px-8 lg:px-16 xl:px-72">

    <div class="flex md:flex-1 items-center justify-center left-side w-1/2 h-50vh">
      <!-- Team Name -->
      <h1 class="text-bold leading-tight lg:text-15xl md:leading-snug text-white text-right {fontSizeClass}">
        {teamName}
      </h1>
    </div>

    <div class="flex flex-col md:justify-center md:flex-1">
      <div class="flex flex-col gap-1">
        <!-- Description text -->
        <p class="font-light text-slate-200 max-w-1xl text-sm">{description}</p>
      </div>
    </div>
  </div>
</section>
