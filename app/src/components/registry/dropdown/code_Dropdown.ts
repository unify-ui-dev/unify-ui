import type { ComponentCode } from "@/types/index";

export const codeDropdowns: ComponentCode = {
    'dropdown/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div data-fx-dropdown data-drop-down class="relative wmax">
    <button
        data-dropdown-trigger
        class="btn btn-sm rd-md btn-soft btn-soft-gray bdr-high b gap-x2 group">
        User Setting
        <span aria-hidden="true" class="flex i-ph-caret-down ease-linear duration-200 group-aria-expanded-rotate-180"></span>
    </button>
    <div role="list" data-fx-popper class="u-fx-popper z-20 op0 invisible translate-y-3 fx-open-op100 fx-open-visible fx-open-translate-y-0 w-48 text-sm p-2 ui-soft b bdr-high rd-lg flex flex-col overflow-hidden text-body ease-linear transition-transform">
        <a href="#link" aria-label="some alt text for link"
            class="focus-outline focus-bg-high outline-none ease-linear flex items-center gap-x-3 duration-200 hover-bg-high p-2 rd-md">
            <span aria-hidden="true" class="text-lg flex i-ph-user"></span>
            Edit Profile
        </a>
        <a href="#link" aria-label="some alt text for link"
            class="focus-outline focus-bg-high outline-none ease-linear flex items-center gap-x-3 duration-200 hover-bg-high p-2 rd-md">
            <span aria-hidden="true" class="text-lg flex i-ph-gear"></span>
            Setting
        </a>
        <a href="#link" aria-label="some alt text for link"
            class="focus-outline focus-bg-high outline-none ease-linear flex items-center gap-x-3 duration-200 hover-bg-high p-2 rd-md">
            <span aria-hidden="true" class="text-lg flex i-ph-invoice"></span>
            Billing
        </a>
    </div>
</div>
`
    },
}