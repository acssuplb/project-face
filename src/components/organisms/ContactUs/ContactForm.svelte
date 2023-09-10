<!-- 
  This is the registration form template where you can add different input components (check the list below).

  Input Components:
    1. TextInputComponent (required attributes: label, required, placeholder)
    2. NumberInputComponent (required attributes: label, required, placeholder)
    3. EmailInputComponent (required attributes: label, required, placeholder)
    4. DropdownComponent (required attributes: label, options)
    5. RadioInputComponent (required attributes: label, options)
    6. CheckboxInputComponent (required attributes: label, options)
-->

<script>
  // Import statements
  import { TextAreaComponent, SubmitNotification } from "$components";
  // import TextAreaComponent from "$components/atoms/TexAreaComponent.svelte";
  import TextInputComponent from "$components/atoms/TextInputComponent.svelte";
  import EmailInputComponent from "$components/atoms/EmailInputComponent.svelte";
  import FormButton from "$components/atoms/FormButton.svelte";
  import {
    submissionSuccess,
    showNotification,
    notificationMessage,
  } from "$lib/stores";

  let loadingSubmission = false;

  // Form submission into formValues
  // @ts-ignore
  async function submitForm(e) {
    // submit form values to API
    loadingSubmission = true;

    let formValues = {
      Name: "",
      Email: "",
      Message: "",
    };

    for (let key in formValues) {
      // @ts-ignore
      formValues[key] = document.getElementById(`Form${key}`).value;
    }

    e.target.reset();

    await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((body) => {
        loadingSubmission = false;
        if (body["success"]) {
          $notificationMessage =
            "Your message has been sent. Thank you for contacting us.";
          $submissionSuccess = true;
        } else {
          $notificationMessage =
            "Unable to send your message due to server error.";
          $submissionSuccess = false;
        }

        $showNotification = true;

        setTimeout(() => {
          $showNotification = false;
        }, 3000);
      });
  }
</script>

<div class="flex justify-center items-center h-fit lg:h-screen w-100">
  <div
    class="grid grid-cols-10 pt-32 pr-10 pl-10 md:pr-20 md:pl-20 lg:pr-0 lg:pl-0 w-100 lg:w-4/5 pb-20"
  >
    <div class="flex justify-center items-center lg:col-span-5 xl:w-7/8">
      <div
        class="hidden justify-center xl:justify-end lg:p-10 lg:block xl:block"
      >
        <img src="/assets/contactUS-photo.png" alt="photo" class="floating" />
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center col-span-10 md:col-span-9 lg:col-span-5"
    >
      <div class="grid grid-row-8 gap-3">
        <div class="flex flex-col justify-start items-start row-span-2">
          <h4 class="font-bold m-0">
            Get in <span style="color:var(--color-blue)">Touch!</span>
          </h4>
          <p class="font-base font-lightweight">
            We will answer as soon as we can!
          </p>
        </div>
        <div
          class="glassmorphic-rectangle flex justify-start items-center row-span-1"
        >
          <div class="w-100 flex flex-col">
            <form
              id="registration-form"
              class="h-fit flex flex-col justify-between"
              on:submit|preventDefault={submitForm}
            >
              <div id="components">
                <div id="components" class="two-inputs flex flex-row gap-8">
                  <TextInputComponent
                    label="Name"
                    required={true}
                    placeholder="Juan Dela Cruz"
                  />
                  <EmailInputComponent
                    label="Email"
                    required={true}
                    placeholder="jdelacruz@up.edu.ph"
                  />
                </div>
                <TextAreaComponent
                  label="Message"
                  required={true}
                  placeholder="Your Message"
                />
              </div>
              <div class="flex row-span-1">
                <div class="flex mt-8 items-center gap-4">
                  <FormButton {loadingSubmission} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @media (min-width: 0px) and (max-width: 500px) {
    .two-inputs {
      flex-direction: column;
      row-gap: 0px;
    }
  }

  .glassmorphic-rectangle {
    background: linear-gradient(
      0deg,
      rgba(0, 245, 241, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    padding: 25px;
    text-align: justify;
    border-radius: 16px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(21px);
  }
</style>
