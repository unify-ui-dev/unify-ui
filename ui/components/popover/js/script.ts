import { Tooltip } from "@flexilla/flexilla";


const tooltips = Array.from(document.querySelectorAll("[data-popover]")) as HTMLElement[];
for (const tooltip of tooltips) {
  new Tooltip(tooltip);
}


