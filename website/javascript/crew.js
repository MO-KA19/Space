// crew information slider

let astro = document.querySelector("#astro");
let butt1 = document.querySelector("#slider1");
let butt2 = document.querySelector("#slider2");
let butt3 = document.querySelector("#slider3");
let butt4 = document.querySelector("#slider4");

let buttons = [butt1,butt2,butt3,butt4];
let images = [
    "../media/crew/image-douglas-hurley.png",
    "../media/crew/image-mark-shuttleworth.png",
    "../media/crew/image-victor-glover.png",
    "../media/crew/image-anousheh-ansari.png"
];
let astName = document.getElementById("name")
let rank = document.getElementById("rank")


butt1.onclick = function () {
    astro.setAttribute("src",images[0])
    rank.innerHTML = "COMMANDER"
    astName.innerHTML = "DOUGLAS HURLEY"
}


butt2.onclick = function () {
    astro.setAttribute("src",images[1])
    rank.innerHTML = "MISSION SPECIALIST"
    astName.innerHTML = "MARK SHUTTLEWORTH"
}


butt3.onclick = function () {
    astro.setAttribute("src",images[2])
    rank.innerHTML = "PILOT"
    astName.innerHTML = "VICTOR GLOVER"
}


butt4.onclick = function () {
    astro.setAttribute("src",images[3])
    rank.innerHTML = "FLIGHT ENGINEER"
    astName.innerHTML = "ANOUSHEH  ANSARI"
}