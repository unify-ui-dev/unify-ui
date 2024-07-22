import type { ComponentCode } from "@/types/index";

export const codeCards: ComponentCode = {
    'card/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="ui-card-xl rd-md b bdr-high card-body space-y-6">
    <div class="aspect-video b bdr-high b-dashed rounded">

    </div>
    <div class="space-y-3 text-body">
        <h2 class="text-xl font-semibold text-title">
            Card Title</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
</div>`
    },
    'card/WithIcon':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="ui-card-xl rd-md b bdr-high card-body space-y-6">
    <div class="size-12 b bdr-high b-dashed rounded">

    </div>
    <div class="space-y-3 text-body">
        <h2 class="text-xl font-semibold text-title">
            Card Title</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
</div>`
    },
    'card/Ecommerce1':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="p-1 rd-lg ui-solid relative">
    <div class="relative">
        <div
            class="absolute inset-x-1 top-1 flex justify-between items-center text-body text-xs">
            <span
                class="ui-subtle dark-text-gray800 px-2 py-px rounded-full">
                -40%
            </span>
            <button aria-label="add to favorite"
                class="p-1.5 bg-gray-900/80 backdrop-filter backdrop-blur-sm text-white rounded-full">
                <span aria-hidden="true" class="flex i-ph-heart"></span>
            </button>
        </div>
        <img src="/images/bottes-cuir.webp" alt="bottes cuir" class="w-full h-auto rounded-md">
    </div>
    <div class="flex justify-between items-start gap-2 px-4 pt-3 pb-2 text-sm">
        <h2 class="flex-1 text-title font-medium">
            Air Nike
        </h2>
        <span class="text-sub-title">12$</span>
    </div>
</div>`
    },
    'card/Ecommerce2':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="p-1 rd-lg ui-solid relative space-y-3">
    <div class="px-4 pt-2">
        <span class="text-sub-title text-sm">
            Top Seller
        </span>
    </div>
    <img src="/images/sports-shoe.webp" alt="Sport Shoe" class="w-full h-auto rounded-md">
    <div class="px-4 pb-2 text-sm space-y-2">
        <div class="flex justify-between items-start gap-2">
            <h2 class="flex-1 text-title font-medium">
                Air Nike
            </h2>
            <span class="text-sub-title">12$</span>
        </div>
        <div class="flex justify-between items-start gap-2 text-sm">
            <p class="flex-1 text-sub-body">
                Colored
            </p>
            <button
                class="btn btn-xs btn-solid btn-solid-neutral rd-md">
                Add to card
            </button>
        </div>
    </div>
</div>`
    },
    'card/PricingCard':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="ui-outline ui-solid p6 md-p8  rd-lg flex flex-col">
    <span class="text-title font-bold text-xl">Business Plan</span>
    <p class="text-body my6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
    <div class="flex items-end gap4 py4 b-y bdr_y-high">
        <span
            class="bg-clip-text text-transparent bg-gradient-to-br from-primary500 to-accent-400 font-bold text-4xl">
            $400
        </span>
        <span class="ui-subtle-primary ui-size-md rd-md">
            lifetime
        </span>
    </div>
    <ul class="flex flex-col gap-y3 children-flex children-items-center children-gap-x4 py8">
        <li>
            <span aria-hidden="true" class="flex i-ph-check text-primary500"></span>
            Lorem ipsum dolor sit amet
        </li>
        <li>
            <span aria-hidden="true" class="flex i-ph-check text-primary500"></span>
            Lorem ipsum dolor sit amet
        </li>
        <li>
            <span aria-hidden="true" class="flex i-ph-check text-primary500"></span>
            Lorem ipsum dolor sit amet
        </li>
        <li>
            <span aria-hidden="true" class="flex i-ph-check text-primary500"></span>
            Lorem ipsum dolor sit amet
        </li>
        <li>
            <span aria-hidden="true" class="flex i-ph-check text-primary500"></span>
            Lorem ipsum dolor sit amet
        </li>
    </ul>
    <a href="#pricing" class="btn btn-md rd-md btn-solid btn-solid-primary text-white wfull justify-center">
        Get Started
    </a>
</div>`
    },
}