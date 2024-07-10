import { AutoResizeTextArea } from "@flexilla/flexilla";
const resizableTextAreas = Array.from(
  document.querySelectorAll("textarea[data-autoresizable]")
) as HTMLTextAreaElement[]

for (const resizableTextArea of resizableTextAreas) {
  new AutoResizeTextArea(resizableTextArea);
}
