import type { ComponentCode } from "@/types/index"
import { acCodes } from "./accordion/ac_codes"
import { alertCode } from "./alert/alert_code"
import { btn_Code } from "./button/btn_code"
import { aspectCode } from "./aspect-ratio/aspect_codes"
import { alertDialogCode } from "./alert-dialog/code_AlertDialog"
import { codeCards } from "./card/codeCard"
import { codeDropdowns } from "./dropdown/code_Dropdown"

export const allComponentCode: ComponentCode = {
    ...acCodes,
    ...alertCode,
    ...btn_Code,
    ...aspectCode,
    ...alertDialogCode,
    ...codeCards,
    ...codeDropdowns
}