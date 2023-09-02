<!-- Gradient Blurred Circle and Hexagon Moving Website Background -->
<div class="relative">
    <img
        src="/assets/gradient-blur-hexagon.svg"
        alt="Gradient Blur Hexagon"
        class="fixed block top-[-50%] left-[68%] lg:left-[80%] h-100 z-0 floating-3"
    />
    <img
        src="/assets/gradient-blur-ellipse.svg"
        alt="Gradient Blur Ellipse"
        class="fixed block top-[40%] left-[48%] lg:top-[2%] lg:left-[60%] h-90 z-0 floating-1"
    />
    <img
        src="/assets/gradient-blur-ellipse.svg"
        alt="Gradient Blur Ellipse"
        class="fixed block top-[-400px] left-[-200px] h-100 z-0 floating-2"
    />
    <img
        src="/assets/gradient-blur-ellipse.svg"
        alt="Gradient Blur Ellipse"
        class="fixed block top-[480px] left-[480px] h-100 z-0 floating-3"
    />
</div>

<style>
    /* Floating Animations Random Directions */
    .floating-1 {
        animation-name: floating-1;
        animation-duration: 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-1 {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 15px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }

    .floating-2 {
        animation-name: floating-2;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-2 {
        0% {
            transform: translate(0, 0px);
        }
        25% {
            transform: translate(15px, 15px);
        }
        50% {
            transform: translate(0, 15px);
        }
        75% {
            transform: translate(-15px, -15px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }

    .floating-3 {
        animation-name: floating-3;
        animation-duration: 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-3 {
        0% {
            transform: translate(0, 0px);
        }
        25% {
            transform: translate(-15px, -15px);
        }
        50% {
            transform: translate(0, 15px);
        }
        75% {
            transform: translate(15px, -15px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
</style>
