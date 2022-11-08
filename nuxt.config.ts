// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/main.css"],
    modules: [
        [
            "@storyblok/nuxt",
            {
                accessToken: "mTdiTlO41gfFw4ZaN4sdQQtt",
            },
        ],
    ],
})
