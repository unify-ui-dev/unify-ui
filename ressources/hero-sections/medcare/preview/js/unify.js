const btnHumb = document.querySelector("[data-toggle-navbar]")
        const navbar = document.querySelector("[data-navbar]")
        const overlay = document.querySelector("[data-nav-overlay]")
        if (btnHumb && navbar) {
            const toggleBtnAttr = () => {
                const isOpen = btnHumb.getAttribute("data-is-open")
                btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
                if (isOpen === "false") {
                    document.body.classList.toggle("overflow-y-auto")
                    overlay.classList.toggle("hidden")
                    navbar.classList.remove("-left-full")
                    navbar.classList.add("left-0")
                } else {
                    document.body.classList.add("overflow-y-auto")
                    overlay.classList.add("hidden")
                    navbar.classList.add("-left-full")
                    navbar.classList.remove("left-0")
                }
            }

            btnHumb.addEventListener("click", () => {
                toggleBtnAttr()
            })

            overlay.addEventListener("click", () => {
                navbar.classList.add("-left-full")
                navbar.classList.remove("left-0")
                toggleBtnAttr()
            })
        }