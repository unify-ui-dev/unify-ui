import type { ComponentCode } from "@/types/index"
import { acCodes } from "./accordion/ac_codes"
import { alertCode } from "./alert/alert_code"
import { btn_Code } from "./button/btn_code"
import { aspectCode } from "./aspect-ratio/aspect_codes"
import { alertDialogCode } from "./alert-dialog/code_AlertDialog"
import { codeCards } from "./card/codeCard"
import { codeDropdowns } from "./dropdown/code_Dropdown"
import { codeInputs } from "./input/inputCode"
import { popoverCode } from "./popover/popoverCode"
import { progressCode } from "./progress/progressCode"
import { radioCode } from "./radio/radioCode"
import { slideoverCode } from "./slideover/slideoverCode"
import { tableCode } from "./table/tableCode"
import { tabsCode } from "./tabs/tabsCode"
import { tooltipCode } from "./tooltip/tooltipCode"
import { breadcrumbsCode } from "./breadcrumbs/breadc_Code"

export const allComponentCode: ComponentCode = {
    ...acCodes,
    ...alertCode,
    ...btn_Code,
    ...aspectCode,
    ...alertDialogCode,
    ...codeCards,
    ...codeDropdowns,
    ...codeInputs,
    ...popoverCode,
    ...progressCode,
    ...radioCode,
    ...slideoverCode,
    ...tableCode,
    ...tabsCode,
    ...tooltipCode,
    ...breadcrumbsCode
}