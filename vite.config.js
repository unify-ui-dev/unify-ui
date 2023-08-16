import UnoCSS from 'unocss/vite'
import { resolve } from "path";
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  build: {
    rollupOptions: {
        input: {
            main : resolve(__dirname, "./index.html"),

            // hero sections
            "ressources/hero-sections/agency": resolve(__dirname, "./ressources/hero-sections/agency/index.html"),
            "ressources/hero-sections/architecture": resolve(__dirname, "./ressources/hero-sections/architecture/index.html"),
            "ressources/hero-sections/creative-agency": resolve(__dirname, "./ressources/hero-sections/creative-agency/index.html"),
            "ressources/hero-sections/digital-agency": resolve(__dirname, "./ressources/hero-sections/digital-agency/index.html"),
            "ressources/hero-sections/grocerystore": resolve(__dirname, "./ressources/hero-sections/grocerystore/index.html"),
            "ressources/hero-sections/healthcare": resolve(__dirname, "./ressources/hero-sections/healthcare/index.html"),
            "ressources/hero-sections/hero-section": resolve(__dirname, "./ressources/hero-sections/hero-section/index.html"),
            "ressources/hero-sections/medcare": resolve(__dirname, "./ressources/hero-sections/medcare/index.html"),
            "ressources/hero-sections/personnal-porfolio": resolve(__dirname, "./ressources/hero-sections/personnal-porfolio/index.html"),
            "ressources/hero-sections/podcast": resolve(__dirname, "./ressources/hero-sections/podcast/index.html"),
            "ressources/hero-sections/podcast-agency": resolve(__dirname, "./ressources/hero-sections/podcast-agency/index.html"),
            "ressources/hero-sections/saas": resolve(__dirname, "./ressources/hero-sections/saas/index.html"),
            "ressources/hero-sections/saas-product": resolve(__dirname, "./ressources/hero-sections/saas-product/index.html"),
            "ressources/hero-sections/software-agency": resolve(__dirname, "./ressources/hero-sections/software-agency/index.html"),
            "ressources/hero-sections/with-slider": resolve(__dirname, "./ressources/hero-sections/with-slider/index.html"),
        },
    },
},
})