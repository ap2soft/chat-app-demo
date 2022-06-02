import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: '%s - Demo Messaging App',
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
    },
  },
})
