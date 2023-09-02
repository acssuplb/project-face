<!-- Hero Section -->
<script>
    import { Statistics } from "$components";
</script>

<section class="tag container mx-auto relative">
    <div
        class="flex flex-col min-h-[90vh] mx-4 pt-10 gap-5 md:flex-row md:align-center md:justify-evenly md:gap-10 2xl:gap-2"
    >
        <!-- ACSS Logo -->
        <div
            class="pt-4 ss:pt-12 md:pt-0 flex justify-center items-center md:flex-1 3xl:max-w-screen-sm floating"
        >
            <img
                src="/assets/hero-banner.webp"
                alt="The seal of ACSS placed on top of a glass object."
                width="500"
                height="500"
                class="max-w-xs 2xl:max-w-sm 3xl:max-w-lg m-auto"
            />
        </div>
        <!-- Hero Caption -->
        <div
            class="flex flex-col md:justify-center md:flex-1 gap-6 md:max-w-xl 3xl:max-w-2xl"
        >
            <div class="flex flex-col gap-1">
                <h1
                    class="text-4xl font-bold leading-tight lg:text-5xl md:leading-snug tracking-wide"
                >
                    Home of the Visionaries.
                </h1>
                <p
                    class="font-thin text-slate-200 md:max-w-sm text-sm 3xl:text-base 3xl:max-w-xl"
                >
                    Within our visionary community, opportunities take shape,
                    innovation thrives, and new horizons emerge. Join us in
                    crafting a future where dreams find their canvas and
                    possibilities know no bounds.
                </p>
            </div>
            <div class="flex flex-col gap-4">
                <p class="text-slate-200 font-light max-w-fit">
                    Alliance of Computer Science Students — <br />University of
                    the Philippines Los Baños
                </p>
                <Statistics />
            </div>
        </div>
    </div>
    <!-- Scroll Down Mouse Graphic Animation -->
    <div class="w-8 h-10 border-2 rounded-full m-auto pt-2 mt-6 sm:mt-0 mb-10">
        <div class="w-1 h-3 bg-white rounded-md animate-bounce m-auto" />
    </div>
</section>
