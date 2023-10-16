---
title: Testimonial Section (2)
category: marketing-ui
subCategory: pricing-section
previewUrl: /testimonial_success/2/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: testi2_
---
    :::tab-panel{id="testi2_1"}
    ```html
    <section py20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-16">
            <div class="space-y-4 max-w-2xl">
                <span bg="blue-1 dark:gray-9" text="xs blue-8 dark:gray-1" class="rd-lg px2.5 py1 font-semibold tracking-wide">Testimonials</span>
                <h1 text="3xl gray-9 dark:white" class="font-bold">
                    What they say about us
                </h1>
            </div>
            <div
                class="grid md-grid-cols-3 lg-grid-cols-2 md-gap-6 relative">
                <div class="absolute -left-10 md-left-0 inset-y-0 w3/5 z0">
                    <img
                        src="/images/creative-agency-production.webp"
                        alt="woman write"
                        width="1800"
                        height="1800"
                        class="w-full h-full object-cover rd-2xl"
                    />
                </div>
                <div class="flex col-span-1"></div>
                <div class="w-full col-span-1 overflow-hidden md-col-span-2 lg-col-span-1 relative flex flex-col gap-8 z-[5] py10 md-py-14">
                    <div shadow="lg gray-2/40 dark:none" bg="white dark:gray-9" border="~ gray-2/50 dark:gray-8" class="h-auto rd-2xl">
                        <div clas="h-full">
                            <div class="flex gap-5 md-gap-6">
                                <div class="flex min-w-max">
                                    <img
                                        src="/images/sidebiew.webp"
                                        alt="Author Avatar"
                                        width="500"
                                        height="500"
                                        class="w20 h20 sm-w-28 sm-h-28 md-w-32 md-h-32 object-cover rd-2xl"
                                    />
                                </div>
                                <div p="4 sm:6 md:8 lg:10" class="flex flex-col gap-5">
                                    <div class="flex flex-col">
                                        <span text="xl md:2xl gray-8 dark:white" class="font-semibold">
                                            John Doe
                                        </span>
                                        <span text="gray-6 dark:gray-4">
                                            Ui Designer
                                        </span>
                                    </div>
                                    
                                    <div>
                                        <p  text="gray-7 dark:gray-3" class="line-clamp-5">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem non nemo vel corrupti ipsum corporis a, ea eligendi dolor accusantium dignissimos facilis suscipit magnam tenetur reprehenderit praesentium temporibus aspernatur. Rem!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex md-justify-end">
                        <div bg="white dark:gray-950" shadow="lg gray-2/30 dark:none" border="~ gray-2/40 dark:gray-8" class="flex items-center gap-4 w-max p1.5 rd-full">
                            <button aria-label="prev" text="gray-7 hover:blue-6 dark:gray-3 dark:hover:blue-6" bg="hover:blue-1 dark:hover:blue-1" class="outline-none transition p2 md-p2.5 rd-full bg-transparent">
                                <span i-carbon-arrow-left text-xl flex></span>                                  
                            </button>
                            <div class="flex w-max min-w-max items-center">
                                <div class="flex items-center gap-1 border-0 bg-transparent">
                                    <span class="cursor-pointer w4 h2 rd-full bg-blue-6 transition border-none"></span>
                                    <span bg="gray-4 dark:gray-8" class="cursor-pointer w2 h2 rd-full transition ease-linear border-none"></span>
                                    <span bg="gray-4 dark:gray-8" class="cursor-pointer w2 h2 rd-full transition ease-linear border-none"></span>
                                </div>
                            </div>
                            <button aria-label="next" text="gray-7 hover:blue-6 dark:gray-3 dark:hover:blue-6" bg="hover:blue-1 dark:hover:blue-1" class="outline-none transition p2 md-p2.5 rd-full bg-transparent">
                                <span i-carbon-arrow-right text-xl flex></span>                                  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ```
    :::
    :::tab-panel{id="testi2_2"}
    ```vue
    <template>
        <section py20>
            <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-16">
                <div class="space-y-4 max-w-2xl">
                    <span bg="blue-1 dark:gray-9" text="xs blue-8 dark:gray-1" class="rd-lg px2.5 py1 font-semibold tracking-wide">Testimonials</span>
                    <h1 text="3xl gray-9 dark:white" class="font-bold">
                        What they say about us
                    </h1>
                </div>
                <div
                    class="grid md-grid-cols-3 lg-grid-cols-2 md-gap-6 relative">
                    <div class="absolute -left-10 md-left-0 inset-y-0 w3/5 z0">
                        <img
                            src="/images/creative-agency-production.webp"
                            alt="woman write"
                            width="1800"
                            height="1800"
                            class="w-full h-full object-cover rd-2xl"
                        />
                    </div>
                    <div class="flex col-span-1"></div>
                    <div class="w-full col-span-1 overflow-hidden md-col-span-2 lg-col-span-1 relative flex flex-col gap-8 z-[5] py10 md-py-14">
                        <div shadow="lg gray-2/40 dark:none" bg="white dark:gray-9" border="~ gray-2/50 dark:gray-8" class="h-auto rd-2xl">
                            <div clas="h-full">
                                <div class="flex gap-5 md-gap-6">
                                    <div class="flex min-w-max">
                                        <img
                                            src="/images/sidebiew.webp"
                                            alt="Author Avatar"
                                            width="500"
                                            height="500"
                                            class="w20 h20 sm-w-28 sm-h-28 md-w-32 md-h-32 object-cover rd-2xl"
                                        />
                                    </div>
                                    <div p="4 sm:6 md:8 lg:10" class="flex flex-col gap-5">
                                        <div class="flex flex-col">
                                            <span text="xl md:2xl gray-8 dark:white" class="font-semibold">
                                                John Doe
                                            </span>
                                            <span text="gray-6 dark:gray-4">
                                                Ui Designer
                                            </span>
                                        </div>
                                        
                                        <div>
                                            <p  text="gray-7 dark:gray-3" class="line-clamp-5">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem non nemo vel corrupti ipsum corporis a, ea eligendi dolor accusantium dignissimos facilis suscipit magnam tenetur reprehenderit praesentium temporibus aspernatur. Rem!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex md-justify-end">
                            <div bg="white dark:gray-950" shadow="lg gray-2/30 dark:none" border="~ gray-2/40 dark:gray-8" class="flex items-center gap-4 w-max p1.5 rd-full">
                                <button aria-label="prev" text="gray-7 hover:blue-6 dark:gray-3 dark:hover:blue-6" bg="hover:blue-1 dark:hover:blue-1" class="outline-none transition p2 md-p2.5 rd-full bg-transparent">
                                    <span i-carbon-arrow-left text-xl flex></span>                                  
                                </button>
                                <div class="flex w-max min-w-max items-center">
                                    <div class="flex items-center gap-1 border-0 bg-transparent">
                                        <span class="cursor-pointer w4 h2 rd-full bg-blue-6 transition border-none"></span>
                                        <span bg="gray-4 dark:gray-8" class="cursor-pointer w2 h2 rd-full transition ease-linear border-none"></span>
                                        <span bg="gray-4 dark:gray-8" class="cursor-pointer w2 h2 rd-full transition ease-linear border-none"></span>
                                    </div>
                                </div>
                                <button aria-label="next" text="gray-7 hover:blue-6 dark:gray-3 dark:hover:blue-6" bg="hover:blue-1 dark:hover:blue-1" class="outline-none transition p2 md-p2.5 rd-full bg-transparent">
                                    <span i-carbon-arrow-right text-xl flex></span>                                  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
    :::tab-panel{id="testi2_3"}
    ```vue
    <template>
        <section py20>
            <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-16">
                <div class="space-y-4 max-w-2xl">
                    <span bg="blue-1 dark:gray-9" text="xs blue-8 dark:gray-1" class="rd-lg px2.5 py1 font-semibold tracking-wide">Testimonials</span>
                    <h1 text="3xl gray-9 dark:white" class="font-bold">
                        What they say about us
                    </h1>
                </div>
                <div
                    class="grid md-grid-cols-3 lg-grid-cols-2 md-gap-6 relative">
                    <div class="absolute -left-10 md-left-0 inset-y-0 w3/5 z0">
                        <img
                            src="/images/creative-agency-production.webp"
                            alt="woman write"
                            width="1800"
                            height="1800"
                            class="w-full h-full object-cover rd-2xl"
                        />
                    </div>
                    <div class="flex col-span-1"></div>
                    <div class="w-full col-span-1 overflow-hidden md-col-span-2 lg-col-span-1 relative flex flex-col gap-8 z-[5] py10 md-py-14">
                        <div shadow="lg gray-2/40 dark:none" bg="white dark:gray-9" border="~ gray-2/50 dark:gray-8" class="h-auto rd-2xl">
                            <div clas="h-full">
                                <div class="flex gap-5 md-gap-6">
                                    <div class="flex min-w-max">
                                        <img
                                            src="/images/sidebiew.webp"
                                            alt="Author Avatar"
                                            width="500"
                                            height="500"
                                            class="w20 h20 sm-w-28 sm-h-28 md-w-32 md-h-32 object-cover rd-2xl"
                                        />
                                    </div>
                                    <div p="4 sm:6 md:8 lg:10" class="flex flex-col gap-5">
                                        <div class="flex flex-col">
                                            <span text="xl md:2xl gray-8 dark:white" class="font-semibold">
                                                John Doe
                                            </span>
                                            <span text="gray-6 dark:gray-4">
                                                Ui Designer
                                            </span>
                                        </div>
                                        
                                        <div>
                                            <p  text="gray-7 dark:gray-3" class="line-clamp-5">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem non nemo vel corrupti ipsum corporis a, ea eligendi dolor accusantium dignissimos facilis suscipit magnam tenetur reprehenderit praesentium temporibus aspernatur. Rem!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex md-justify-end">
                            <div bg="white dark:gray-950" shadow="lg gray-2/30 dark:none" border="~ gray-2/40 dark:gray-8" class="flex items-center gap-4 w-max p1.5 rd-full">
                                <button aria-label="prev" text="gray-7 hover:blue-6 dark:gray-3 dark:hover:blue-6" bg="hover:blue-1 dark:hover:blue-1" class="outline-none transition p2 md-p2.5 rd-full bg-transparent">
                                    <span i-carbon-arrow-left text-xl flex></span>                                  
                                </button>
                                <div class="flex w-max min-w-max items-center">
                                    <div class="flex items-center gap-1 border-0 bg-transparent">
                                        <span class="cursor-pointer w4 h2 rd-full bg-blue-6 transition border-none"></span>
                                        <span bg="gray-4 dark:gray-8" class="cursor-pointer w2 h2 rd-full transition ease-linear border-none"></span>
                                        <span bg="gray-4 dark:gray-8" class="cursor-pointer w2 h2 rd-full transition ease-linear border-none"></span>
                                    </div>
                                </div>
                                <button aria-label="next" text="gray-7 hover:blue-6 dark:gray-3 dark:hover:blue-6" bg="hover:blue-1 dark:hover:blue-1" class="outline-none transition p2 md-p2.5 rd-full bg-transparent">
                                    <span i-carbon-arrow-right text-xl flex></span>                                  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
::