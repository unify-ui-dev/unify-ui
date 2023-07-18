// uno.config.ts
import {
    defineConfig, presetAttributify, presetIcons,
    presetTypography, presetUno, presetWebFonts,
    transformerDirectives, transformerVariantGroup, presetMini
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [
      // ...
    ],
    
    theme: {
      
    },
    extendTheme:{

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
  
      presetTypography(),
      presetWebFonts({ 
        // default provider
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })