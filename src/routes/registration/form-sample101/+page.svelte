<!-- 
  This is a registration page where you can alter the following:
    1. Header Photo (best resolution: 1600px x 400px)
    2. Event Name
    3. Event Description

  Go to routes/RegistrationForms/'the-form-component' to modify or add your own form 
-->

<script>
  import RegistrationTemplate from "$components/organisms/RegistrationForms/RegistrationTemplate.svelte"; // registration template component

  // CUSTOMIZE THIS: This is where you can modify the header photo, event name, and event description
  import Sample101 from "./Sample101.svelte"; // Form Component: import your form component (double check the import statement)
  let headerPhotoURL = "https://wallpapercave.com/wp/wp5787527.jpg"; // Header Photo: a file from static folder
  let eventName = "Sample 101"; // Event Name
  let eventDescription = `
                This is a sample form.
                `; // Event Description
  // END OF CUSTOMIZATION
</script>

<RegistrationTemplate {headerPhotoURL} {eventName} {eventDescription}>
  <!-- CUSTOMIZE THIS: Insert here your form component with an attribute slot="form" -->
  <Sample101 slot="form" />
  <!-- END OF CUSTOMIZATION -->
</RegistrationTemplate>
