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
  import ACSSOrientation from "./ACSSOrientation.svelte"; // // Form Component: import your form component (double check the import statement)
  let headerPhotoURL = "../form-headers/sample-reg-header.png"; // Header Photo: a file from static folder (URL should be ../form-headers/'your file')
  let eventName = "ACSS Orientation"; // Event Name
  let eventDescription = `
                This is an early registration form for the incoming ACSS Orientation
                "Insert Orientation Name" which aims to familiarize you with our
                growing organization. The orientation will be held on September 00,
                2023 at 6:00 PM. If you wish to join the orientation, kindly fill
                out this form. Orientation details and updates will be sent through
                the email used in answering this form.
                `; // Event Description
  // END OF CUSTOMIZATION
</script>

<RegistrationTemplate {headerPhotoURL} {eventName} {eventDescription}>
  <!-- CUSTOMIZE THIS: Insert here your form component with an attribute slot="form" -->
  <ACSSOrientation slot="form" />
  <!-- END OF CUSTOMIZATION -->
</RegistrationTemplate>
