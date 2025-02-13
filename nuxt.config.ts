// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://127.0.0.1:3000'
    },
    rollupConfig: {
      external: ["svg2png-wasm"],
      output: {
        generatedCode: {
          symbols: true,
        },
      },
    }
  },
  nitro: {
    experimental: {
      wasm: true,
    }
  }
})