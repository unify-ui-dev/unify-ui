---
title: About 3
category: marketing-ui
subCategory: content
previewUrl: /content/about-3/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: cont3_
---
    :::tab-panel{id="cont3_1"}
    ```html
    <section class="py24">
        <div class="max-w-7xl mx-auto px-5 sm-px10 md-px12 lg-px5 flex flex-col md-flex-row gap-16">
            <div class="flex md-flex-1">
                <img src="/images/creative-agency-production.webp" alt="creative agency " width="1300" class="wfull md-hfull object-cover rd-lg">
            </div>
            <div class="md-w-1/2 space-y-12 text-gray7 dark-text-gray-3 md-py8">
                <h1 class="text-gray9 dark-text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                    We help drive your business forward faster
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
                </p>
                <div class="grid gap6 sm-grid-cols-2">
                    <a href="tel:+243" class="flex gap-x-6 items-start">
                        <span class="p3 md-p3.5 rd-md bg-gray9 dark-bg-gray1 text-gray2 dark:text-gray8 flex w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w6 h6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                              </svg>                              
                        </span>
                        <div class="space-y-0.5 flex flex-col flex-1">
                            <p class="text-foreground">Call us</p>
                            <p class="font-semibold text-gray9 dark-text-white text-lg">+243 xx xx xx xxx</p>
                        </div>
                    </a>
                    <a href="mailto:" class="flex gap-x-6 items-start">
                        <span class="p3 md-p3.5 rd-md bg-gray9 dark-bg-gray1 text-gray2 dark:text-gray8 flex w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w6 h6">
                                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>                              
                        </span>
                        <div class="space-y-0.5 flex flex-col flex-1">
                            <p class="text-foreground">Send us a mail</p>
                            <p class="font-semibold text-gray9 dark-text-white text-lg">+243 xx xx xx xxx</p>
                        </div>
                    </a>
                </div>
                <div class="flex">
                    <a href="#" class="px5 h11 flex items-center bg-gray9 dark-bg-gray1 rd-lg text-white dark-text-gray-9">
                        Know more
                    </a>
                </div>
            </div>
        </div>
    </section>
    ```
    :::
    :::tab-panel{id="cont3_2"}
    ```vue
    <template>
        <section class="py24">
            <div class="max-w-7xl mx-auto px-5 sm-px10 md-px12 lg-px5 flex flex-col md-flex-row gap-16">
                <div class="flex md-flex-1">
                    <img src="/images/creative-agency-production.webp" alt="creative agency " width="1300" class="wfull md-hfull object-cover rd-lg">
                </div>
                <div class="md-w-1/2 space-y-12 text-gray7 dark-text-gray-3 md-py8">
                    <h1 class="text-gray9 dark-text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                        We help drive your business forward faster
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
                    </p>
                    <div class="grid gap6 sm-grid-cols-2">
                        <a href="tel:+243" class="flex gap-x-6 items-start">
                            <span class="p3 md-p3.5 rd-md bg-gray9 dark-bg-gray1 text-gray2 dark:text-gray8 flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w6 h6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>                              
                            </span>
                            <div class="space-y-0.5 flex flex-col flex-1">
                                <p class="text-foreground">Call us</p>
                                <p class="font-semibold text-gray9 dark-text-white text-lg">+243 xx xx xx xxx</p>
                            </div>
                        </a>
                        <a href="mailto:" class="flex gap-x-6 items-start">
                            <span class="p3 md-p3.5 rd-md bg-gray9 dark-bg-gray1 text-gray2 dark:text-gray8 flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w6 h6">
                                    <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>                              
                            </span>
                            <div class="space-y-0.5 flex flex-col flex-1">
                                <p class="text-foreground">Send us a mail</p>
                                <p class="font-semibold text-gray9 dark-text-white text-lg">+243 xx xx xx xxx</p>
                            </div>
                        </a>
                    </div>
                    <div class="flex">
                        <a href="#" class="px5 h11 flex items-center bg-gray9 dark-bg-gray1 rd-lg text-white dark-text-gray-9">
                            Know more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
    :::tab-panel{id="cont3_3"}
    ```vue
    <template>
        <section class="py24">
            <div class="max-w-7xl mx-auto px-5 sm-px10 md-px12 lg-px5 flex flex-col md-flex-row gap-16">
                <div class="flex md-flex-1">
                    <img src="/images/creative-agency-production.webp" alt="creative agency " width="1300" class="wfull md-hfull object-cover rd-lg">
                </div>
                <div class="md-w-1/2 space-y-12 text-gray7 dark-text-gray-3 md-py8">
                    <h1 class="text-gray9 dark-text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                        We help drive your business forward faster
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
                    </p>
                    <div class="grid gap6 sm-grid-cols-2">
                        <nuxt-link to="tel:+243" class="flex gap-x-6 items-start">
                            <span class="p3 md-p3.5 rd-md bg-gray9 dark-bg-gray1 text-gray2 dark:text-gray8 flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w6 h6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>                              
                            </span>
                            <div class="space-y-0.5 flex flex-col flex-1">
                                <p class="text-foreground">Call us</p>
                                <p class="font-semibold text-gray9 dark-text-white text-lg">+243 xx xx xx xxx</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="mailto:" class="flex gap-x-6 items-start">
                            <span class="p3 md-p3.5 rd-md bg-gray9 dark-bg-gray1 text-gray2 dark:text-gray8 flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w6 h6">
                                    <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>                              
                            </span>
                            <div class="space-y-0.5 flex flex-col flex-1">
                                <p class="text-foreground">Send us a mail</p>
                                <p class="font-semibold text-gray9 dark-text-white text-lg">+243 xx xx xx xxx</p>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="flex">
                        <nuxt-link to="#" class="px5 h11 flex items-center bg-gray9 dark-bg-gray1 rd-lg text-white dark-text-gray-9">
                            Know more
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
::