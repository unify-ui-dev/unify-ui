import "./tab-content-menu"
import { Collapse, Tabs, Accordion, Modal, Dropdown } from "@flexilla/flexilla"
import { $$ } from "./selector"

const collaspses = $$("[data-fx-collapse]")


for (const collaspe of collaspses) {
    new Collapse(collaspe, {
        defaultState: "open"
    })
}

Modal.autoInit()
Tabs.autoInit('[data-tab-fx-site]')
Accordion.autoInit('[data-accordion]')
Dropdown.autoInit('[data-drop-down]')