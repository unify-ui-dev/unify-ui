import type { ComponentCode } from "@/types/index";

export const tabsCode: ComponentCode = {
    'tabs/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div data-fx-tabs data-tabs role="tab" class="wfull">
    <ul data-tab-list role="tablist"
        class="flex items-center relative h-12 px-px bg-nm w-full rd-md">
        <li role="presentation" class="flex">
            <a href="#tab1" data-tabs-trigger data-target="tab1" aria-controls="tab1" tabindex="0"
                class="px-4 py-2 rd text-body disabled:cursor-not-allowed disabled:op80 fx-active-bg-high outline outline-1 outline-transparent focus:outline-primary-500 dark:focus:outline-primary-400">
                Tab 1
            </a>
        </li>
        <li role="presentation" class="flex">
            <a href="#tab2" data-tabs-trigger data-target="tab2" aria-controls="tab2" tabindex="-1"
                class="px-4 py-2 rd text-body disabled:cursor-not-allowed disabled:op80 fx-active-bg-high outline outline-1 outline-transparent focus:outline-primary-500 dark:focus:outline-primary-400">
                Tab2
            </a>
        </li>
        <li role="presentation" class="flex">
            <a href="#tab3" data-tabs-trigger data-target="tab3" aria-controls="tab3" tabindex="-1"
                class="px-4 py-2 rd text-body disabled:cursor-not-allowed disabled:op80 fx-active-bg-high outline outline-1 outline-transparent focus:outline-primary-500 dark:focus:outline-primary-400">
                Tab3
            </a>
        </li>
    </ul>
    <div data-panels-container>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2"
            data-tab-panel id="tab1" aria-labelledby="tab1">
            Tab 1 Content
        </section>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2"
            data-tab-panel id="tab2" aria-labelledby="tab2">
            Tab 2 Content
        </section>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2"
            data-tab-panel id="tab3" aria-labelledby="tab3">
            Tab 3 Content
        </section>
    </div>
</div>`},
    'tabs/Vertical':{
        lang:"html",
        name:"index.html", 
        code:`
<div data-fx-tabs data-tabs data-orientation="vertical" role="tab" class="flex items-start w-full">
    <ul data-tab-list role="tablist"
        class="flex flex-col p-0.5 w-max relative bg-nm rd-md">
        <li role="presentation" class="flex">
            <a href="#tab1" data-tabs-trigger data-target="tab1" aria-controls="tab1" tabindex="0"
                class="px-4 py-2 rd fx-active-bg-high text-body disabled:cursor-not-allowed disabled:op80 relative w-full">
                Tab 1
            </a>
        </li>
        <li role="presentation" class="flex">
            <a href="#tab2" data-tabs-trigger data-target="tab2" aria-controls="tab2" tabindex="-1"
                class="px-4 py-2 rd fx-active-bg-high text-body disabled:cursor-not-allowed disabled:op80 relative w-full">
                Tab2
            </a>
        </li>
        <li role="presentation" class="flex">
            <a href="#tab3" data-tabs-trigger data-target="tab3" aria-controls="tab3" tabindex="-1"
                class="px-4 py-2 rd fx-active-bg-high text-body disabled:cursor-not-allowed disabled:op80 relative w-full">
                Tab3
            </a>
        </li>
    </ul>
    <div data-panels-container class="flex-1">
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md ml-2"
            data-tab-panel id="tab1" aria-labelledby="tab1">
            Tab 1 Content
        </section>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md ml-2"
            data-tab-panel id="tab2" aria-labelledby="tab2">
            Tab 2 Content
        </section>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md ml-2"
            data-tab-panel id="tab3" aria-labelledby="tab3">
            Tab 3 Content
        </section>
    </div>
</div>`},
    'tabs/TriggerIcon':{
        lang:"html",
        name:"index.html", 
        code:`
<div data-fx-tabs data-tabs data-indicator-class-name="u-fx-tabs-indicator flex bg-high rd" role="tab">
    <div data-tab-list-wrapper class="w-full p-0.5 bg-nm rd-lg">
        <ul data-tab-list role="tablist" class="flex items-center relative  w-full rd-md">
            <li role="presentation" class="flex">
                <a href="#tab1" data-tabs-trigger data-target="settingTab" aria-controls="settingTab"
                    tabindex="0"
                    class="px-4 py-2 flex items-center gap-x-2 rd text-body disabled:cursor-not-allowed disabled:op80 relative z-20">
                    <span aria-hidden="true" class="flex text-lg i-ph-gear"></span>
                    Setting
                </a>
            </li>
            <li role="presentation" class="flex">
                <a href="#tab2" data-tabs-trigger data-target="billingTab" aria-controls="billingTab"
                    tabindex="-1"
                    class="px-4 py-2 flex items-center gap-x-2 rd text-body disabled:cursor-not-allowed disabled:op80 relative z-20">
                    <span aria-hidden="true" class="flex text-lg i-ph-money"></span>
                    Billing
                </a>
            </li>
            <li role="presentation" class="flex">
                <a href="#tab3" data-tabs-trigger data-target="accountTab" aria-controls="accountTab"
                    tabindex="-1"
                    class="px-4 py-2 flex items-center gap-x-2 rd text-body disabled:cursor-not-allowed disabled:op80 relative z-20">
                    <span aria-hidden="true" class="flex text-lg i-ph-user"></span>
                    Account
                </a>
            </li>
        </ul>
    </div>
    <div data-panels-container>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2"
            data-tab-panel id="settingTab" aria-label="settingTab">
            Setting tab Content
        </section>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2"
            data-tab-panel id="billingTab" aria-labelledby="billingTab">
            Billing Tab Content
        </section>
        <section role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 h-40 p-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2"
            data-tab-panel id="accountTab" aria-labelledby="accountTab">
            Account Tab Content
        </section>
    </div>
</div>`},
    'tabs/TabsWithForm':{
        lang:"html",
        name:"index.html", 
        code:`
<div data-fx-tabs data-tabs data-indicator-class-name="u-fx-tabs-indicator flex bg-high rd absolute top-0 left-0" role="tab" class="mx-auto wfull max-w-lg">
    <div data-tab-list-wrapper class="flex w-full p-0.5 bg-nm rd-md">
        <ul data-tab-list role="tablist"
            class="flex items-center relative w-full">
            <li role="presentation" class="flex flex-1">
                <a href="#accountTab" data-tabs-trigger data-target="accountTab"
                    aria-controls="accountTab" tabindex="0"
                    class="px-4 py-2 rd flex-1 flex items-center justify-center text-body disabled:cursor-not-allowed disabled:op80 relative">
                    Account
                </a>
            </li>
            <li role="presentation" class="flex flex-1">
                <a href="#passTab" data-tabs-trigger data-target="passTab" aria-controls="passTab"
                    tabindex="-1"
                    class="px-4 py-2 rd flex-1 flex items-center justify-center text-body disabled:cursor-not-allowed disabled:op80 relative">
                    Password
                </a>
            </li>
        </ul>
    </div>
    <div data-panels-container>
        <form role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 p-6 md:p-10 divide-y divide-gray-200 dark:divide-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2 bg-white dark:bg-gray-950 flex-col"
            data-tab-panel id="accountTab" aria-labelledby="accountTab">
            <div class="space-y-1.5 pb-6 md:pb-8">
                <h3
                    class="text-2xl font-semibold leading-none tracking-tight text-title">
                    Account</h3>
                <p class="text-sm text-body">Make changes to your account here.
                    Click save
                    when you're done.</p>
            </div>
            <div class="py-6 md:py-8 space-y-4">
                <div class="flex flex-col w-full space-y-2">
                    <label for="user_email"
                        class="text-sm text-sub-body">Email</label>
                    <input type="email" id="user_email" name="user_email"
                        placeholder="johndoe@gmail.com"
                        class="form-input form-input-md form-input-bordered bg-body rd-md">
                </div>
                <div class="flex flex-col w-full space-y-2">
                    <label for="user_name"
                        class="text-sm text-sub-body">Username</label>
                    <input type="text" id="user_name" name="user_name" placeholder="@doedoe"
                        class="form-input form-input-md form-input-bordered bg-body rd-md">
                </div>
            </div>
            <div class="flex items-center pt-6 md:pt-8">
                <button class="rd-md btn btn-md btn-solid btn-solid-neutral">
                    Save changes
                </button>
            </div>
        </form>
        <form role="tabpanel" tabindex="0"
            class="hidden fx-active-flex ring-offset-gray-950 p-6 md:p-10 divide-y divide-gray-200 dark:divide-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-500 focus-visible:ring-offset-2 border border-gray-200 dark:border-gray-800 rd-md mt-2 bg-white dark:bg-gray-950 flex-col"
            data-tab-panel id="passTab" aria-labelledby="passTab">
            <div class="space-y-1.5 pb-6 md:pb-8">
                <h3
                    class="text-2xl font-semibold leading-none tracking-tight text-title">
                    Password</h3>
                <p class="text-sm text-body">Change your password here. After
                    saving, you'll be logged out.</p>
            </div>
            <div class="py-6 md:py-8 space-y-4">
                <div class="flex flex-col w-full space-y-2">
                    <label for="currentPassword"
                        class="text-sm text-sub-body">Current Password</label>
                    <input type="password" id="currentPassword" name="currentPassword"
                        class="form-input form-input-md form-input-bordered bg-body rd-md">
                </div>
                <div class="flex flex-col w-full space-y-2">
                    <label for="new_password" class="text-sm text-sub-body">New
                        Password</label>
                    <input type="password" id="new_password" name="new_password" class="form-input form-input-md form-input-bordered bg-body rd-md">
                </div>
            </div>
            <div class="flex items-center pt-6 md:pt-8">
                <button class="btn btn-md btn-solid btn-solid-neutral rd-md">
                    Save changes
                </button>
            </div>
        </form>
    </div>
</div>`},
}