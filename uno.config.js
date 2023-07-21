// uno.config.ts
import {
    defineConfig, presetAttributify, presetIcons, presetUno, presetMini, presetWebFonts
  } from 'unocss'
  
  export default defineConfig({

    content: {
      pipeline: {
        include: [
          './ressources/**/*.html',
          'index.html',
          'assets/**/*.js',
        ],
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetMini({
        dark: "class"
      }),
      presetWebFonts({ // default provider
        provider:"none",
        fonts: {
          display : ['Oswald', 'sans-serif']
        },
      }),
      presetIcons(
        {
          collections: {
            carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
          }
        }
      ),
    ],
  })