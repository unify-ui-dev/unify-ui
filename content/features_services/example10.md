---
title: Features & Services 10
category: marketing-ui
subCategory: features
previewUrl: /features_services/10/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: feat10_
---
    :::tab-panel{id="feat10_1"}
    ```html
    <section py-20>
      <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
        <div class="flex flex-col gap-5">
          <div class="space-y-4 max-w-xl">
            <span bg="blue-50 dark:gray-9" text="xs blue-7 dark:gray-1"
              class="rd-lg px2.5 py1 font-semibold tracking-wide">Feature</span>
            <h1 text="3xl md:4xl xl:5xl blue-950 dark:gray-2" class="font-semibold leading-tight">Let's us help you
              growing your busines</h1>
          </div>
          <p text="gray-700 dark:gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</p>
        </div>
        <div class="mt16 flex flex-col md-flex-row gap-8 xl-gap-10">
          <div class="md-w-96 lg-w-[26rem] space-y-5 flex flex-col md:py-6">
            <div before:rd-md space-y-3
              before="absolute content-empty transition-all ease-linear scale-x-105 scale-y-110 inset-0 bg-gray-1 dark:bg-gray-9"
              class="cursor-pointer relative p3">
              <h2 text="xl gray-9 dark:white" class="font-semibold relative">
                All in one tool
              </h2>
              <p text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
              </p>
            </div>
            <div
              before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9"
              class="cursor-pointer relative p3 space-y-3">
              <h2 text="xl gray-9 dark:white" class="font-semibold relative">
                Cross plateforme app
              </h2>
              <p text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
              </p>
            </div>
            <div
              before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9"
              class="cursor-pointer relative p3 space-y-3">
              <h2 class="text-xl font-semibold text-gray9 dark-text-white relative">
                Croud based app
              </h2>
              <p text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
              </p>
            </div>
            <div
              before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9"
              class="cursor-pointer relative p3 space-y-3">
              <h2 class="text-xl font-semibold text-gray9 dark-text-white relative">
                All in one tool
              </h2>
              <p text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
              </p>
            </div>

          </div>
          <div class="flex-1 md-h-auto">
            <div class="flex-1 relative bg-gradient-to-tr from-sky-1 to-indigo-3 
                            p6 rd-lg aspect-[4/2.4] md-aspect-auto md-h-full overflow-hidden">
              <img src="/images/dash-light.webp" alt="illustration" width="1800" class="wfull hauto">
            </div>
          </div>
        </div>
      </div>
    </section>
    ```
    :::
    :::tab-panel{id="feat10_2"}
    ```vue
    <section py-20>
      <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
        <div class="flex flex-col gap-5">
          <div class="space-y-4 max-w-xl">
              <span bg="blue-50 dark:gray-9" text="xs blue-7 dark:gray-1" class="rd-lg px2.5 py1 font-semibold tracking-wide">Feature</span>
              <h1 text="3xl md:4xl xl:5xl blue-950 dark:gray-2" class="font-semibold leading-tight">Let's us help you growing your busines</h1>
          </div>
          <p text="gray-700 dark:gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
              elit.</p>
      </div>
        <div class="mt16 flex flex-col md-flex-row gap-8 xl-gap-10">
          <div class="md-w-96 lg-w-[26rem] space-y-5 flex flex-col md:py-6">
            <div space-y-3 un-before="absolute rd-md content-empty transition-all ease-linear scale-x-105 scale-y-110 inset-0 bg-gray-1 dark:bg-gray-9" class="cursor-pointer relative p3">
              <h2 text="xl gray-9 dark:white" class="font-semibold relative">
                All in one tool
              </h2>
              <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim 
              </p>
            </div>
            <div un-before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9" class="cursor-pointer relative p3 space-y-3">
              <h2 text="xl gray-9 dark:white" class="font-semibold relative">
                Cross plateforme app
              </h2>
              <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim 
              </p>
            </div>
            <div un-before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9" class="cursor-pointer relative p3 space-y-3">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white relative">
                Croud based app
              </h2>
              <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim 
              </p>
            </div>
            <div un-before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9" class="cursor-pointer relative p3 space-y-3">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white relative">
                All in one tool
              </h2>
              <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim 
              </p>
            </div>
            
          </div>
          <div class="flex-1 md-h-auto">
            <div class="flex-1 relative bg-gradient-to-tr from-sky-1 to-indigo-3 
                            p6 rd-lg aspect-[4/2.4] md-aspect-auto md-h-full overflow-hidden">
              <img src="/images/dash-light.webp" alt="illustration" width="1800" class="wfull hauto">
            </div>
          </div>
        </div>
      </div>
    </section>
    ```
    :::
    :::tab-panel{id="feat10_3"}
    ```vue
    <template>
    <section py-20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
        <div class="flex flex-col gap-5">
            <div class="space-y-4 max-w-xl">
            <span bg="blue-50 dark:gray-9" text="xs blue-7 dark:gray-1"
                class="rd-lg px2.5 py1 font-semibold tracking-wide">Feature</span>
            <h1 text="3xl md:4xl xl:5xl blue-950 dark:gray-2" class="font-semibold leading-tight">Let's us help you growing
                your busines</h1>
            </div>
            <p text="gray-700 dark:gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</p>
        </div>
        <div class="mt16 flex flex-col md-flex-row gap-8 xl-gap-10">
            <div class="md-w-96 lg-w-[26rem] space-y-5 flex flex-col md:py-6">
            <div space-y-3
                un-before="absolute rd-md content-empty transition-all ease-linear scale-x-105 scale-y-110 inset-0 bg-gray-1 dark:bg-gray-9"
                class="cursor-pointer relative p3">
                <h2 text="xl gray-9 dark:white" class="font-semibold relative">
                All in one tool
                </h2>
                <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
                </p>
            </div>
            <div
                un-before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9"
                class="cursor-pointer relative p3 space-y-3">
                <h2 text="xl gray-9 dark:white" class="font-semibold relative">
                Cross plateforme app
                </h2>
                <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
                </p>
            </div>
            <div
                un-before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9"
                class="cursor-pointer relative p3 space-y-3">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white relative">
                Croud based app
                </h2>
                <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
                </p>
            </div>
            <div
                un-before="absolute content-empty transition-all rd-md hover:ease-linear hover:scale-x-105 scale-y-110 inset-0 hover:bg-gray-100 dark:hover:bg-gray-9"
                class="cursor-pointer relative p3 space-y-3">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white relative">
                All in one tool
                </h2>
                <p un-text="sm gray-7 dark:gray-3" class="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut hic sunt quam enim
                </p>
            </div>

            </div>
            <div class="flex-1 md-h-auto">
            <div class="flex-1 relative bg-gradient-to-tr from-sky-1 to-indigo-3 
                                p6 rd-lg aspect-[4/2.4] md-aspect-auto md-h-full overflow-hidden">
                <img src="/images/dash-light.webp" alt="illustration" width="1800" class="wfull hauto">
            </div>
            </div>
        </div>
        </div>
    </section>
    </template>
    ```
    :::
::