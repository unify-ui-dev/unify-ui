import { Dropdown } from "@flexilla/flexilla";

const dropdowns = Array.from(document.querySelectorAll("[data-drop-down]")) as HTMLElement[]
for (const dropdown of dropdowns) {
  new Dropdown(dropdown);
}
