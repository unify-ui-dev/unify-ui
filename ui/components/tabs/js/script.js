import { Tabs } from "@flexilla/flexilla";

const tabsElements = Array.from(document.querySelectorAll("[data-tabs]"));

for (const tab of tabsElements) {
  new Tabs(tab);
}
