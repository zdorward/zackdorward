import { resolve } from 'path'
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode', 'nuxt-particles', '@nuxt/image'],
    nitro: {
        preset: 'vercel-edge',
    },
    css: ['assets/main.scss'],
    alias: {
        '@': resolve(__dirname, '/'),
    },
})
