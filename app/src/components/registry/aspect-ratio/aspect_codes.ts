import type { ComponentCode } from "@/types/index";

export const aspectCode: ComponentCode = {
    'aspect-ratio/Square': {
        lang: "html",
        name: "index.html",
        code: `
<div class="w-4/5 aspect-ratio">
    <img src="/images/img2.webp" class="w-full h-full object-cover rd-lg" width="2400"
        alt="Image by Johnnathan Tshibangu">
</div>
    `},
    'aspect-ratio/Video-TV': {
        lang: "html",
        name: "index.html",
        code: `
<div class="w-4/5 aspect-video">
    <img src="/images/img2.webp" class="w-full h-full object-cover rd-lg" width="2400"
        alt="Image by Johnnathan Tshibangu">
</div>
    `},
    'aspect-ratio/35mmfilm': {
        lang: "html",
        name: "index.html",
        code: `
<div class="w-4/5 aspect-35mm-film">
    <img src="/images/img2.webp" class="w-full h-full object-cover rd-lg" width="2400"
        alt="Image by Johnnathan Tshibangu">
</div>
    `},
    'aspect-ratio/StandardTV': {
        lang: "html",
        name: "index.html",
        code: `
<div class="w-4/5 aspect-standard-tv">
    <img src="/images/img2.webp" class="w-full h-full object-cover rd-lg" width="2400"
        alt="Image by Johnnathan Tshibangu">
</div>
    `},
    'aspect-ratio/UltrawideMonitor': {
        lang: "html",
        name: "index.html",
        code: `
<div class="w-4/5 aspect-ultrawide">
    <img src="/images/img2.webp" class="w-full h-full object-cover rd-lg" width="2400"
        alt="Image by Johnnathan Tshibangu">
</div>
    `},
}