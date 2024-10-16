import type { ComponentCode } from "@/types/index";

export const progressCode: ComponentCode = {
    'progress/WithMessage':{
        lang:"html",
        name:"index.html", 
        code:`
<div>
    <progress max="10" value="4" class="progress-bar progress-bar-bg-gray progress-bar-rd-full progress-bar-md text-secondary600"></progress>
    <div class="flex justify-end text-right">
        <span class="text-secondary-600 text-sm">Installing ...</span>
    </div>
</div>
<div class="flex items-center gap-x-6">
    <progress max="10" value="6" class="progress-bar progress-bar-bg-gray progress-bar-rd-full progress-bar-md text-primary600"></progress>
    <div class="text-sm text-body">
        60%
    </div>
</div>
<div class="flex items-center gap-x-6">
    <progress max="10" value="3" class="progress-bar progress-bar-bg-gray progress-bar-rd-full progress-bar-md text-danger600"></progress>
    <div class="text-sm text-white bg-danger-600 rd-full size-5 flex items-center justify-center">
        <span aria-hidden="true" class="flex i-ph-x text-xs"></span>
    </div>
</div>
<div class="flex items-center gap-x-6">
    <progress max="10" value="10" class="progress-bar progress-bar-bg-gray progress-bar-rd-full progress-bar-md text-success600"></progress>
    <div class="text-sm text-white bg-success-600 rd-full size-5 flex items-center justify-center">
        <span aria-hidden="true" class="flex i-ph-check text-xs"></span>
    </div>
</div>`},
    
}