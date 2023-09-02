<script>
    /**
     * @type {string}
     */
    let name;
    /**
     * @type {string}
     */
    let position;
    /**
     * @type {string}
     */
    let story;
    /**
     * @type {string}
     */
    let imageUrl;
    /**
     * @type {number}
     */
    let index;
    export { name, position, story, imageUrl, index };
</script>

<div
    class="glassmorphic-rectangle px-4 py-8 md:px-8 xl:px-12 flex flex-col items-center md:flex-row xl:gap-4 h-[100%]"
>
    <div class="flex flex-col justify-center items-center p-4">
        <div class="circular-photo">
            <img src={imageUrl} alt="Developer {index}" />
        </div>
        <div class="text-center mt-4 mb-6">
            <h1 class="text-lg max-ss:text-base font-bold">
                {name}
            </h1>
            <p class="text-sm italic font-thin leading-6 h-12 w-64">
                {position}
            </p>
        </div>
    </div>

    <div class="glassmorphic-no-border p-4 sm:p-8 mx-4">
        <p class="text-base text-justify indent-8">
            {story}
        </p>
    </div>
</div>

<style>
    .glassmorphic-no-border {
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.15);
    }

    /* make square image into a circle */
    .circular-photo {
        display: inline-block;
        position: relative;
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;
    }

    .circular-photo img {
        width: auto;
        height: 100%;
    }

    /* lessen backdrop filter blur */
    .glassmorphic-rectangle {
        border: none;
        backdrop-filter: blur(5px);
    }
</style>
