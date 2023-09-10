<script>
  /**
   * @type {any}
   */
  export let label;
  /**
   * @type {any}
   */
  export let required;
  /**
   * @type {any}
   */
  export let placeholder;
</script>

<div id={label} class="text-left bg w-100">
  <div class="flex gap-1">
    <label for={label} class="font-bold">{label}</label>
    <div class="text-[#00f5f1]">*</div>
  </div>
  <textarea
    id={"Form" + label}
    name={label}
    class="custom-scrollbar w-full h-[30vh] mt-2 rounded-lg text-black h-8 pl-3 pr-3 bg-white/[0.8] placeholder:italic placeholder:text-gray-800 placeholder:font-thin"
    {placeholder}
    required
  />
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--color-blue);
    border-radius: 9999px;
  }

  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: var(--color-blue) transparent;
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
</style>
