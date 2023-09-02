<script>
    /**
     * @type {any}
     */
    export let label;
    /**
     * @type {any}
     */
    export let options;
</script>

<div id={"FormRadioACSS-" + label} class="flex flex-col gap-1 mb-7 text-left">
    <label for={label} class="font-bold">{label}</label>
    <div>
        {#each options as item, i}
            <div class="flex gap-3">
                {#if i == 0}
                    <input
                        type="radio"
                        class="w-[15px]"
                        name={label}
                        value={item}
                        checked
                    />
                {:else}
                    <input
                        type="radio"
                        class="w-[15px]"
                        name={label}
                        value={item}
                    />
                {/if}
                <div>{item}</div>
            </div>
        {/each}
    </div>
</div>
