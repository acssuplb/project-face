<!-- TabButton.svelte -->
<script>
    export let label;
    export let active = false;
    export let onClick;
  </script>
  
  <button
    class="tab-button px-4 py-2 rounded-md font-semibold focus:outline-none"
    class:active={"active"}
    on:click={onClick}
  >
    {label}
  </button>
  
  <style>
    /* Add custom styles here if needed */
  </style>
  