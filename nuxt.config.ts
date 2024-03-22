// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  css: ["~/assets/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: false,
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_ENV_VERCEL_URL || "http://localhost:3000",
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
      userAdmin: process.env.NUXT_PUBLIC_USER_ADMIN,
      passAdmin: process.env.NUXT_PUBLIC_PASS_ADMIN,
    },
  },
});
