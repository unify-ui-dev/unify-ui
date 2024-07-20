import {
  defineConfig,
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
        primary:  {
          DEFAULT: 'rgba(var(--c-primary-600) / <alpha-value>)',
          50: 'rgba(var(--c-primary-50) / <alpha-value>)',
          100: 'rgba(var(--c-primary-100) / <alpha-value>)',
          200: 'rgba(var(--c-primary-200) / <alpha-value>)',
          300: 'rgba(var(--c-primary-300) / <alpha-value>)',
          400: 'rgba(var(--c-primary-400) / <alpha-value>)',
          500: 'rgba(var(--c-primary-500) / <alpha-value>)',
          600: 'rgba(var(--c-primary-600) / <alpha-value>)',
          700: 'rgba(var(--c-primary-700) / <alpha-value>)',
          800: 'rgba(var(--c-primary-800) / <alpha-value>)',
          900: 'rgba(var(--c-primary-900) / <alpha-value>)',
          950: 'rgba(var(--c-primary-950) / <alpha-value>)',
        },
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
        'display-oswald': ["Oswald", "sans-serif"],
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
});
