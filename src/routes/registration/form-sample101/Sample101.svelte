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
    import RegSectionBody from "$components/organisms/RegistrationForms/RegSectionBody.svelte";
    import TextInputComponent from "$components/atoms/TextInputComponent.svelte";
    import EmailInputComponent from "$components/atoms/EmailInputComponent.svelte";
    import NumberInputComponent from "$components/atoms/NumberInputComponent.svelte";
    import DropdownInputComponent from "$components/atoms/DropdownInputComponent.svelte";
    import RadioInputComponent from "$components/atoms/RadioInputComponent.svelte";
    import SubmitButton from "$components/atoms/SubmitButton.svelte";
    import CheckboxInputComponent from "$components/atoms/CheckboxInputComponent.svelte";

    // CUSTOMIZE THIS: Add the list of dropdown options, checkbox options, and radio options here
    let dropdown = ["Option 1", "Option 2", "Option 3"];
    let checkbox = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    let radio = ["Option 1", "Option 2"];
    // END OF CUSTOMIZATION

    // Form submission into formValues
    function submitForm() {
        let formValues = {};

        // @ts-ignore
        let components = document.getElementById("components")?.children;
        if (components) {
            for (let component of components) {
                if (component.id.substring(0, 14) === "FormRadioACSS-") {
                    let name = component.id.replace("FormRadioACSS-", "");
                    const radio = document.querySelectorAll(
                        `input[name="${name}"]`
                    );
                    for (const f of radio) {
                        // @ts-ignore
                        if (f.checked) {
                            // @ts-ignore
                            formValues[name] = f.value;
                        }
                    }
                } else if (component.id.substring(0, 14) === "FormCheckACSS-") {
                    let name = component.id.replace("FormCheckACSS-", "");
                    let checked = [];
                    const checkbox = document.querySelectorAll(
                        `input[name="${name}"]`
                    );
                    for (const f of checkbox) {
                        // @ts-ignore
                        if (f.checked) {
                            // @ts-ignore
                            checked.push(f.value);
                        }
                    }
                    // @ts-ignore
                    formValues[name] = checked;
                } else {
                    // @ts-ignore
                    formValues[component.id] = document.getElementById(
                        `Form${component.id}`
                        // @ts-ignore
                    ).value;
                }
            }
            console.log(formValues);
        }
    }
</script>

<RegSectionBody>
    <form
        id="registration-form"
        slot="registration-form"
        class="h-[100%] flex flex-col justify-between"
        on:submit={submitForm}
    >
        <div id="components">
            <!-- CUSTOMIZE THIS: Add the input components here -->
            <TextInputComponent label="Text" required={false} placeholder="" />
            <NumberInputComponent
                label="Number"
                required={false}
                placeholder=""
            />
            <EmailInputComponent
                label="Email"
                required={false}
                placeholder=""
            />
            <DropdownInputComponent label="Dropdown" options={dropdown} />
            <RadioInputComponent label="Radio" options={radio} />
            <CheckboxInputComponent label="Checkbox" options={checkbox} />
            <!-- END OF CUSTOMIZATION -->
        </div>
        <div class="overflow-hidden">
            <SubmitButton />
        </div>
    </form>
</RegSectionBody>
