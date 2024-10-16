import type { ComponentCode } from "@/types/index";

export const alertDialogCode: ComponentCode = {
    'alert-dialog/Default': {
        lang: "html",
        name: "index.html",
        code: `
<button
    data-modal-trigger
    data-modal-target="modal-message-def"
    class="btn btn-md text-white btn-solid btn-solid-primary rd-lg"
>
    Show Modal
</button>
<div
    data-fx-modal
    data-alert-dialog
    aria-hidden="true"
    data-modal-id="modal-message-def"
    data-modal-overlay="u-fx-overlay bg-gray-800/70 backdrop-filter backdrop-blur-3xl"
    class="items-start p-4 fixed hidden fx-open:flex w-screen h-screen top-0 left-0">
    <dialog
        data-modal-content
        data-enter-animation="fadeInScale .4s linear"
        data-exit-animation="fadeOutScale .1s linear"
        class="u-fx-animated-modal-content relative bg-body rd-lg overflow-hidden w-full max-w-xl p-8 flex flex-col gap-y-4 items-center ease-linear transition-all">
        <div class="w-max p-3 rd-full bg-gray-200 dark:bg-gray-800 text-sub-title">
           <span aria-hidden="true" class="flex i-ph-question text-xl"></span>
        </div>
        <h2 class="font-semibold text-xl text-title">Confirm your action</h2>
        <p class="text-body">
            Are you sure you want to proceed with this action?
        </p>
        <div class="flex justify-center gap-x-3 pt-4">
            <button class="btn btn-sm text-white btn-solid btn-solid-primary rd-md">
                Yes, Proceed
            </button>
            <button data-close-modal class="btn btn-sm btn-white rd-md">
                No, Cancel
            </button>
        </div>
    </dialog>
</div>
    `},

}