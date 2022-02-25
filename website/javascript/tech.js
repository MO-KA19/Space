let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let header = document.getElementById("header")
let disactive = "background: #0b0d17; color: white;"
let active = "background: white; color: black;"

let pic = document.getElementById("pic")
let images = [
    "../media/technology/image-launch-vehicle-portrait.jpg",
    "../media/technology/image-space-capsule-portrait.jpg",
    "../media/technology/image-spaceport-portrait.jpg"
]



btn1.onclick = function () {
    if (btn2.style.cssText === active || btn3.style.cssText === active) {
        btn2.style.cssText = disactive;
        btn3.style.cssText = disactive;
        btn1.style.cssText = active;
    }

    else {
        btn2.style.cssText = disactive;
        btn3.style.cssText = disactive;
        btn1.style.cssText = active;
    }

    header.innerHTML = "LAUNCH VEHICLE"
    pic.setAttribute("src",images[0])

}



btn2.onclick = function () {
    if (btn1.style.cssText === active || btn3.style.cssText === active) {
        btn1.style.cssText = disactive;
        btn3.style.cssText = disactive;
        btn2.style.cssText = active;
    }

    else {
        btn1.style.cssText = disactive;
        btn3.style.cssText = disactive;
        btn2.style.cssText = active;
    }

    header.innerHTML = "SPACEPORT"
    pic.setAttribute("src",images[2])

}




btn3.onclick = function () {
    if (btn1.style.cssText === active || btn2.style.cssText === active) {
        btn1.style.cssText = disactive;
        btn2.style.cssText = disactive;
        btn3.style.cssText = active;
    }

    else {
        btn1.style.cssText = disactive;
        btn2.style.cssText = disactive;
        btn3.style.cssText = active;
    }

    header.innerHTML = "SPACE CAPSULE"
    pic.setAttribute("src",images[1])

}