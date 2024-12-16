import {defineConfig} from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "homepage",
                label: "Homepage",
                path: "content/homepage",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                    },
                ],
                ui: {
                    allowedActions: {
                        // create: false,
                        // delete: false,
                    }
                }
            },
            {
                name: "imprint",
                label: "Impressum",
                path: "content/imprint",
                fields: [
                    {
                        type: "rich-text",
                        name: "content",
                        label: "Inhalt",
                    }
                ],
                ui: {
                    allowedActions: {
                        // create: false,
                        // delete: false,
                    }
                }
            },
            {
                name: "privacy",
                label: "Datenschutz",
                path: "content/privacy",
                fields: [
                    {
                        type: "rich-text",
                        name: "content",
                        label: "Inhalt",
                    }
                ],
                ui: {
                    allowedActions: {
                        // create: false,
                        // delete: false,
                    }
                }
            },
        ],
    },
});
