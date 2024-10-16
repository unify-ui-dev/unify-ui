import type { ComponentCode } from "@/types/index";
import { getFullCodeAlert } from "./baseVariants";

export const alertCode: ComponentCode = {
    'alert/Default': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-outline border rd-md py4 pr4 pl3 flex items-start gap-x2">
    <div class="flex">
        <span aria-hidden="true" class="flex i-ph-warning"></span>
    </div>
    <div class="flex-1">
        <p class="text-body">
            You can add components to your app using the cli.
        </p>
    </div>
</div>
    `},
    'alert/WithTitle': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-outline border rd-md py4 pr4 pl3 flex items-start gap-x2">
    <div class="flex">
        <span aria-hidden="true" class="flex i-ph-info"></span>
    </div>
    <div class="flex-1">
        <h3 class="font-medium text-title">
            Alert with title
          </h3>
        <p class="text-body">
            You can add components to your app using the cli.
        </p>
    </div>
</div>  
    `},
    'alert/WithoutIcon': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-outline border rd-md py4 pr4 pl3 flex items-start gap-x2">
    <div class="flex">
        <span aria-hidden="true" class="flex i-ph-info"></span>
    </div>
    <div class="flex-1">
        <h3 class="font-medium text-title">
            Alert with title
          </h3>
        <p class="text-body">
            You can add components to your app using the cli.
        </p>
    </div>
</div> 
    `},
    'alert/Outline': {
        lang: "html",
        name: "index.html",
        code: getFullCodeAlert("outline")
    },
    'alert/Solid': {
        lang: "html",
        name: "index.html",
        code: getFullCodeAlert("solid")
    },
    'alert/Soft': {
        lang: "html",
        name: "index.html",
        code: getFullCodeAlert("soft")
    },
    'alert/Subtle': {
        lang: "html",
        name: "index.html",
        code: getFullCodeAlert("subtle")
    },
    'alert/CustomExample1': {
        lang: "html",
        name: "index.html",
        code: `
<div class="ui-soft rd-md p-4 flex items-start gap-x-4 wfull">
    <div class="w-max">
        <span class="flex text-lg i-ph-info-fill"></span>
    </div>
    <div class="flex-1 space-y-3">
        <p>
            The data export you requested is ready!
        </p>
        <div>
            <button class="btn btn-sm btn-white rd-md" aria-label="Trigger Modal Show Data">
                View the Data
            </button>
        </div>
    </div>
</div>`
    },
}