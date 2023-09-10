<script>
    import "../app.css";
    import { NavBar, Footer, ChatBot } from "$components";
    import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
    import { submissionSuccess, notificationMessage, showNotification } from "$lib/stores";
    import { onMount } from "svelte";
    import SubmitNotification from "$components/atoms/SubmitNotification.svelte";

    // Scroll Fade In Animation (To use: add "scrollFadeIn" class to a html element)
    function scrollFadeIn() {
        let scrollFadeInElements =
            document.getElementsByClassName("scrollFadeIn");
        let content = document.getElementById("content");

        for (let element of scrollFadeInElements) {
            if (
                element instanceof HTMLElement &&
                (
                    (element.getBoundingClientRect().top < document.documentElement.clientHeight * 0.5) ||
                    (content && content?.getBoundingClientRect().bottom <= document.documentElement.clientHeight) ||
                    (document.documentElement.clientWidth < 1100)
                )
            ) {
                element.style.opacity = "1";
            }
        }        
    }

    onMount(() => {
        scrollFadeIn();
        window.addEventListener("scroll", scrollFadeIn);
        window.addEventListener("resize", scrollFadeIn);
    });
</script>

<main id="main" class="overflow-hidden bg-base-black h-fit">
    <SubmitNotification success={$submissionSuccess} message={$notificationMessage} showNotif={$showNotification}/>
    <NavBar />
    <div id="fixed-on-modal-on">
        <GradientBlur />
        <!-- <ChatBot /> -->
        <div id="content">
            <slot />
        </div>
        <div class="relative z-20">
            <Footer />
        </div>
    </div>
</main>
