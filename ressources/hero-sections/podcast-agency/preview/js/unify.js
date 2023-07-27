const btnHumb = document.querySelector("[data-toggle-navbar]")
const navbar = document.querySelector("[data-navbar]")
const overlay = document.querySelector("[data-nav-overlay]")
// !visible !op-100 !translate-y-0
if (btnHumb && navbar) {
    const toggleBtnAttr = () => {
        const isOpen = btnHumb.getAttribute("data-is-open")
        btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
        if (isOpen === "false") {
            document.body.classList.toggle("overflow-y-auto")
            overlay.classList.toggle("hidden")
        } else {
            document.body.classList.add("overflow-y-auto")
            overlay.classList.add("hidden")
        }
    }
    btnHumb.addEventListener("click", () => {
        navbar.classList.toggle("invisible")
        navbar.classList.toggle("op20")
        navbar.classList.toggle("translate-y-6")
        toggleBtnAttr()
    })

    overlay.addEventListener("click", () => {
        navbar.classList.add("invisible")
        navbar.classList.add("op20")
        navbar.classList.add("translate-y-6")
        toggleBtnAttr()
    })
}