import { Preset, definePreset } from 'unocss'
import { presetVariants } from './preset-helper'

type MyPresetOptions = {
    prefix?: string
}

export default definePreset((options: MyPresetOptions = { prefix: "fx" }): Preset => {
    return {
        name: 'unifyui-preset',
        variants: [
            presetVariants({
                prefix: options.prefix
            })
        ],
        shortcuts: {
            'ui-popper': 'absolute left-0 top-0 transform translate-x-[var(--fx-popper-placement-x)] translate-y-[var(--fx-popper-placement-y)]',
            'ui-tabs-indicator': 'absolute transform-origin-[0_0] w-[var(--un-tab-indicator-width)] h-[var(--un-tab-indicator-height)] top-[var(--un-tab-indicator-top)] left-[var(--un-tab-indicator-left)]',
            'ui-animated': 'animate-[var(--un-modal-animation)] animate-fill-both',
            'ui-overlay': 'fixed inset-0'
        },
    }
})