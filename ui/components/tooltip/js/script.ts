import { Tooltip } from "@flexilla/flexilla";

const tooltips = Array.from(document.querySelectorAll("[data-tooltip]")) as HTMLElement[];
for (const tooltip of tooltips) {
  new Tooltip(tooltip);
}
