<script>
  import {
    Hero,
    Summary,
    IncomingActivity,
    DevStories,
    Contributions,
    Strengths,
    BriefShowcase,
  } from "$components";
  import Partnership from "$components/organisms/Home/Partnership.svelte";
</script>

<head>
  <title>The Alliance of Computer Science Students</title>
</head>

<div
  class="overflow-hidden w-full bg-base-black px-5 lg:px-10 flex flex-col gap-10 pb-40"
>
  <Hero />
  <Summary />
  <IncomingActivity />
  <DevStories />
  <Strengths />
  <Contributions />
  <BriefShowcase />
  <Partnership />
</div>
