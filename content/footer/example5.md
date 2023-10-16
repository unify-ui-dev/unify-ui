---
title: Footer 5
category: marketing-ui
subCategory: footer
previewUrl: /footer/5/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: foot5_
---
    :::tab-panel{id="foot5_1"}
    ```html
    <footer text="gray-7 dark:gray-3" class="px5 py2">
        <div bg="gray-1 dark:gray-9" border="~ gray-2 dark:gray-8" class="max-w-7xl mx-auto px6 py4 md-py3 flex flex-col md-flex-row items-center md-justify-between gap-8 md-gap-14 rd-3xl">
            <div class="md-flex-1">
                <a href="#">
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-tr from-blue-8 to-indigo-4 font-bold text-2xl">U</span>
                    Unify-Ui
                </a>
            </div>
            <nav>
                <ul class="flex flex-wrap items-center justify-center gap-6">
                    <li>
                        <a href="#" text="hover:blue-6 dark:hover:blue-5" class="duration-200">Home</a>
                    </li>
                    <li>
                        <a href="#" text="hover:blue-6 dark:hover:blue-5" class="duration-200">About</a>
                    </li>
                    <li>
                        <a href="#" text="hover:blue-6 dark:hover:blue-5" class="duration-200">Services</a>
                    </li>
                </ul>
            </nav>
            <div class="md-flex-1 flex justify-center md-justify-end gap-3">
                <a href="#" aria-label="social link">
                    <span i-carbon-logo-twitter text-2xl flex></span>
                </a>
                <a href="#" aria-label="social link">
                    <span i-carbon-logo-linkedin text-2xl flex></span>
                </a>
                <a href="#" aria-label="social link">
                    <span i-carbon-logo-instagram text-2xl flex></span>
                </a>
                <a href="#" aria-label="social link">
                    <span i-carbon-logo-facebook text-2xl flex></span>
                </a>
            </div>
        </div>
    </footer>
    ```
    :::
    :::tab-panel{id="foot5_2"}
    ```vue
    <template>
        <footer un-text="gray-7 dark:gray-3" class="px5 py2">
            <div bg="gray-1 dark:gray-9" un-border="~ gray-2 dark:gray-8" class="max-w-7xl mx-auto px6 py4 md-py3 flex flex-col md-flex-row items-center md-justify-between gap-8 md-gap-14 rd-3xl">
                <div class="md-flex-1">
                    <a href="#">
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-tr from-blue-8 to-indigo-4 font-bold text-2xl">U</span>
                        Unify-Ui
                    </a>
                </div>
                <nav>
                    <ul class="flex flex-wrap items-center justify-center gap-6">
                        <li>
                            <a href="#" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">Home</a>
                        </li>
                        <li>
                            <a href="#" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">About</a>
                        </li>
                        <li>
                            <a href="#" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">Services</a>
                        </li>
                    </ul>
                </nav>
                <div class="md-flex-1 flex justify-center md-justify-end gap-3">
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-twitter text-2xl flex></span>
                    </a>
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-linkedin text-2xl flex></span>
                    </a>
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-instagram text-2xl flex></span>
                    </a>
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-facebook text-2xl flex></span>
                    </a>
                </div>
            </div>
        </footer>
    </template>
    ```
    :::
    :::tab-panel{id="foot5_3"}
    ```vue
    <template>
        <footer un-text="gray-7 dark:gray-3" class="px5 py2">
            <div bg="gray-1 dark:gray-9" un-border="~ gray-2 dark:gray-8" class="max-w-7xl mx-auto px6 py4 md-py3 flex flex-col md-flex-row items-center md-justify-between gap-8 md-gap-14 rd-3xl">
                <div class="md-flex-1">
                    <nuxt-link to="#">
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-tr from-blue-8 to-indigo-4 font-bold text-2xl">U</span>
                        Unify-Ui
                    </nuxt-link>
                </div>
                <nav>
                    <ul class="flex flex-wrap items-center justify-center gap-6">
                        <li>
                            <nuxt-link to="#" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">About</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">Services</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <div class="md-flex-1 flex justify-center md-justify-end gap-3">
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-twitter text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-linkedin text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-instagram text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-facebook text-2xl flex></span>
                    </nuxt-link>
                </div>
            </div>
        </footer>
    </template>
    ```
    :::
::