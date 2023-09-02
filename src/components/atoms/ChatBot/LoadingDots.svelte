<div class="dots">
    <div class="dot-1"></div>
    <div class="dot-2"></div>
    <div class="dot-3"></div>
</div>

<style>
    .dots {
        display: flex;
        column-gap: 6.522px;
    }

    .dot-1, .dot-2, .dot-3 {
        height: 6.522px;
        width: 6.522px;

        background-color: #FFF;
        border-radius: 100px;

        animation-name: fade;
        animation-timing-function: ease-in-out;
        animation-duration: 1.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }

    .dot-1 {
        animation-delay: 0.2s;
    }
    
    .dot-2 {
        animation-delay: 0.4s;
    }

    .dot-3 {
        animation-delay: 0.6s;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>