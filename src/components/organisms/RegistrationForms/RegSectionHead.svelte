<script>
    import BackButton from "$components/atoms/BackButton.svelte";
    import UnderlinedText from "$components/atoms/UnderlinedText.svelte";

    /**
     * @type {any}
     */
    export let headerPhotoURL;
    /**
     * @type {any}
     */
    export let eventName;
    /**
     * @type {any}
     */
    export let eventDescription;
</script>

<div class="flex flex-col">
    <div
        id="photo-header" 
        class="relative w-full h-1/4"
        style="background-image: url({headerPhotoURL})"
    >
    </div>
    <div id="form-header" class="mr-[10%] ml-[10%] flex flex-col">
        <div id="header-title" class="flex gap-3 items-center mb-1">
            <BackButton reference="../" />
            <div
                class="flex flex-wrap items-center gap-3 break-word overflow-hidden"
            >
                <UnderlinedText
                    text={eventName}
                    isFixed={false}
                    width={0}
                    tailwindcustomization=""
                />
                <div id="regformtitle">Registration Form</div>
            </div>
        </div>
        <div
            id="form-info"
            class="mt-4 text-base glassmorphic-rectangle overflow-hidden break-words"
        >
            {eventDescription}
        </div>
        <div id="form-dpa" class="mt-6 glassmorphic-rectangle overflow-hidden">
            <h6 class="mb-4 font-bold">Data Privacy Act of 2012</h6>
            <p>
                In accordance with RA No. 10173 or the Data Privacy Act of 2012,
                all your provided information shall only be used for
                communication and recognition purposes with regards to the said
                event. Upon submission of this form, you are giving our
                organization—ACSS, the permission to use your information for
                the said purposes only.
            </p>
        </div>
    </div>
</div>

<style>
    #photo-header {
        width: 100vw;
        height: 25vw;
        min-height: 25vh;
        background-image: url("./sampleheader.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 80%;
        mask-image: linear-gradient(
            to bottom,
            rgba(10, 4, 31, 0) 0%,
            rgba(0, 0, 0, 1) 30%,
            rgba(0, 0, 0, 1) 70%,
            rgba(10, 4, 31, 0) 100%
        );
    }
    #regformtitle {
        color: rgba(0, 245, 241, 1);
        font-weight: bold;
        font-size: 12px;
        margin-top: -8px;
    }
    .glassmorphic-rectangle {
        background: linear-gradient(
            0deg,
            rgba(0, 245, 241, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        padding: 25px;
        text-align: justify;
        border-radius: 16px;
        border: 0.01rem solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(21px);
    }
    #form-dpa {
        background: linear-gradient(
            270deg,
            rgba(0, 245, 241, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
    }
</style>
