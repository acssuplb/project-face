import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {visionTool} from '@sanity/vision'
import { schemaTypes } from "./schemas";

export default defineConfig({
    title: import.meta.env.VITE_SANITY_NAME,
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
