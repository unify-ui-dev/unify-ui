// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetMini,
  presetWebFonts,
} from "unocss";

import unifyUI from "@flexilla/uno-preset"

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    unifyUI(),
    presetMini({
      dark: "class",
    }),
    presetWebFonts({
      provider: "none",
      fonts: {
        display: ["Oswald", "sans-serif"],
      },
    }),
    presetIcons({
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
    }),
  ],
});
