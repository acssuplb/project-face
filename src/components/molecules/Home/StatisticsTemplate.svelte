<script>
    /**
     * @type {string}
     */
    let number;
    /**
     * @type {string}
     */
    let title;
    export { number, title };
</script>

<div class="flex flex-row items-center max-w-fit mb-2">
    <div
        class="flex items-center justify-center glassmorphic-box mr-4 border-l"
    >
        <p class="font-bold text-lg text-slate-300">{number}</p>
    </div>
    <p
        class="font-light work-sans text-slate-400 border-l border-slate-600 py-4 px-4"
    >
        {title}
    </p>
</div>

<style>
    /* style for the  */
    .glassmorphic-box {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 16px;
        border: 0.01rem solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        backdrop-filter: blur(21px);
    }
</style>
