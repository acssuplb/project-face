import { defineField, defineType } from "sanity";

export default defineType({
    name: "team",
    title: "Teams",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Team Name",
            type: "string",
            description:
                "Kindly indicate the name of the team that you want to add to this organization.",
            validation: (Rule) => [Rule.required()],
        }),
        defineField({
            name: "description",
            title: "Team Description",
            type: "blockContent",
            description:
                "Kindly indicate a description of the team that you are adding to this organization.",
            validation: (Rule) => [Rule.required()],
        }),
    ],
});
