// side menu in the home page
let menu = document.querySelector("#menu")
let sideBar = document.querySelector(".side-mobile")
let cross = document.querySelector("#cancel")

menu.onclick = function () {
    menu.style.display = "none"
    sideBar.style.display = "block"
}


cross.onclick = function () {
    sideBar.style.display = "none"
    menu.style.display = "block"
}