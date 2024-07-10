import "./tab-content-menu"
import { Collapse, Tabs } from "@flexilla/flexilla"
import { $$ } from "./selector"

const collaspses = $$("[data-fx-collapse]")

for (const collaspe of collaspses) {
    new Collapse(collaspe, {
        defaultState: "open"
    })
}

Tabs.autoInit('[data-tab-fx-site]')