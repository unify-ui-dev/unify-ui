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

            // blog sections
            "ressources/blog-sections/1/": resolve(__dirname, "./ressources/blog-sections/1/index.html"),
            "ressources/blog-sections/2/": resolve(__dirname, "./ressources/blog-sections/2/index.html"),
            "ressources/blog-sections/3/": resolve(__dirname, "./ressources/blog-sections/3/index.html"),
            "ressources/blog-sections/4/": resolve(__dirname, "./ressources/blog-sections/4/index.html"),
            "ressources/blog-sections/5/": resolve(__dirname, "./ressources/blog-sections/5/index.html"),
            "ressources/blog-sections/6/": resolve(__dirname, "./ressources/blog-sections/6/index.html"),
            "ressources/blog-sections/7/": resolve(__dirname, "./ressources/blog-sections/7/index.html"),
            "ressources/blog-sections/8/": resolve(__dirname, "./ressources/blog-sections/8/index.html"),

            // cta
            "ressources/cta/1/": resolve(__dirname, "./ressources/cta/1/index.html"),
            "ressources/cta/2/": resolve(__dirname, "./ressources/cta/2/index.html"),
            "ressources/cta/3/": resolve(__dirname, "./ressources/cta/3/index.html"),
            "ressources/cta/4/": resolve(__dirname, "./ressources/cta/4/index.html"),
            "ressources/cta/5/": resolve(__dirname, "./ressources/cta/5/index.html"),
            "ressources/cta/6/": resolve(__dirname, "./ressources/cta/6/index.html"),
            
            // features
            "ressources/features_services/1/": resolve(__dirname, "./ressources/features_services/1/index.html"),
            "ressources/features_services/2/": resolve(__dirname, "./ressources/features_services/2/index.html"),
            "ressources/features_services/3/": resolve(__dirname, "./ressources/features_services/3/index.html"),
            "ressources/features_services/4/": resolve(__dirname, "./ressources/features_services/4/index.html"),
            "ressources/features_services/5/": resolve(__dirname, "./ressources/features_services/5/index.html"),
            "ressources/features_services/6/": resolve(__dirname, "./ressources/features_services/6/index.html"),
            "ressources/features_services/7/": resolve(__dirname, "./ressources/features_services/7/index.html"),
            "ressources/features_services/8/": resolve(__dirname, "./ressources/features_services/8/index.html"),
            "ressources/features_services/9/": resolve(__dirname, "./ressources/features_services/9/index.html"),
            "ressources/features_services/10/": resolve(__dirname, "./ressources/features_services/10/index.html"),
            "ressources/features_services/11/": resolve(__dirname, "./ressources/features_services/11/index.html"),
            "ressources/features_services/12/": resolve(__dirname, "./ressources/features_services/12/index.html"),
            "ressources/features_services/13/": resolve(__dirname, "./ressources/features_services/13/index.html"),
            
            // pricing
            "ressources/pricing-section/1/": resolve(__dirname, "./ressources/pricing-section/1/index.html"),
            "ressources/pricing-section/2/": resolve(__dirname, "./ressources/pricing-section/2/index.html"),
            "ressources/pricing-section/3/": resolve(__dirname, "./ressources/pricing-section/3/index.html"),
            "ressources/pricing-section/4/": resolve(__dirname, "./ressources/pricing-section/4/index.html"),
            "ressources/pricing-section/5/": resolve(__dirname, "./ressources/pricing-section/5/index.html"),
            
            // testimonial
            "ressources/testimonial_success/1/": resolve(__dirname, "./ressources/testimonial_success/1/index.html"),
            "ressources/testimonial_success/2/": resolve(__dirname, "./ressources/testimonial_success/2/index.html"),
            "ressources/testimonial_success/3/": resolve(__dirname, "./ressources/testimonial_success/3/index.html"),
            "ressources/testimonial_success/4/": resolve(__dirname, "./ressources/testimonial_success/4/index.html"),
            
            // footer
            "ressources/footer/1/": resolve(__dirname, "./ressources/footer/1/index.html"),
            "ressources/footer/2/": resolve(__dirname, "./ressources/footer/2/index.html"),
            "ressources/footer/3/": resolve(__dirname, "./ressources/footer/3/index.html"),
            "ressources/footer/4/": resolve(__dirname, "./ressources/footer/4/index.html"),
            "ressources/footer/5/": resolve(__dirname, "./ressources/footer/5/index.html"),
            "ressources/footer/6/": resolve(__dirname, "./ressources/footer/6/index.html"),
        },
    },
},
})