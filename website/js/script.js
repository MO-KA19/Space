// Set Kursor shape
const kurShape = new kursor ({
    type: 4,
    color: "#D0D6F9"
})



/*
Here, instead of make every planet,crew or technology data in the main js file,
I made a json file which have all the these data stored as json file out of js file
then I convert this json file into a url to make it available online anywhere
and so on to fetch it in the below function, so it dealing with it now like api
and the function ask for this api json data which I made previously, then setting
this data in the html, fast, clean, and simple.
*/



// Planets Slider
let items = document.querySelectorAll(".container ul li");
let planet = document.querySelector(".dest");
let destination = document.querySelector(".destination")
let time = document.querySelector(".time");
let img = document.querySelector(".container img");


for (let i = 0; i < items.length; i++) {

    items[i].onclick = async () => {
        const request = await fetch ("https://json.extendsclass.com/bin/73e79636d8e3");
        const jsonData = await request.json();
        planet.innerHTML = jsonData["planets"][i]["name"];
        destination.innerHTML = jsonData["planets"][i]["distance"];
        time.innerHTML = jsonData["planets"][i]["time"];
        img.setAttribute("src", jsonData["planets"][i]["img"]);
    };
};




// Crew slider
let dot = document.querySelectorAll(".dots span");
let crew = document.querySelector("#crew");
let job = document.querySelector("#job");
let crewImg = document.querySelector("#crewImg");


for (let j = 0; j < dot.length; j++ ) {
    dot[j].onclick = async () => {
        let request = await fetch ("https://json.extendsclass.com/bin/73e79636d8e3");
        let data = await request.json();

        crew.innerHTML = data["crew"][j]["name"];
        job.innerHTML = data["crew"][j]["job"];
        crewImg.setAttribute("src", data["crew"][j]["img"]);
    };
};




// Technology slider
let clickers = document.querySelectorAll(".iters span");
let techName = document.querySelector(".head");
let techImg = document.querySelector("#techImg");


for (let k = 0; k < clickers.length; k++) {
    let counter = 0;
    clickers[k].onclick = async () => {
        let request = await fetch ("https://json.extendsclass.com/bin/73e79636d8e3");
        let data = await request.json();
        counter ++

        techName.innerHTML = data["techs"][k]["name"];
        techImg.setAttribute("src", data["techs"][k]["img"]);
    };
};