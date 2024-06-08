import { Accordion } from "@flexilla/flexilla";

const accordions = Array.from(document.querySelectorAll("[data-accordion]"));

for (const accordion of accordions) {
  new Accordion(accordion);
}
