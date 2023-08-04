const btnHumb = document.querySelector("[data-toggle-navbar]")
const navbar = document.querySelector("[data-navbar]")
if (btnHumb && navbar) {
    const toggleBtnAttr = () => {
        const isOpen = btnHumb.getAttribute("data-is-open")
        btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
        if (isOpen === "false") {
            document.body.classList.toggle("overflow-y-auto")
        } else {
            document.body.classList.add("overflow-y-auto")
        }
    }
    btnHumb.addEventListener("click", () => {
        navbar.classList.toggle("invisible")
        navbar.classList.toggle("op-0")
        navbar.classList.toggle("translate-y-10")
        toggleBtnAttr()
    })
}