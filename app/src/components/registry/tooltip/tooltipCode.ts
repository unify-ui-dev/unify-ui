import type { ComponentCode } from "@/types/index";

export const tooltipCode: ComponentCode = {
    'tooltip/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="flex items-center gap-4 relative">
    <button aria-label="tooltip with default placement" data-fx-tooltip data-tooltip data-placement="bottom" id="tooltip-test"
        class="relative text-body b bdr-high p-2 rd-full">
        <span aria-hidden="true" class="flex i-ph-caret-down"></span>
        <p data-fx-popper
            class="u-fx-popper w-48 px-4 py-1.5 text-center text-sub-body truncate bg-high rd-lg shadow-lg dark:shadow-none shadow-gray-200 invisible fx-open-visible">
            This is a tooltip
        </p>
    </button>
    <button aria-label="tooltip with top placement" data-fx-tooltip data-tooltip data-placement="top" id="tooltip-testTop"
        class="relative text-body b bdr-high p-2 rd-full">
        <span aria-hidden="true" class="flex i-ph-caret-up"></span>
        <p data-fx-popper
            class="u-fx-popper w-48 px-4 py-1.5 text-center text-sub-body truncate bg-high rd-lg shadow-lg dark:shadow-none shadow-gray-200 invisible fx-open-visible">
            This is a tooltip
        </p>
    </button>
    <button aria-label="tooltip with left placement" data-fx-tooltip data-tooltip data-placement="left" id="tooltip-testLeft"
        class="relative text-body b bdr-high p-2 rd-full">
        <span aria-hidden="true" class="flex i-ph-caret-down"></span>
        <p data-fx-popper
            class="u-fx-popper w-48 px-4 py-1.5 text-center text-sub-body truncate bg-high rd-lg shadow-lg dark:shadow-none shadow-gray-200 invisible fx-open-visible">
            This is a tooltip
        </p>
    </button>
    <button aria-label="tooltip with right placement" data-fx-tooltip data-tooltip data-placement="right" id="tooltip-testRight"
        class="relative text-body b bdr-high p-2 rd-full">
        <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        <p data-fx-popper
            class="u-fx-popper w-48 px-4 py-1.5 text-center text-sub-body truncate bg-high rd-lg shadow-lg dark:shadow-none shadow-gray-200 invisible fx-open-visible">
            This is a tooltip
        </p>
    </button>
</div>`},
}