const menu = document.querySelector(".menu")

menu.addEventListener("click", menu_clicked)


function menu_clicked() {
    menu.classList.toggle("menu-opened")
}