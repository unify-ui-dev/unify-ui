import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetMini,
  presetWebFonts,
} from "unocss";

import { colors } from "@unocss/preset-mini/colors";

import { presetForms } from "@julr/unocss-preset-forms";

import { presetUI } from "@unifydev/preset-ui";



export default defineConfig({
  theme: {
    colors: {
      inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        primary: colors.indigo,
        secondary: colors.cyan,
        accent: colors.blue,
        danger: colors.red,
        success: colors.emerald,
        warning: colors.orange,
        info: colors.cyan,
        gray: colors.slate,
        black: colors.black,
        white: colors.white,
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetUI({}),
    presetForms({
      strategy: "base",
    }),
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
        ph: () =>
          import("@iconify-json/ph/icons.json").then((i) => i.default),
      },
    }),
  ],
});
