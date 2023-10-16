---
title: Features & Services 1
category: marketing-ui
subCategory: features
previewUrl: /features_services/1/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: feat1_
---
    :::tab-panel{id="feat1_1"}
    ```html
    <section py20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-16">
            <div class="space-y-4 max-w-2xl">
                <span text="blue-6 dark:blue-4" before="absolute content-empty top-1/2 left-0 w5 hpx bg-blue-6 dark:bg-blue-5 rd-full" 
                    class="font-semibold pl6 relative">
                    Why Us
                </span>
                <h1 text="gray-8 dark:white 3xl" class="font-bold">We help you to grow your business</h1>
            </div>
            <div
                class="mx-auto flex flex-col md-flex-row gap-10 xl-gap-14">
                <div py="md:4 xl:6" class="md-w-1/2 md-flex-1 flex flex-col space-y-5 md-gap-y-6">
                    <div class="flex gap-5 sm-gap-6 items-start">
                        <div class="min-w-max flex">
                            <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                <span i-carbon-data-check flex text-2xl></span>
                            </span>
                        </div>
                        <div class="space-y-1">
                            <h2 text="xl gray-9 dark:white" class="font-semibold">
                                Feature 1
                            </h2>
                            <p text="gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-5 sm-gap-6 items-start">
                        <div class="min-w-max flex">
                            <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                <span i-carbon-currency flex text-2xl></span>
                            </span>
                        </div>
                        <div class="space-y-1">
                            <h2 text="xl gray-9 dark:white" class="font-semibold">
                                Feature 2
                            </h2>
                            <p text="gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-5 sm-gap-6 items-start">
                        <div class="min-w-max flex">
                            <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                <span i-carbon-fire flex text-2xl></span>
                            </span>
                        </div>
                        <div class="space-y-1">
                            <h2 text="xl gray-9 dark:white" class="font-semibold">
                                Feature
                            </h2>
                            <p text="gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                            </p>
                        </div>
                    </div>

                </div>

                <div bg="gray-1 dark:gray-9" border="~ gray-2 dark:gray-8" p1.5 shadow="xl gray-2/50 dark:none"
                    class="md-w-1/2 md-flex-1 lg-flex xl-w-[45%] rd-md">
                    <div class="relative lg-w-full h-full">
                        <img src="/images/working-on-housing-project.jpg" width="2240" alt="system engineers celebrating successful-code-"
                            class="absolute inset-0 rd h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>
    ```
    :::
    :::tab-panel{id="feat1_2"}
    ```vue
    <template>
        <section py20>
            <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-16">
                <div class="space-y-4 max-w-2xl">
                    <span text="blue-6 dark:blue-4" un-before="absolute content-empty top-1/2 left-0 w5 hpx bg-blue-6 dark:bg-blue-5 rd-full" 
                        class="font-semibold pl6 relative">
                        Why Us
                    </span>
                    <h1 text="gray-8 dark:white 3xl" class="font-bold">We help you to grow your business</h1>
                </div>
                <div
                    class="mx-auto flex flex-col md-flex-row gap-10 xl-gap-14">
                    <div py="md:4 xl:6" class="md-w-1/2 md-flex-1 flex flex-col space-y-5 md-gap-y-6">
                        <div class="flex gap-5 sm-gap-6 items-start">
                            <div class="min-w-max flex">
                                <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                    <span i-carbon-data-check flex text-2xl></span>
                                </span>
                            </div>
                            <div class="space-y-1">
                                <h2 text="xl gray-9 dark:white" class="font-semibold">
                                    Feature 1
                                </h2>
                                <p text="gray-7 dark:gray-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 sm-gap-6 items-start">
                            <div class="min-w-max flex">
                                <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                    <span i-carbon-currency flex text-2xl></span>
                                </span>
                            </div>
                            <div class="space-y-1">
                                <h2 text="xl gray-9 dark:white" class="font-semibold">
                                    Feature 2
                                </h2>
                                <p text="gray-7 dark:gray-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 sm-gap-6 items-start">
                            <div class="min-w-max flex">
                                <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                    <span i-carbon-fire flex text-2xl></span>
                                </span>
                            </div>
                            <div class="space-y-1">
                                <h2 text="xl gray-9 dark:white" class="font-semibold">
                                    Feature
                                </h2>
                                <p text="gray-7 dark:gray-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                                </p>
                            </div>
                        </div>

                    </div>

                    <div bg="gray-1 dark:gray-9" border="~ gray-2 dark:gray-8" p1.5 shadow="xl gray-2/50 dark:none"
                        class="md-w-1/2 md-flex-1 lg-flex xl-w-[45%] rd-md">
                        <div class="relative lg-w-full h-full">
                            <img src="/images/working-on-housing-project.jpg" width="2240" alt="system engineers celebrating successful-code-"
                                class="absolute inset-0 rd h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
    :::tab-panel{id="feat1_3"}
    ```vue
    <template>
        <section py20>
            <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-16">
                <div class="space-y-4 max-w-2xl">
                    <span text="blue-6 dark:blue-4" un-before="absolute content-empty top-1/2 left-0 w5 hpx bg-blue-6 dark:bg-blue-5 rd-full" 
                        class="font-semibold pl6 relative">
                        Why Us
                    </span>
                    <h1 text="gray-8 dark:white 3xl" class="font-bold">We help you to grow your business</h1>
                </div>
                <div
                    class="mx-auto flex flex-col md-flex-row gap-10 xl-gap-14">
                    <div py="md:4 xl:6" class="md-w-1/2 md-flex-1 flex flex-col space-y-5 md-gap-y-6">
                        <div class="flex gap-5 sm-gap-6 items-start">
                            <div class="min-w-max flex">
                                <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                    <span i-carbon-data-check flex text-2xl></span>
                                </span>
                            </div>
                            <div class="space-y-1">
                                <h2 text="xl gray-9 dark:white" class="font-semibold">
                                    Feature 1
                                </h2>
                                <p text="gray-7 dark:gray-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 sm-gap-6 items-start">
                            <div class="min-w-max flex">
                                <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                    <span i-carbon-currency flex text-2xl></span>
                                </span>
                            </div>
                            <div class="space-y-1">
                                <h2 text="xl gray-9 dark:white" class="font-semibold">
                                    Feature 2
                                </h2>
                                <p text="gray-7 dark:gray-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-5 sm-gap-6 items-start">
                            <div class="min-w-max flex">
                                <span bg="gray-1 dark:gray-9" text="gray-8 dark:white" class="p4 rd-md">
                                    <span i-carbon-fire flex text-2xl></span>
                                </span>
                            </div>
                            <div class="space-y-1">
                                <h2 text="xl gray-9 dark:white" class="font-semibold">
                                    Feature
                                </h2>
                                <p text="gray-7 dark:gray-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem
                                </p>
                            </div>
                        </div>

                    </div>

                    <div bg="gray-1 dark:gray-9" border="~ gray-2 dark:gray-8" p1.5 shadow="xl gray-2/50 dark:none"
                        class="md-w-1/2 md-flex-1 lg-flex xl-w-[45%] rd-md">
                        <div class="relative lg-w-full h-full">
                            <img src="/images/working-on-housing-project.jpg" width="2240" alt="system engineers celebrating successful-code-"
                                class="absolute inset-0 rd h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
::