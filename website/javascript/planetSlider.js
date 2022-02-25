// planet slider
let moon = document.querySelector("#p-moon")
let mars = document.querySelector("#p-mars")
let europa = document.querySelector("#p-europa")
let titan = document.querySelector("#p-titan")


let planetImg = document.querySelector("#planet")
let planetName = document.querySelector("#p-name")
let plnetDes = document.querySelector("#p-des")
let distance = document.querySelector("#distance")
let time = document.querySelector("#time")

let planetNames = [moon,mars,europa,titan]
let planetpics = ["../media/destination/image-moon.png",
                "../media/destination/image-mars.png",
                "../media/destination/image-europa.png",
                "../media/destination/image-titan.png"
]


moon.onclick = function () {
    planetName.innerHTML = "MOON"
    planetImg.setAttribute("src",planetpics[0])
    distance.innerHTML = "385,000 KM"
    time.innerHTML = "3 DAYS"

}

mars.onclick = function () {
    planetName.innerHTML = "MARS"
    planetImg.setAttribute("src",planetpics[1])
    distance.innerHTML = "225 MIL KM"
    time.innerHTML = "9 MONTHS"
}


europa.onclick = function () {
    planetName.innerHTML = "EUROPA"
    planetImg.setAttribute("src",planetpics[2])
    distance.innerHTML = "628 MIL KM"
    time.innerHTML = "3 YEARS"
}

titan.onclick = function () {
    planetName.innerHTML = "TITAN"
    planetImg.setAttribute("src",planetpics[3])
    distance.innerHTML = "1.6 BIL KM"
    time.innerHTML = "7 YEARS"
}