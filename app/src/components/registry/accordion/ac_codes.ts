import type { ComponentCode } from "@/types/index";

export const acCodes: ComponentCode = {
    'accordion/Default': {
        lang: "html",
        name: 'index.html',
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="">
    <div data-accordion-item data-accordion-value="accordion-1" class="b-b bdr_b-nm">
        <button data-accordion-trigger aria-label="toggle button"
            class="w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg group">
            Is it accessible?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="py-2">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="b-b bdr_b-nm">
        <button data-accordion-trigger aria-label="toggle button"
            class="w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg group">
            Is it unstyled?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="py-2">
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="b-b bdr_b-nm">
        <button data-accordion-trigger aria-label="toggle button"
            class="w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg group">
            Can it be animated?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="py-2">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>
    `},
    'accordion/Solid': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md ui-solid">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Is it accessible?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md bg-gray-100 dark:bg-gray-900">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Is it unstyled?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md bg-gray-100 dark:bg-gray-900">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Can it be animated?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>
    `},
    'accordion/Soft': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md ui-soft">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Is it accessible?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md ui-soft">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Is it unstyled?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md ui-soft">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Can it be animated?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>
    `},
    'accordion/Outline': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md ui-outline b">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg group">
            Is it accessible?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md ui-outline b">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg group">
            Is it unstyled?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md ui-outline b">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg group">
            Can it be animated?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>
    `},
    'accordion/Link': {
        lang: "html",
        name: 'index.html',
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md accordion-link">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-primary font-medium text-lg ease-linear rd-md group">
            Is it accessible?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md accordion-link">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-primary font-medium text-lg ease-linear rd-md group">
            Is it unstyled?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md accordion-link">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-primary font-medium text-lg ease-linear rd-md group">
            Can it be animated?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>
    `},
    'accordion/Subtle': {
        lang: "html",
        name: "index.html",
        code: `
<div data-accordion data-default-value="accordion-1" data-type="single" class="space-y-2">
    <div data-accordion-item data-accordion-value="accordion-1" class="rd-md ui-subtle">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Is it accessible?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2" class="rd-md ui-subtle">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Is it unstyled?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3" class="rd-md ui-subtle">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 w-full flex justify-between items-center py-2 text-sub-title font-medium text-lg ease-linear hover-bg-high rd-md group">
            Can it be animated?
            <span aria-hidden="true"
            class="flex i-ph-caret-down text-sm ease-linear duration-300 group-aria-expanded-rotate-180"></span>
        </button>
        <div aria-hidden="true" data-accordion-content class="text-body duration-200 ease-linear overflow-hidden">
            <p class="p-4">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>
    `},
    'accordion/InitScript': {
        lang: "js",
        name: 'script.js',
        code: `
        
    `}
}