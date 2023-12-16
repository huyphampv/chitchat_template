const navLinksItem = document.querySelectorAll(".nav-links__item")

navLinksItem.forEach(item => item.addEventListener("click", activeNavLink))

// function active nav link
function activeNavLink() {
    removeActiveNavLink()
    this.classList.add('active')
}

// function active nav link
function removeActiveNavLink() {
    navLinksItem.forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
        }
    })
}


// Toggle mobile menu
const mobileToggle = document.getElementById("mobile-toggle")
const mobileMenu = document.getElementById("mobile-menu")

mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")
})