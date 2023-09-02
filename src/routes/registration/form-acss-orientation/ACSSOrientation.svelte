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

    // CUSTOMIZE THIS: Add the list of dropdown options and radio options here
    let colleges = [
        "College of Arts and Sciences",
        "College of Economics and Management",
        "College of Forestry and Natural Resources",
        "College of Development Communication",
        "College of Agriculture and Food Science",
        "College of Engineering and Agro-industrial Technology",
        "College of Human Ecology",
        "College of Veterinary Medicine",
        "College of Public Affairs and Development",
        "School of Environmental Science and Management",
    ];

    let howYouHear = ["ACSS Social Media Post", "Shared Post of a Friend"];
    // END OF CUSTOMIZATION

    // Form submission into formValues
    function submitForm() {
        let formValues = {};
        
        // @ts-ignore
        let components = document.getElementById("components")?.children;
        if (components) {
            for (let component of components) {
                if (
                    component.id.substring(0, 14) === "FormRadioACSS-"
                ) {
                    let name = component.id.replace("FormRadioACSS-", "");
                    console.log(component.id);
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
                }else{
                    // @ts-ignore
                    formValues[component.id] = document.getElementById(`Form${component.id}`).value;
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
            <TextInputComponent label="Name" required={true} placeholder="Juan Dela Cruz"/>
            <TextInputComponent label="Nickname" required={true} placeholder=""/>
            <EmailInputComponent label="Email" required={true} placeholder="jdelacruz@up.edu.ph"/>
            <DropdownInputComponent label="College" options={colleges} />
            <TextInputComponent label="Degree Program" required={true} placeholder="BSCS"/>
            <NumberInputComponent label="Batch" required={true} placeholder="2021"/>
            <TextInputComponent label="Facebook Profile Link" required={true} placeholder=""/>
            <RadioInputComponent
                label="How did you hear about this event?"
                options={howYouHear}
            />
            <!-- END OF CUSTOMIZATION -->
        </div>
        <div class="overflow-hidden">
            <SubmitButton/>
        </div>
    </form>
</RegSectionBody>