import { resolve } from 'path'
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    nitro: {
        preset: 'vercel-edge',
    },
    css: ['assets/main.scss'],
    alias: {
        '@': resolve(__dirname, '/'),
    },
})
