import { OffCanvas } from "@flexilla/flexilla";

const slideOvers = Array.from(document.querySelectorAll("[data-slideover]")) as HTMLElement[];

for (const slideover of slideOvers) {
  new OffCanvas(slideover);
}
