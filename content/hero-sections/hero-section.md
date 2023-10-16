---
title: Agency Hero
category: marketing-ui
subCategory: hero-sections
previewUrl: /hero-sections/hero-section/
info: This section can be used for ......
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: hero7_
---
    :::tab-panel{id="hero7_1"}
    ```html
    <!-- add this styles 
        button[data-toggle-navbar][data-is-open="true"] #line-1 {
            transform: rotate(45deg) translateY(0.375rem);
        }

        button[data-toggle-navbar][data-is-open="true"] #line-2 {
            transform: rotate(-45deg) translateY(-0.375rem);
        }
    -->

    <header
        class="absolute left-0 top-0 w-full flex items-center h24 z40">
        <nav px="5 sm:10 md:12 lg:5"
            class="relative mx-auto lg-max-w-7xl w-full flex gap-x-5 justify-between items-center">
            <div class="flex items-center min-w-max">
                <a href="#" class="font-semibold flex items-center gap-x-2">
                    <div class="flex items-center -space-x-3">
                        <span bg="purple-6 dark:purple-5" class="h6 aspect-square rd-full flex"></span>
                        <span bg="violet-6 dark:violet-4" class="h6 aspect-square blur rd-full flex"></span>
                    </div>
                    <span text="lg gray-7 dark:gray-3">Agency</span>
                </a>
            </div>

            <div data-navbar bg="white dark:gray-950 lg:!transparent" border-b="~ border-gray-2 dark:gray-8 lg:none" py="8 lg:0" px="5 sm:10 md:12 lg:0"
                class="absolute top-17 translate-y-10 op-0 invisible lg-visible  lg-translate-y-0 lg-op-100 left-0 w-full h-[calc(100dvh-68px)] lg-h-max lg-w-max lg-space-x-16 lg-top-0 lg-relative  lg-flex duration-300 lg-transition-none ease-linear">
                <ul text="gray-7 dark:gray-3"
                    class="flex flex-col lg-flex-row gap-6 lg-items-center lg-w-full lg-justify-center">
                    <li>
                        <a href="#"
                            class="px2 py2.5 transition-colors hover-text-purple-6">Portfolio</a>
                    </li>
                    <li>
                        <a href="#" class="px2 py2.5 transition-colors hover-text-purple-6">Company</a>
                    </li>
                    <li>
                        <a href="#" class="px2 py2.5 transition-colors hover-text-purple-6">Products</a>
                    </li>
                    <li>
                        <a href="#"
                            class="px2 py2.5 transition-colors hover-text-purple-6">Resources</a>
                    </li>
                </ul>
                <div  class="flex flex-col sm-flex-row sm-items-center gap-4  lg-min-w-max mt10 lg-mt0">
                    <a href="#" bg="gray-1 dark:gray-9" text="purple-6 dark:gray-3" border="~ gray-2 dark:gray-8"
                        class="flex items-center justify-center w-full sm-w-auto h12 px6 rd-full">
                        Get It touch
                    </a>
                </div>
            </div>
            <div class="flex items-center lg-hidden">
                <button data-toggle-navbar data-is-open="false" border-l="~ purple-1 dark:gray-8"
                    class="outline-none pl-3 relative py-3 bg-transparent" aria-label="toggle navbar">
                    <div id="line-1" aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="h0.5 w6 rd transition duration-300">
                    </div>
                    <div id="line-2" aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="mt2 h0.5 w6 rd transition duration-300"></div>
                </button>
            </div>
        </nav>
    </header>
    <section class="min-h-max bg-white dark-bg-gray-950">
        <div class="absolute top-0 inset-x-0 h64 flex items-start">
            <div
                class="h24 w-2/3 bg-gradient-to-br from-purple-5 op-20 blur-2xl dark-from-purple-7 dark-invisible dark-op-40">
            </div>
            <div
                class="h20 w-3/5 bg-gradient-to-r from-blue-6 op-40 blur-2xl dark:from-purple-7 dark-op-40">
            </div>
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-6 to-violet-4 rd-full op-50 blur-2xl">
        </div>
        <div px="5 sm:10 md:12 lg:5"
            class="relative mx-auto pt32 pb24 lg-max-w-7xl w-full text-center space-y-10">
            <h1 text="gray-9 dark:white 4xl/tight sm:5xl/tight lg:6xl/tight xl:7xl/tight" 
                class="mx-auto max-w-5xl font-bold">
                We create, we design, we develop Modern tools.
            </h1>
            <p text="gray-7 dark:gray-3" class="mx-auto max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum
                asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
            </p>
            <div class="flex justify-center items-center flex-wrap mx-auto gap-4">
                <a href="#"
                    class="flex items-center h12 px6 rd-full bg-purple-6 text-white border border-purple-600">
                    Hire us Now
                </a>
                <a href="#" bg="gray-1 dark:gray-9" text="purple-7 dark:gray-3" border="~ gray-2 dark:gray-8"
                    class="flex items-center h12 px6 rd-full">
                    Learn more
                </a>
            </div>
            <div border="~ gray-1 dark:gray-8" divide="gray-3 dark:gray-8"
                class="text-left grid lg-grid-cols-3 p6 rd-2xl bg-gradient-to-tr from-gray-50 to-gray-2 dark-from-gray-9 dark-to-gray-8 max-w-2xl lg:max-w-5xl mx-auto lg-divide-x divide-y lg-divide-y-0">
                <div class="flex items-start gap-6 lg-pr-6 pb-6 lg-pb-0">
                    <div class="w10">
                        <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                            class="p3 rd-xl flex w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w6 h6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                            </svg>
                        </span>
                    </div>
                    <div class="flex-1 space-y-1">
                        <h2 text="lg gray-9 dark:white" class="font-semibold">
                            High Quality
                        </h2>
                        <p text="sm gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                    <div class="w-10">
                        <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                            class="p3 rd-xl flex w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w6 h6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </span>
                    </div>
                    <div class="flex-1 space-y-1">
                        <h2 text="lg gray-9 dark:white" class="font-semibold">
                            High Quality
                        </h2>
                        <p text="sm gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                    <div class="w-10">
                        <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                            class="p3 rd-xl flex w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w6 h6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                            </svg>
                        </span>
                    </div>
                    <div class="flex-1 space-y-1">
                        <h2 text="lg gray-9 dark:white" class="font-semibold">
                            High Quality
                        </h2>
                        <p text="sm gray-7 dark:gray-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <!-- add script
        const btnHumb = document.querySelector("[data-toggle-navbar]")
        const navbar = document.querySelector("[data-navbar]")
        if (btnHumb && navbar) {
            const toggleBtnAttr = () => {
                const isOpen = btnHumb.getAttribute("data-is-open")
                btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
                if (isOpen === "false") {
                    document.body.classList.toggle("overflow-y-auto")
                } else {
                    document.body.classList.add("overflow-y-auto")
                }
            }
            btnHumb.addEventListener("click", () => {
                navbar.classList.toggle("invisible")
                navbar.classList.toggle("op-0")
                navbar.classList.toggle("translate-y-10")
                toggleBtnAttr()
            })
        }
    -->
    ```
    :::
    :::tab-panel{id="hero7_2"}
    ```vue
    <script setup>
    import { ref } from 'vue'

    const navIsOpen = ref(false)
    const navItems = [
        {
            id:1,
            text:"Portfolio",
            href:"/",
        },
        {
            id:2,
            text:"Company",
            href:"/",
        },
        {
            id:3,
            text:"Products",
            href:"/",
        },
        {
            id:4,
            text:"Ressources",
            href:"/",
        }
    ]

    function toggleNavBar(){
        navIsOpen.value = !navIsOpen.value
        document.body.classList.toggle("overflow-y-auto")
    }
    </script>
    <template>
        <header
            class="absolute left-0 top-0 w-full flex items-center h24 z40">
            <nav px="5 sm:10 md:12 lg:5"
                class="relative mx-auto lg-max-w-7xl w-full flex gap-x-5 justify-between items-center">
                <div class="flex items-center min-w-max">
                    <router-link to="#" class="font-semibold flex items-center gap-x-2">
                        <div class="flex items-center -space-x-3">
                            <span bg="purple-6 dark:purple-5" class="h6 aspect-square rd-full flex"></span>
                            <span bg="violet-6 dark:violet-4" class="h6 aspect-square blur rd-full flex"></span>
                        </div>
                        <span text="lg gray-7 dark:gray-3">Agency</span>
                    </router-link>
                </div>

                <div bg="white dark:gray-950 lg:!transparent" border-b="~ border-gray-2 dark:gray-8 lg:none" py="8 lg:0" px="5 sm:10 md:12 lg:0"
                    class="absolute top-17 left-0 w-full h-[calc(100dvh-68px)] lg-h-max lg-w-max lg-space-x-16 lg-top-0 lg-relative  lg-flex duration-300 lg-transition-none ease-linear"
                    :class="navIsOpen?'translate-y-0 op-100 visible':'translate-y-10 op-0 invisible lg-visible  lg-translate-y-0 lg-op-100'">
                    <ul text="gray-7 dark:gray-3"
                        class="flex flex-col lg-flex-row gap-6 lg-items-center lg-w-full lg-justify-center">
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <router-link :to="navItem.href"  class="px2 py2.5 transition-colors hover-text-purple-6">
                                {{navItem.text}}
                            </router-link>
                        </li>
                    </ul>
                    <div  class="flex flex-col sm-flex-row sm-items-center gap-4  lg-min-w-max mt10 lg-mt0">
                        <router-link to="#" class="bg-gray-1 dark-bg-gray-9 text-purple-6 dark-text-gray-3 border border-gray-2 dark-border-gray-8 flex items-center justify-center w-full sm-w-auto h12 px6 rd-full">
                            Get It touch
                        </router-link>
                    </div>
                </div>
                <div class="flex items-center lg-hidden">
                    <button @click="toggleNavBar()" border-l="~ purple-1 dark:gray-8"
                        class="outline-none pl-3 relative py-3 bg-transparent" aria-label="toggle navbar">
                        <div id="line-1" aria-hidden="true" bg="gray-8 dark:gray-3"
                            class="h0.5 w6 rd transition duration-300" :class="navIsOpen ? 'rotate-45 translate-y-1.5' : ''">
                        </div>
                        <div id="line-2" aria-hidden="true" bg="gray-8 dark:gray-3"
                            class="mt2 h0.5 w6 rd transition duration-300" :class="navIsOpen ? '-rotate-45 -translate-y-1.5' : ''"></div>
                    </button>
                </div>
            </nav>
        </header>
        <section class="min-h-max bg-white dark-bg-gray-950">
            <div class="absolute top-0 inset-x-0 h64 flex items-start">
                <div
                    class="h24 w-2/3 bg-gradient-to-br from-purple-5 op-20 blur-2xl dark-from-purple-7 dark-invisible dark-op-40">
                </div>
                <div
                    class="h20 w-3/5 bg-gradient-to-r from-blue-6 op-40 blur-2xl dark:from-purple-7 dark-op-40">
                </div>
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-6 to-violet-4 rd-full op-50 blur-2xl">
            </div>
            <div px="5 sm:10 md:12 lg:5"
                class="relative mx-auto pt32 pb24 lg-max-w-7xl w-full text-center space-y-10">
                <h1 text="gray-9 dark:white 4xl/tight sm:5xl/tight lg:6xl/tight xl:7xl/tight" 
                    class="mx-auto max-w-5xl font-bold">
                    We create, we design, we develop Modern tools.
                </h1>
                <p text="gray-7 dark:gray-3" class="mx-auto max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum
                    asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
                </p>
                <div class="flex justify-center items-center flex-wrap mx-auto gap-4">
                    <router-link to="#"
                        class="flex items-center h12 px6 rd-full bg-purple-6 text-white border border-purple-600">
                        Hire us Now
                    </router-link>
                    <router-link to="#" class="bg-gray-1 dark-bg-gray-9 border border-gray-2 dark-border-gray-8 flex items-center h12 px6 rd-full text-purple-7 dark-text-gray-3">
                        Learn more
                    </router-link>
                </div>
                <div border="~ gray-1 dark:gray-8" divide="gray-3 dark:gray-8"
                    class="text-left grid lg-grid-cols-3 p6 rd-2xl bg-gradient-to-tr from-gray-50 to-gray-2 dark-from-gray-9 dark-to-gray-8 max-w-2xl lg:max-w-5xl mx-auto lg-divide-x divide-y lg-divide-y-0">
                    <div class="flex items-start gap-6 lg-pr-6 pb-6 lg-pb-0">
                        <div class="w10">
                            <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                                class="p3 rd-xl flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex-1 space-y-1">
                            <h2 text="lg gray-9 dark:white" class="font-semibold">
                                High Quality
                            </h2>
                            <p text="sm gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div class="w10">
                            <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                                class="p3 rd-xl flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex-1 space-y-1">
                            <h2 text="lg gray-9 dark:white" class="font-semibold">
                                High Quality
                            </h2>
                            <p text="sm gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div class="w-10">
                            <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                                class="p3 rd-xl flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex-1 space-y-1">
                            <h2 text="lg gray-9 dark:white" class="font-semibold">
                                High Quality
                            </h2>
                            <p text="sm gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
    :::tab-panel{id="hero7_3"}
    ```vue
    <script setup>
    const navIsOpen = useState('navIsOpen', ()=>false)

    const navItems = [
        {
            id:1,
            text:"Portfolio",
            href:"/",
        },
        {
            id:2,
            text:"Company",
            href:"/",
        },
        {
            id:3,
            text:"Products",
            href:"/",
        },
        {
            id:4,
            text:"Ressources",
            href:"/",
        }
    ]

    function toggleNavBar(){
        navIsOpen.value = !navIsOpen.value
        document.body.classList.toggle("overflow-y-auto")
    }
    </script>
    <template>
        <header
            class="absolute left-0 top-0 w-full flex items-center h24 z40">
            <nav px="5 sm:10 md:12 lg:5"
                class="relative mx-auto lg-max-w-7xl w-full flex gap-x-5 justify-between items-center">
                <div class="flex items-center min-w-max">
                    <nuxt-link to="#" class="font-semibold flex items-center gap-x-2">
                        <div class="flex items-center -space-x-3">
                            <span bg="purple-6 dark:purple-5" class="h6 aspect-square rd-full flex"></span>
                            <span bg="violet-6 dark:violet-4" class="h6 aspect-square blur rd-full flex"></span>
                        </div>
                        <span text="lg gray-7 dark:gray-3">Agency</span>
                    </nuxt-link>
                </div>

                <div bg="white dark:gray-950 lg:!transparent" border-b="~ border-gray-2 dark:gray-8 lg:none" py="8 lg:0" px="5 sm:10 md:12 lg:0"
                    class="absolute top-17 left-0 w-full h-[calc(100dvh-68px)] lg-h-max lg-w-max lg-space-x-16 lg-top-0 lg-relative  lg-flex duration-300 lg-transition-none ease-linear"
                    :class="navIsOpen?'translate-y-0 op-100 visible':'translate-y-10 op-0 invisible lg-visible  lg-translate-y-0 lg-op-100'">
                    <ul text="gray-7 dark:gray-3"
                        class="flex flex-col lg-flex-row gap-6 lg-items-center lg-w-full lg-justify-center">
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <nuxt-link :to="navItem.href"  class="px2 py2.5 transition-colors hover-text-purple-6">
                                {{navItem.text}}
                            </nuxt-link>
                        </li>
                    </ul>
                    <div  class="flex flex-col sm-flex-row sm-items-center gap-4  lg-min-w-max mt10 lg-mt0">
                        <nuxt-link to="#" class="bg-gray-1 dark-bg-gray-9 text-purple-6 dark-text-gray-3 border border-gray-2 dark-border-gray-8 flex items-center justify-center w-full sm-w-auto h12 px6 rd-full">
                            Get It touch
                        </nuxt-link>
                    </div>
                </div>
                <div class="flex items-center lg-hidden">
                    <button @click="toggleNavBar()" border-l="~ purple-1 dark:gray-8"
                        class="outline-none pl-3 relative py-3 bg-transparent" aria-label="toggle navbar">
                        <div id="line-1" aria-hidden="true" bg="gray-8 dark:gray-3"
                            class="h0.5 w6 rd transition duration-300" :class="navIsOpen ? 'rotate-45 translate-y-1.5' : ''">
                        </div>
                        <div id="line-2" aria-hidden="true" bg="gray-8 dark:gray-3"
                            class="mt2 h0.5 w6 rd transition duration-300" :class="navIsOpen ? '-rotate-45 -translate-y-1.5' : ''"></div>
                    </button>
                </div>
            </nav>
        </header>
        <section class="min-h-max bg-white dark-bg-gray-950">
            <div class="absolute top-0 inset-x-0 h64 flex items-start">
                <div
                    class="h24 w-2/3 bg-gradient-to-br from-purple-5 op-20 blur-2xl dark-from-purple-7 dark-invisible dark-op-40">
                </div>
                <div
                    class="h20 w-3/5 bg-gradient-to-r from-blue-6 op-40 blur-2xl dark:from-purple-7 dark-op-40">
                </div>
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-6 to-violet-4 rd-full op-50 blur-2xl">
            </div>
            <div px="5 sm:10 md:12 lg:5"
                class="relative mx-auto pt32 pb24 lg-max-w-7xl w-full text-center space-y-10">
                <h1 text="gray-9 dark:white 4xl/tight sm:5xl/tight lg:6xl/tight xl:7xl/tight" 
                    class="mx-auto max-w-5xl font-bold">
                    We create, we design, we develop Modern tools.
                </h1>
                <p text="gray-7 dark:gray-3" class="mx-auto max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum
                    asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
                </p>
                <div class="flex justify-center items-center flex-wrap mx-auto gap-4">
                    <nuxt-link to="#"
                        class="flex items-center h12 px6 rd-full bg-purple-6 text-white border border-purple-600">
                        Hire us Now
                    </nuxt-link>
                    <nuxt-link to="#" class="bg-gray-1 dark-bg-gray-9 border border-gray-2 dark-border-gray-8 flex items-center h12 px6 rd-full text-purple-7 dark-text-gray-3">
                        Learn more
                    </nuxt-link>
                </div>
                <div border="~ gray-1 dark:gray-8" divide="gray-3 dark:gray-8"
                    class="text-left grid lg-grid-cols-3 p6 rd-2xl bg-gradient-to-tr from-gray-50 to-gray-2 dark-from-gray-9 dark-to-gray-8 max-w-2xl lg:max-w-5xl mx-auto lg-divide-x divide-y lg-divide-y-0">
                    <div class="flex items-start gap-6 lg-pr-6 pb-6 lg-pb-0">
                        <div class="w10">
                            <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                                class="p3 rd-xl flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex-1 space-y-1">
                            <h2 text="lg gray-9 dark:white" class="font-semibold">
                                High Quality
                            </h2>
                            <p text="sm gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div class="w10">
                            <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                                class="p3 rd-xl flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex-1 space-y-1">
                            <h2 text="lg gray-9 dark:white" class="font-semibold">
                                High Quality
                            </h2>
                            <p text="sm gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div class="w-10">
                            <span bg="gray-2 dark:gray-8" text="gray-8 dark:gray-2"
                                class="p3 rd-xl flex w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex-1 space-y-1">
                            <h2 text="lg gray-9 dark:white" class="font-semibold">
                                High Quality
                            </h2>
                            <p text="sm gray-7 dark:gray-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </template>
    ```
    :::
::