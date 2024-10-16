import type { ComponentCode } from "@/types/index";

export const popoverCode: ComponentCode = {
    'popover/Default':{
        lang:"html",
        name:"index.html", 
        code:`
<div data-popover data-placement="bottom" data-trigger-strategy="click" id="test1" class="relative">
    <button data-fx-tooltip-trigger aria-controls="popper"
        class="btn btn-md btn-white ease-linear rd-lg relative">
        Trigger Popover
    </button>
    <div aria-labelledby="popper" data-fx-popper
        class="u-fx-popper w-60 p-4 bg-high rd-md invisible op0 fx-open:visible fx-open:op100">
        <div class="flex h-40 rounded bg-high">

        </div>
    </div>
</div>
<div data-popover data-placement="top" data-trigger-strategy="click" id="test2" class="relative">
    <button data-fx-tooltip-trigger aria-controls="popper"
        class="btn btn-md btn-white ease-linear rd-lg relative">
        Open Top
    </button>
    <div aria-labelledby="popper" data-fx-popper
        class="u-fx-popper w-60 p-4 bg-high rd-md invisible op0 fx-open:visible fx-open:op100">
        <div class="flex h-40 rounded bg-high">

        </div>
    </div>
</div>
<div data-popover data-placement="left" data-trigger-strategy="click" id="test3" class="relative">
    <button data-fx-tooltip-trigger data-placement="left" aria-controls="popper"
        class="btn btn-md btn-white ease-linear rd-lg relative">
        Open Left
    </button>
    <div aria-labelledby="popper" data-fx-popper
        class="u-fx-popper w-60 p-4 bg-high rd-md invisible op0 fx-open:visible fx-open:op100">
        <div class="flex h-40 rounded bg-high">

        </div>
    </div>
</div>
<div data-popover data-placement="right" data-trigger-strategy="click" id="test4" class="relative">
    <button data-fx-tooltip-trigger data-placement="right" aria-controls="popper"
        class="btn btn-md btn-white ease-linear rd-lg relative">
        Open Right
    </button>
    <div aria-labelledby="popper" data-fx-popper
        class="u-fx-popper w-60 p-4 bg-high rd-md invisible op0 fx-open:visible fx-open:op100">
        <div class="flex h-40 rounded bg-high">

        </div>
    </div>
</div>`
    },
    
}