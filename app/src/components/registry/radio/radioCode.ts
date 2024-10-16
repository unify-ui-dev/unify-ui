import type { ComponentCode } from "@/types/index";

export const radioCode: ComponentCode = {
    'radio/Grouped':{
        lang:"html",
        name:"index.html", 
        code:`
<div class="b bdr-high p-4 rounded">
    <h3 class="text-gray-900 dark:text-gray-50">Contact Mode</h3>
    <div class="flex gap-x-3 text-sm items-start mt-4">
        <input type="radio" checked name="grouped_1" id="grouped_1_1" class="form-input-radio size-4 peer">
        <label for="grouped_1_1" class="text-body peer-disabled:op80 peer-disabled:pointer-events-none ">Email</label>
    </div>
    <div class="flex gap-x-3 text-sm items-start mt-2">
        <input type="radio" name="grouped_1" id="grouped_1_2" class="form-input-radio size-4 peer">
        <label for="grouped_1_2" class="text-body peer-disabled:op80 peer-disabled:pointer-events-none ">Phone (SMS)</label>
    </div>
    <div class="flex gap-x-3 text-sm items-start mt-2">
        <input type="radio" name="grouped_1" id="grouped_1_3" class="form-input-radio size-4 peer">
        <label for="grouped_1_3" class="text-body peer-disabled:op80 peer-disabled:pointer-events-none ">Push Notification</label>
    </div>
</div>
<div class="b bdr-high p-4 rounded">
    <h3 class="text-gray-900 dark:text-gray-50">Choose something</h3>
    <div class="flex gap-x-3 text-sm items-start mt-4">
        <input type="radio" checked name="grouped_2" id="grouped_2_1" class="form-input-radio size-4 peer">
        <label for="grouped_2_1" class="text-body peer-disabled:op80 peer-disabled:pointer-events-none ">ReactJS</label>
    </div>
    <div class="flex gap-x-3 text-sm items-start mt-2">
        <input type="radio" name="grouped_2" id="grouped_2_2" class="form-input-radio size-4 peer">
        <label for="grouped_2_2" class="text-body peer-disabled:op80 peer-disabled:pointer-events-none ">Angular</label>
    </div>
    <div class="flex gap-x-3 text-sm items-start mt-2">
        <input type="radio" name="grouped_2" id="grouped_2_2" class="form-input-radio size-4 peer">
        <label for="grouped_2_2" class="text-body peer-disabled:op80 peer-disabled:pointer-events-none ">vueJS</label>
    </div>
</div>`},
    
}