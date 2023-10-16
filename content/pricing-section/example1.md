---
title: Pricing section section (1)
category: marketing-ui
subCategory: pricing-section
previewUrl: /pricing-section/1/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: pricing1_
---
    :::tab-panel{id="pricing1_1"}
    ```html
    <section py20>
        <div max-w-7xl mx-auto px="5 sm:10 md:12 lg:5" divide-y divide="gray-2 dark:gray-8" >
            <div flex md-justify-between md-flex-row flex-col gap-3 md-items-center>
                <div class="max-w-2xl space-y-3">
                    <h1 text="3xl/tight sm:4xl/tight gray-8 dark:white" font-bold>
                        Get access to all MediCare Soft for only <span text="emerald-7 dark:emerald-6">$1200</span>
                    </h1>
                    <p text="gray-7 dark:gray-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                    </p>
                </div>
                <div>
                    <a href="#" bg="emerald-7 dark:emerald-6 hover:op-80"
                        class="h12 flex items-center w-max px5 rd-lg text-white transition ease-linear">
                        Get Started now
                    </a>
                </div>
            </div>
            <div grid-cols="md:2 lg:3" gap="8 xl:10" class="mt16 grid pt-6">
                <div col-span="md:2 lg:1" space-y-3>
                    <span pl-5 relative before="absolute content-empty w4 h0.5 rd-md left-0 top-1/2 bg-emerald-7 dark:bg-emerald-6" text="emerald-7 dark:emerald-5">
                        All you need to manage your clinic
                    </span>
                    <h2 text="3xl gray-8 dark:white" font-bold>
                        Modern way to have control on your clinic
                    </h2>
                    <p text="gray-7 dark:gray-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                    </p>
                </div>
                <ul divide-y divide="gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="children:py3 last-pb0 first-pt0">
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 1
                    </li>
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 2
                    </li>
                    <li flex items-center gap-x-4>
                        <span bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 3
                    </li>
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 4
                    </li>
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 6
                    </li>
                </ul>
                <ul divide-y divide="gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="children:py3 last-pb0 first-pt0">
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 1
                    </li>
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 2
                    </li>
                    <li flex items-center gap-x-4>
                        <span bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 3
                    </li>
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 4
                    </li>
                    <li flex items-center gap-x-4>
                        <span  bg="emerald-7 dark:emerald-6"  text="sm white" w5 h5 flex items-center justify-center rd-full>&check;</span>
                        Advantage 6
                    </li>
                </ul>
            </div>
        </div>
    </section>
    ```
    :::
    :::tab-panel{id="pricing1_2"}
    ```vue
    <template>
        <section py20>
            <div max-w-7xl mx-auto px="5 sm:10 md:12 lg:5" divide-y divide="gray-2 dark:gray-8">
                <div flex md-justify-between md-flex-row flex-col gap-3 md-items-center>
                    <div class="max-w-2xl space-y-3">
                        <h1 text="3xl/tight sm:4xl/tight gray-8 dark:white" font-bold>
                            Get access to all MediCare Soft for only <span text="emerald-7 dark:emerald-6">$1200</span>
                        </h1>
                        <p text="gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                        </p>
                    </div>
                    <div>
                        <a href="#" bg="emerald-7 dark:emerald-6 hover:op-80"
                            class="h12 flex items-center w-max px5 rd-lg text-white transition ease-linear">
                            Get Started now
                        </a>
                    </div>
                </div>
                <div grid-cols="md:2 lg:3" gap="8 xl:10" class="mt16 grid pt-6">
                    <div col-span="md:2 lg:1" space-y-3>
                        <span pl-5 relative
                            un-before="absolute content-empty w4 h0.5 rd-md left-0 top-1/2 bg-emerald-7 dark:bg-emerald-6"
                            text="emerald-7 dark:emerald-5">
                            All you need to manage your clinic
                        </span>
                        <h2 text="3xl gray-8 dark:white" font-bold>
                            Modern way to have control on your clinic
                        </h2>
                        <p text="gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                        </p>
                    </div>
                    <ul divide-y divide="gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="children:py3 last-pb0 first-pt0">
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 1
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 2
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 3
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 4
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 6
                        </li>
                    </ul>
                    <ul divide-y divide="gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="children:py3 last-pb0 first-pt0">
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 1
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 2
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 3
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 4
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 6
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
    :::tab-panel{id="pricing1_3"}
    ```vue
    <template>
        <section py20>
            <div max-w-7xl mx-auto px="5 sm:10 md:12 lg:5" divide-y divide="gray-2 dark:gray-8">
                <div flex md-justify-between md-flex-row flex-col gap-3 md-items-center>
                    <div class="max-w-2xl space-y-3">
                        <h1 text="3xl/tight sm:4xl/tight gray-8 dark:white" font-bold>
                            Get access to all MediCare Soft for only <span text="emerald-7 dark:emerald-6">$1200</span>
                        </h1>
                        <p text="gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                        </p>
                    </div>
                    <div>
                        <nuxt-link to="#" bg="emerald-7 dark:emerald-6 hover:op-80"
                            class="h12 flex items-center w-max px5 rd-lg text-white transition ease-linear">
                            Get Started now
                        </nuxt-link>
                    </div>
                </div>
                <div grid-cols="md:2 lg:3" gap="8 xl:10" class="mt16 grid pt-6">
                    <div col-span="md:2 lg:1" space-y-3>
                        <span pl-5 relative
                            un-before="absolute content-empty w4 h0.5 rd-md left-0 top-1/2 bg-emerald-7 dark:bg-emerald-6"
                            text="emerald-7 dark:emerald-5">
                            All you need to manage your clinic
                        </span>
                        <h2 text="3xl gray-8 dark:white" font-bold>
                            Modern way to have control on your clinic
                        </h2>
                        <p text="gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, deserunt atque.
                        </p>
                    </div>
                    <ul divide-y divide="gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="children:py3 last-pb0 first-pt0">
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 1
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 2
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 3
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 4
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 6
                        </li>
                    </ul>
                    <ul divide-y divide="gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="children:py3 last-pb0 first-pt0">
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 1
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 2
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 3
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 4
                        </li>
                        <li flex items-center gap-x-4>
                            <span bg="emerald-7 dark:emerald-6" text="sm white" w5 h5 flex items-center justify-center
                                rd-full>&check;</span>
                            Advantage 6
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
::