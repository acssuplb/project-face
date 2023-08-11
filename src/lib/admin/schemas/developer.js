import { defineField, defineType } from "sanity";

export default defineType({
    name: "developer",
    title: "Developers",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Profile Picture",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => [Rule.required()],
            description:
                "Kindly add a profile picture to introduce the developer's face to the world.",
        }),
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
            validation: (Rule) => [Rule.required()],
            description: "Kindly add a first name for the developer.",
        }),
        defineField({
            name: "middleName",
            title: "Middle Name",
            type: "string",
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
            validation: (Rule) => [Rule.required()],
            description: "Kindly add a last name for the developer.",
        }),
        defineField({
            name: "suffix",
            title: "Suffix",
            type: "string",
        }),
        defineField({
            name: "batch",
            title: "Organization Batch",
            type: "string",
            validation: (Rule) => [Rule.required()],
            description: "Kindly indicate the batch of the developer.",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            description:
                "This field is not required, but kindly indicate an email, so that others can contact this developer.",
            validation: (Rule) => [
                Rule.custom((value) => {
                    if (!value) return true;

                    const emailPattern =
                        /^[A -Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

                    if (emailPattern.test(value)) return true;

                    return "Kindly indicate a valid email.";
                }),
            ],
        }),
        defineField({
            name: "bio",
            title: "Personal Bio",
            type: "text",
            validation: (Rule) => [
                Rule.required().error("Kindly indicate a Personal Bio."),
                Rule.max(150).error(
                    "Personal Bio must not exceed 150 characters."
                ),
            ],
            description:
                "Kindly add a Personal Bio to tell more about this developer.",
        }),
        defineField({
            name: "linkedin",
            title: "LinkedIn Profile Link",
            type: "string",
            description:
                "This field is not required, but kindly indicate a LinkedIn Profile so that other people can connect with this developer.",
            validation: (Rule) => [
                Rule.custom((value) => {
                    if (!value) return true;

                    const linkedInPattern =
                        /^https?:\/\/(www\.)?linkedin\.com\/(in|pub)\/[A-Za-z0-9_-]+(\/(?!.*edit).*\/?)?$/;

                    if (linkedInPattern.test(value)) return true;

                    return "Kindly indicate a valid LinkedIn Profile Link.";
                }),
            ],
        }),
        defineField({
            name: "github",
            title: "GitHub Profile Link",
            type: "string",
            description:
                "This field is not required, but kindly indicate a GitHub Profile so that other people can check the projects made by this developer.",
            validation: (Rule) => [
                Rule.custom((value) => {
                    if (!value) return true;

                    const githubPattern =
                        /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+(\/?)$/;

                    if (githubPattern.test(value)) return true;

                    return "Kindly indicate a valid GitHub Profile Link.";
                }),
            ],
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    title: "Skill",
                    type: "string",
                },
            ],
        }),
        defineField({
            name: "team",
            title: "Team",
            type: "reference",
            to: [{ type: "team" }],
            description: "Kindly indicate the team of the developer.",
        }),
        defineField({
            name: "position",
            title: "Position",
            type: "string",
            hidden: ({ parent, value }) => {
                return !(
                    parent?.team?._ref ===
                    import.meta.env.VITE_SANITY_EXECUTIVE_ID
                );
            },
            description: "Kindly indicate the position of the developer.",
        }),
    ],
    preview: {
        select: {
            firstName: "firstName",
            media: "image",
            lastName: "lastName",
        },
        prepare({ firstName, media, lastName }) {
            return {
                title: `${firstName || ""} ${lastName || ""}`,
                media,
            };
        },
    },
});
