---
title: Navbar 6
category: application-ui
subCategory: navbars
previewUrl: /navbars/6/
info: Require JS
---

::unify-tab
---
items : ["html", "vue", "nuxt"]
initial_: nav6_
---
    :::tab-panel{id="nav6_1"}
    ```html
    <!-- copy this styles
        button[data-toggle-navbar][data-is-open="true"] #line-1 {
            transform: rotate(45deg) translateY(0.375rem);
        }

        button[data-toggle-navbar][data-is-open="true"] #line-2 {
            transform: rotate(-45deg) translateY(-0.375rem);
        }
    -->
    <div data-nav-overlay aria-hidden="true" class="fixed bg-gray-8/40 inset-0 z-30 hidden lg:hidden"></div>
    <header sticky left-0 top-0 w-full flex items-center h20 bg="white dark:gray-950" 
        border-b="~ gray-2 dark:gray-7" z40>
        <nav relative mx-auto max-w-7xl w-full px="5 sm:10 md:12 lg:5" flex gap-x-5 justify-between items-center>
            <div aria-hidden="true" class="w-full flex items-center lg-hidden">
                <button data-toggle-navbar data-is-open="false" border-r="~ gray-2 dark:gray-8" outline-none bg-transparent relative py3 pr3>
                    <span class="sr-only">Toggle navbar</span>
                    <div id="line-1" aria-hidden="true" h0.5 w6 rd  transition duration-300 bg="gray-8 dark:gray-2"></div>
                    <div id="line-2" aria-hidden="true" mt2 h0.5 w6 rd transition duration-300 bg="gray-8 dark:gray-2"></div>
                </button>
            </div>
            <div data-navbar absolute lg-relative lg-flex w-full top-full lg-top-0 left-0 bg="white  dark:gray-950 lg:transparent dark:lg:transparent"  border-b="~ gray-2 dark:gray-8 lg:0" ease-linear duration-300 
            class="invisible op0 lg-visible lg-op-100">
                <ul px="5 sm:10 md:12 lg:0" flex flex-col lg:flex-row lg:items-center  py="4 lg:0" gap="y-6 lg:x-5" text="gray-7 dark:gray-3">
                    <li>
                        <a href="#" relative py3 after="absolute content-empty bottom-0 left-0 h0.5 rd-lg bg-gray-6 w4">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#"  relative py3 after="absolute content-empty bottom-0 left-0 h0.5 rd-lg bg-transparent w4">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#" relative py-3 after="absolute content-empty bottom-0 left-0 h0.5 rd-lg bg-transparent w4">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#" relative py-3 after="absolute content-empty bottom-0 left-0 h0.5 rd-lg bg-transparent w4">
                            About
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center flex-1">
                <a href="#" text="gray-8 dark:gray-2" class="flex items-center gap-x-0.5">
                    <span bg="gray-7 dark:gray-8" text-white px4 py1.5 rd-lg>R</span>
                    <span aria-hidden="true" class="hidden sm-flex">doe</span>
                </a>
            </div>
            <div flex justify-end items-center gap-x="1.5 sm:2" w-full text="gray-7 dark:gray-3">
                <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                    <span class="sr-only">facebook</span>
                    <span i-carbon-logo-facebook flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                </a>
                <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                    <span class="sr-only">Instagram</span>
                    <span i-carbon-logo-instagram flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                </a>
                <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                    <span class="sr-only">Twitter</span>
                    <span i-carbon-logo-twitter flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                </a>
                <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                    <span class="sr-only">github</span>
                    <span i-carbon-logo-github flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                </a>
            </div>
        </nav>
    </header>
    <!-- copy this script 
    <script>
        const btnHumb = document.querySelector("[data-toggle-navbar]")
        const navbar = document.querySelector("[data-navbar]")
        const overlay = document.querySelector("[data-nav-overlay]")
        if (btnHumb && navbar) {
            const toggleBtnAttr = () => {
                const isOpen = btnHumb.getAttribute("data-is-open")
                btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
                if (isOpen === "false") {
                    document.body.classList.remove("overflow-y-auto")
                    overlay.classList.toggle("hidden")
                } else {
                    document.body.classList.add("overflow-y-auto")
                    overlay.classList.add("hidden")
                }
            }
            btnHumb.addEventListener("click", () => {
                navbar.classList.toggle("invisible")
                navbar.classList.toggle("op0")
                toggleBtnAttr()
            })

            overlay.addEventListener("click", () => {
                navbar.classList.add("invisible")
                navbar.classList.add("op0")
                toggleBtnAttr()
            })
        }
    </script> 
    -->
    
    ```
    :::
    :::tab-panel{id="nav6_2"}
    ```vue
    <script setup>
    import { ref } from 'vue'

    const navIsOpen = ref(false)

    const navItems = [
        {
            id:1,
            text:"Home",
            isActive:true,
            href:"#"
        },
        {
            id:2,
            text:"Portfolio",
            isActive:false,
            href:"#"
        },
        {
            id:3,
            text:"Blog",
            isActive:false,
            href:"#"
        },
        {
            id:4,
            text:"About",
            isActive:false,
            href:"#"
        }
    ]

    function toggleNavBar(){
        navIsOpen.value = !navIsOpen.value
        document.body.classList.toggle("overflow-y-auto")
    }

    function closeNavBar(){
        navIsOpen.value = false
        document.body.classList.add("overflow-y-auto")
    }
    </script>
    <template>
        <div @click="closeNavBar()" aria-hidden="true" class="fixed bg-gray-8/40 inset-0 z-30" :class="navIsOpen ? 'flex lg-hidden' : 'hidden'"></div>
        <header sticky left-0 top-0 w-full flex items-center h20 bg="white dark:gray-950" 
            border-b="~ gray-2 dark:gray-7" z40>
            <nav relative mx-auto max-w-7xl w-full px="5 sm:10 md:12 lg:5" flex gap-x-5 justify-between items-center>
                <div aria-hidden="true" class="w-full flex items-center lg-hidden">
                    <button @click="toggleNavBar()" aria-label="toggle navbar" border-r="~ gray-2 dark:gray-8" outline-none bg-transparent relative py3 pr3>
                        <div aria-hidden="true" h0.5 w6 rd  transition duration-300 bg="gray-8 dark:gray-2" :class="navIsOpen ? 'rotate-45 translate-y-1.5' : ''"></div>
                        <div aria-hidden="true" mt2 h0.5 w6 rd transition duration-300 bg="gray-8 dark:gray-2" :class="navIsOpen ? '-rotate-45 -translate-y-1.5' : ''"></div>
                    </button>
                </div>
                <div absolute lg-relative lg-flex w-full top-full lg-top-0 left-0 bg="white  dark:gray-950 lg:transparent dark:lg:transparent"  border-b="~ gray-2 dark:gray-8 lg:0" ease-linear duration-300 
                :class="navIsOpen ? 'visible op100' : 'invisible op0 lg-visible lg-op-100'">
                    <ul px="5 sm:10 md:12 lg:0" flex flex-col lg:flex-row lg:items-center  py="4 lg:0" gap="y-6 lg:x-5" text="gray-7 dark:gray-3">
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <router-link v-if="navItem.isActive" :to="navItem.href" class="relative py3 after-absolute after-content-empty after-bottom-0 after-left-0 after-h0.5 after-rd-lg after-bg-gray-6 after-w4">
                                {{navItem.text}}
                            </router-link>
                            <router-link v-else="navItem.hasDropDown" :to="navItem.href" class="relative py3 after-absolute before-content-empty before-bottom-0 before-left-0 before-h0.5 before-rd-lg before-bg-transparent before-w4">
                                {{navItem.text}}
                            </router-link>
                        </li> 
                    </ul>
                </div>
                <div class="flex items-center flex-1">
                    <router-link to="/" class="text-gray-8 dark-text-gray-2 flex items-center gap-x-0.5">
                        <span bg="gray-7 dark:gray-8" text-white px4 py1.5 rd-lg>R</span>
                        <span aria-hidden="true" class="hidden sm-flex">doe</span>
                    </router-link>
                </div>
                <div flex justify-end items-center gap-x="1.5 sm:2" w-full text="gray-7 dark:gray-3">
                    <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">facebook</span>
                        <span i-carbon-logo-facebook flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </a>
                    <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">Instagram</span>
                        <span i-carbon-logo-instagram flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </a>
                    <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">Twitter</span>
                        <span i-carbon-logo-twitter flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </a>
                    <a href="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">github</span>
                        <span i-carbon-logo-github flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </a>
                </div>
            </nav>
        </header>
    </template>
    ```
    :::
    :::tab-panel{id="nav6_3"}
    ```vue
    <script setup>
    const navIsOpen = useState('navIsOpen', ()=>false)
    const navItems = [
        {
            id:1,
            text:"Home",
            isActive:true,
            href:"#"
        },
        {
            id:2,
            text:"Portfolio",
            isActive:false,
            href:"#"
        },
        {
            id:3,
            text:"Blog",
            isActive:false,
            href:"#"
        },
        {
            id:4,
            text:"About",
            isActive:false,
            href:"#"
        }
    ]

    function toggleNavBar(){
        navIsOpen.value = !navIsOpen.value
        document.body.classList.toggle("overflow-y-auto")
    }

    function closeNavBar(){
        navIsOpen.value = false
        document.body.classList.add("overflow-y-auto")
    }
    </script>
    <template>
        <div @click="closeNavBar()" aria-hidden="true" class="fixed bg-gray-8/40 inset-0 z-30" :class="navIsOpen ? 'flex lg-hidden' : 'hidden'"></div>
        <header sticky left-0 top-0 w-full flex items-center h20 bg="white dark:gray-950" 
            border-b="~ gray-2 dark:gray-7" z40>
            <nav relative mx-auto max-w-7xl w-full px="5 sm:10 md:12 lg:5" flex gap-x-5 justify-between items-center>
                <div aria-hidden="true" class="w-full flex items-center lg-hidden">
                    <button @click="toggleNavBar()" aria-label="toggle navbar" border-r="~ gray-2 dark:gray-8" outline-none bg-transparent relative py3 pr3>
                        <div aria-hidden="true" h0.5 w6 rd  transition duration-300 bg="gray-8 dark:gray-2" :class="navIsOpen ? 'rotate-45 translate-y-1.5' : ''"></div>
                        <div aria-hidden="true" mt2 h0.5 w6 rd transition duration-300 bg="gray-8 dark:gray-2" :class="navIsOpen ? '-rotate-45 -translate-y-1.5' : ''"></div>
                    </button>
                </div>
                <div absolute lg-relative lg-flex w-full top-full lg-top-0 left-0 bg="white  dark:gray-950 lg:transparent dark:lg:transparent"  border-b="~ gray-2 dark:gray-8 lg:0" ease-linear duration-300 
                :class="navIsOpen ? 'visible op100' : 'invisible op0 lg-visible lg-op-100'">
                    <ul px="5 sm:10 md:12 lg:0" flex flex-col lg:flex-row lg:items-center  py="4 lg:0" gap="y-6 lg:x-5" text="gray-7 dark:gray-3">
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <nuxt-link v-if="navItem.isActive" :to="navItem.href" class="relative py3 after-absolute after-content-empty after-bottom-0 after-left-0 after-h0.5 after-rd-lg after-bg-gray-6 after-w4">
                                {{navItem.text}}
                            </nuxt-link>
                            <nuxt-link v-else="navItem.hasDropDown" :to="navItem.href" class="relative py3 after-absolute before-content-empty before-bottom-0 before-left-0 before-h0.5 before-rd-lg before-bg-transparent before-w4">
                                {{navItem.text}}
                            </nuxt-link>
                        </li> 
                    </ul>
                </div>
                <div class="flex items-center flex-1">
                    <nuxt-link to="/" class="text-gray-8 dark-text-gray-2 flex items-center gap-x-0.5">
                        <span bg="gray-7 dark:gray-8" text-white px4 py1.5 rd-lg>R</span>
                        <span aria-hidden="true" class="hidden sm-flex">doe</span>
                    </nuxt-link>
                </div>
                <div flex justify-end items-center gap-x="1.5 sm:2" w-full text="gray-7 dark:gray-3">
                    <nuxt-link to="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">facebook</span>
                        <span i-carbon-logo-facebook flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">Instagram</span>
                        <span i-carbon-logo-instagram flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">Twitter</span>
                        <span i-carbon-logo-twitter flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank" duration-200 ease-linear hover="text-gray-8 dark:text-gray-2">
                        <span class="sr-only">github</span>
                        <span i-carbon-logo-github flex p3 sm-p3.5 bg="gray-8 dark:gray-2"></span>
                    </nuxt-link>
                </div>
            </nav>
        </header>
    </template>
    ```
    :::
::