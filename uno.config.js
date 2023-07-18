// uno.config.ts
import {
    defineConfig, presetAttributify, presetIcons, presetUno, presetMini
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
      presetIcons(
        {
          collections: {
            carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
          }
        }
      ),
    ],
  })