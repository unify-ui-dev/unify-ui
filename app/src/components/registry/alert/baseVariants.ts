import type { UiVariant, VariantIntent } from "@/types/index";
type BaseProps = {
    variant: UiVariant,
    intent: VariantIntent, title: string, description: string, icon?: string
}



const getAlertCode = (props: BaseProps) => {
    const { intent, variant, title, description, icon = 'info' } = props
    return `
    <div class="rd-md p-4 flex items-start gap-x-4 ${variant === 'outline' ? "border " : ""}ui-${variant}${intent === 'gray' ? '' : `-${intent}`}">
        <div class="w-max">
            <span class="flex text-lg i-ph-${icon}"></span>
        </div>  
        <div class="flex-1">
            <h3 class="font-medium text-${intent === 'gray' ? 'title' : intent === 'neutral' ? (variant==='outline' ? 'gray-950 dark-text-white' : variant==="soft" || variant==='subtle' ? `title` : 'title-reverse') : `${intent}-600`}">
                ${title}
            </h3>
            <p>
                ${description}
            </p>
        </div>
    </div>`
}

export const getFullCodeAlert = (variant:UiVariant)=>{
    return `
<div class="space-y-4">${getAlertCode({ variant: variant, title: "New update!", description: "A new software update is available. See what's new in version 3.0.7", intent: "gray" })}${getAlertCode({ variant: variant, title: "New update!", description: "A new software update is available. See what's new in version 3.0.7", intent: "primary" })}${getAlertCode({ variant: variant, title: "Successfully updated.", description: "You have successfully updated your profil.", intent: "success", icon: "user-circle-check" })}${getAlertCode({ variant: variant, title: "New update!", description: "A new software update is available. See what's new in version 3.0.7", intent: "neutral" })}
</div> 
    `
}