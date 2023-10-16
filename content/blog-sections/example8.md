---
title: Blog section 8
category: marketing-ui
subCategory: blog-sections
previewUrl: /blog-sections/8/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: blg_sec8_
---
    :::tab-panel{id="blg_sec8_1"}
    ```html
    <section py20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-14">
            <div class="flex flex-col md-flex-row md-justify-between">
                <div text="center md:left" class="max-w-lg mx-auto md-mx-0">
                    <h2 text="3xl md:4xl xl:5xl blue-950 dark:gray-2" class="font-semibold leading-tight">From our latest Blog Post</h2>
                </div>
                <div class="">
                    <a href="#" bg="gray-1 dark:gray-9" text="blue-6 dark:gray-3" border="~ gray-2 dark:gray-8"
                        class="px5 py2.5 rd-md flex items-center gap-x-3">
                        See More
                        <span i-carbon-chevron-right text-md></span>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-1 sm-grid-cols-2 gap-6">
                <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                    <div class="w-full lg-w2/5 lg-h-full">
                        <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <a href="#" text="xl gray-9 dark:white" class="font-semibold">
                            The only way to write clean ReactJS Code like a pro
                        </a>
                        <p text="gray-7 dark:gray-3 sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                        </p>
                        <div class="flex items-center gap-x-4">
                            <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                            <div>
                                <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                <p text="sm gray-6 dark:gray-3">
                                    2 days ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                    <div class="w-full lg-w2/5 lg-h-full">
                        <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <a href="#" text="xl gray-9 dark:white" class="font-semibold">
                            The only way to write clean ReactJS Code like a pro
                        </a>
                        <p text="gray-7 dark:gray-3 sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                        </p>
                        <div class="flex items-center gap-x-4">
                            <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                            <div>
                                <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                <p text="sm gray-6 dark:gray-3">
                                    2 days ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                    <div class="w-full lg-w2/5 lg-h-full">
                        <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <a href="#" text="xl gray-9 dark:white" class="font-semibold">
                            The only way to write clean ReactJS Code like a pro
                        </a>
                        <p text="gray-7 dark:gray-3 sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                        </p>
                        <div class="flex items-center gap-x-4">
                            <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                            <div>
                                <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                <p text="sm gray-6 dark:gray-3">
                                    2 days ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                    <div class="w-full lg-w2/5 lg-h-full">
                        <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col space-y-6">
                        <a href="#" text="xl gray-9 dark:white" class="font-semibold">
                            The only way to write clean ReactJS Code like a pro
                        </a>
                        <p text="gray-7 dark:gray-3 sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                        </p>
                        <div class="flex items-center gap-x-4">
                            <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                            <div>
                                <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                <p text="sm gray-6 dark:gray-3">
                                    2 days ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ```
    :::
    :::tab-panel{id="blg_sec8_2"}
    ```vue
    <template>
        <section py20>
            <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-14">
                <div class="flex flex-col md-flex-row md-justify-between">
                    <div text="center md:left" class="max-w-lg mx-auto md-mx-0">
                        <h2 text="3xl md:4xl xl:5xl blue-950 dark:gray-2" class="font-semibold leading-tight">From our latest Blog Post</h2>
                    </div>
                    <div class="">
                        <a href="#" bg="gray-1 dark:gray-9" un-text="blue-6 dark:gray-3" border="~ gray-2 dark:gray-8"
                            class="px5 py2.5 rd-md flex items-center gap-x-3">
                            See More
                            <span i-carbon-chevron-right text-md></span>
                        </a>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm-grid-cols-2 gap-6">
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <a href="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </a>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <a href="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </a>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <a href="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </a>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <a href="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </a>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
    :::tab-panel{id="blg_sec8_3"}
    ```vue
    <template>
        <section py20>
            <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-14">
                <div class="flex flex-col md-flex-row md-justify-between">
                    <div text="center md:left" class="max-w-lg mx-auto md-mx-0">
                        <h2 text="3xl md:4xl xl:5xl blue-950 dark:gray-2" class="font-semibold leading-tight">From our latest Blog Post</h2>
                    </div>
                    <div class="">
                        <nuxt-link to="#" bg="gray-1 dark:gray-9" un-text="blue-6 dark:gray-3" border="~ gray-2 dark:gray-8"
                            class="px5 py2.5 rd-md flex items-center gap-x-3">
                            See More
                            <span i-carbon-chevron-right text-md></span>
                        </nuxt-link>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm-grid-cols-2 gap-6">
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <nuxt-link to="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </nuxt-link>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <nuxt-link to="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </nuxt-link>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <nuxt-link to="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </nuxt-link>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div bg="gray-1 dark:gray-9" border="~ gray-2/70 dark:gray-8/80" class="flex flex-col lg-flex-row gap-8 p5 rd-md">
                        <div class="w-full lg-w2/5 lg-h-full">
                            <img src="/images/sidebiew.webp" alt="post cover" width="1300" class="rd aspect-video lg-aspect-auto lg-h-full w-full object-cover">
                        </div>
                        <div class="flex-1 flex flex-col space-y-6">
                            <nuxt-link to="#" un-text="xl gray-9 dark:white" class="font-semibold">
                                The only way to write clean ReactJS Code like a pro
                            </nuxt-link>
                            <p text="gray-7 dark:gray-3 sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium temporibus debitis 
                            </p>
                            <div class="flex items-center gap-x-4">
                                <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd">
                                <div>
                                    <p text="gray-8 dark:gray-50" class="font-semibold">By John Doe</p>
                                    <p text="sm gray-6 dark:gray-3">
                                        2 days ago
                                    </p>
                                </div>
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