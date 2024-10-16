import type { ComponentCode } from "@/types/index";

export const breadcrumbsCode: ComponentCode = {
    'breadcrumbs/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-1.5 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">Home</a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">Navigation</a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5 text-title font-semibold">
            <span aria-current="page">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-1.5 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">Home</a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">Navigation</a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5 text-primary-600 dark:text-primary-500 font-semibold">
            <span aria-current="page">Current Page</span>
        </li>
    </ol>
</nav>`},
    'breadcrumbs/Divider':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">
                Home
            </a>
            <span class="select-none pointer-events-none" aria-hidden="true">/</span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">
                Navigation
            </a>
            <span class="select-none pointer-events-none" aria-hidden="true">/</span>
        </li>
        <li class="text-title font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title flex items-center gap-x-1.5">
                <span aria-hidden="true" class="flex i-ph-house text-lg"></span>
                Home
            </a>
            <svg width="16" height="16" fill="currentColor" class="size-4 shrink-0 -rotate-20deg"
                viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
            </svg>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title flex items-center gap-x-1.5">
                <span aria-hidden="true" class="flex i-ph-link text-lg"></span>
                Navigation
            </a>
            <svg width="16" height="16" fill="currentColor" class="size-4 shrink-0 -rotate-20deg"
                viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
            </svg>
        </li>
        <li class="flex items-center gap-x-1.5 text-title font-semibold">
            <span aria-hidden="true" class="flex i-ph-link text-lg"></span>
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>`},
    'breadcrumbs/Outline':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs" class="py-2 px-4 rd-md bdr-nm b">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">
                Home
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title">
                Navigation
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="text-title font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs" class="border-y py-2 px-4 border-gray-200 dark:border-gray-800">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title flex items-center gap-x-1.5">
                <span aria-hidden="true" class="flex i-ph-house-line text-lg"></span>
                Home
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#" class="ease-linear hover-text-sub-title flex items-center gap-x-1.5">
                <span aria-hidden="true" class="flex i-ph-link text-lg"></span>
                Navigation
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5 text-title font-semibold">
            <span aria-hidden="true" class="flex i-ph-link text-lg"></span>
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>`},
    'breadcrumbs/CustomIndicator':{
        lang:"html",
        name:"index.html", 
        code:`
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#"
                class="ease-linear hover-text-sub-title px-1.5 py-px b bdr-nm rd-full">
                Home
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#"
                class="ease-linear hover-text-sub-title px-1.5 py-px b bdr-nm rd-full">
                Navigation
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li
            class="px-1.5 py-px rd-full b bdr-nm bg-high text-title font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#"
                class="ease-linear hover-text-sub-title px-1.5 py-px b bdr-nm rd-full">
                Home
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#"
                class="ease-linear hover-text-sub-title px-1.5 py-px b bdr-nm rd-full">
                Navigation
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li
            class="px-1.5 py-px rd-full border text-white bg-primary-600 dark:bg-primary-500 border-primary-600 dark:border-primary-600 font-semibold">
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumbs">
    <ol class="flex items-center gap-x-3 text-sub-body">
        <li class="flex items-center gap-x-1.5">
            <a href="#"
                class="ease-linear hover-text-sub-title flex items-center gap-x-1.5 px-1.5 py-px rd-full bg-high hover:bg-gray-200 dark:hover:bg-gray-800">
                <span aria-hidden="true" class="flex i-ph-house-line text-lg"></span>
                Home
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li class="flex items-center gap-x-1.5">
            <a href="#"
                class="ease-linear hover-text-sub-title flex items-center gap-x-1.5 px-1.5 py-px rd-full bg-high hover:bg-gray-200 dark:hover:bg-gray-800">
                <span aria-hidden="true" class="flex i-ph-link text-lg"></span>
                Navigation
            </a>
            <span aria-hidden="true" class="flex i-ph-caret-right"></span>
        </li>
        <li
            class="flex items-center gap-x-1.5 text-title font-semibold px-1.5 py-px rd-full bg-body">
            <span aria-hidden="true" class="flex i-ph-link text-lg"></span>
            <span aria-current="page" class="flex">Current Page</span>
        </li>
    </ol>
</nav>`},
}