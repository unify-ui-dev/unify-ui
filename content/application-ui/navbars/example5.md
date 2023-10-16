---
title: Navbar 5
category: application-ui
subCategory: navbars
previewUrl: /navbars/5/
info: Require JS
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: nav5_
---
    :::tab-panel{id="nav5_1"}
    ```html
    <!-- copy this styles
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
            <div class="flex items-center min-w-max relative">
                <a href="#" class="font-semibold flex items-center gap-x-2">
                    <div class="flex items-center -space-x-3">
                        <span bg="blue-6 dark:blue-5" class="h6 aspect-square rd-full flex"></span>
                        <span bg="pink-6 dark:pink-4" class="h6 aspect-square blur rd-full flex"></span>
                    </div>
                    <span text="lg gray-7 dark:gray-3">Agency</span>
                </a>
            </div>

            <div data-navbar bg="white dark:gray-950 lg:!transparent" py="32 lg:0" px="5 sm:10 md:12 lg:0"
                class="fixed inset-x-0 h-[100dvh] lg-h-max top-0 -translate-y-10 op-0 invisible lg-visible  lg-translate-y-0 lg-op-100 left-0 w-full lg-top-0 lg-relative  lg-flex lg-justify-between duration-300 ease-linear">
                <ul text="gray-7 dark:gray-3"
                    class="flex flex-col lg-flex-row gap-6 lg-items-center lg-w-full lg-justify-center">
                    <li class="">
                        <a href="#"
                            class="relative py2.5 duration-300 ease-linear hover-text-blue-6">Solutions</a>
                    </li>
                    <li class="">
                        <a href="#"
                            class="relative py2.5 duration-300 ease-linear hover-text-blue-6">Company</a>
                    </li>
                    <li class="">
                        <a href="#"
                            class="relative py2.5 duration-300 ease-linear hover-text-blue-6">Plateform</a>
                    </li>
                    <li class="">
                        <a href="#"
                            class="relative py2.5 duration-300 ease-linear hover-text-blue-6">Resources</a>
                    </li>
                    <li class="">
                        <a href="#"
                            class="relative py2.5 duration-300 ease-linear hover-text-blue-6">Contact</a>
                    </li>
                </ul>
                <div
                    class="flex flex-col sm-flex-row sm-items-center gap-4  lg-min-w-max mt-10 lg-mt-0">
                    <a href="#" text="blue-6 hover:white dark:white" bg="hover:blue-7 dark:gray-900 dark:hover:gray-950" border="~ blue-6 dark:gray-8"
                        class="px6 py3 duration-300 ease-linear flex justify-center w-full sm-w-auto rd-xl">
                        Get It touch
                    </a>
                </div>
            </div>
            <div class="flex items-center lg-hidden">
                <button data-toggle-navbar data-is-open="false" border-l="~ blue-1 dark:l-gray-8"
                    class="outline-none pl-3 relative py-3 bg-transparent">
                    <span class="sr-only">Toggle navbar</span>
                    <div id="line-1" aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="h0.5 w6 rd transition duration-300">
                    </div>
                    <div id="line-2" aria-hidden="true" rd bg="gray-8 dark:gray-3"
                        class="mt2 h0.5 w6 transition duration-300"></div>
                </button>
            </div>
        </nav>
    </header>

    <!-- copy this script 
        <script>
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
        </script> 
    -->
    
    ```
    :::
    :::tab-panel{id="nav5_2"}
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
    </template>
    ```
    :::
    :::tab-panel{id="nav5_3"}
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
    </template>

    ```
    :::
::