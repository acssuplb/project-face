<script>
    import { goto } from '$app/navigation';
    /**
     * @type {string | URL}
     */
     export let reference;
    function goBack(){
        let referrer = document.referrer;
        if(referrer == reference){
            history.back() // URL of referrer
        }else{
            goto(reference)
        }
    }
</script>

<div on:click={goBack} class="relative z-10 cursor-pointer">
<svg id="button"
    width="14"
    height="28"
    viewBox="0 0 21 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M20.9999 0L-6.10352e-05 21L20.9999 42L12.1016 21L20.9999 0Z"
        fill="url(#paint0_linear_181_281)"
    />
    <defs>
        <linearGradient
            id="paint0_linear_181_281"
            x1="48.7626"
            y1="10.322"
            x2="-9.2543"
            y2="18.5085"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#2E3792" />
            <stop offset="0.536458" stop-color="#00F5F1" />
            <stop offset="1" stop-color="#00F5F1" stop-opacity="0" />
        </linearGradient>
    </defs>
</svg>
</div>

<style>
    #button{
        min-width: 14px;
        min-height: 28px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    #button:hover{
        opacity: 50%;
        transition: 0.2s;
    }
</style>
