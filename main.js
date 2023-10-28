let elForm = document.querySelector(".form");
let elPeople = document.querySelector(".people");
let elBycicle = document.querySelector(".bycicle");
let elCar = document.querySelector(".car");
let elPlane = document.querySelector(".plane");
let peopleSpeed = 3.6;
let bycicleSpeed = 20.1;
let carSpeed = 70;
let planeSpeed = 800;

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let elInputValue = document.querySelector(".input").value.trim();

    if (!isNaN(elInputValue) && elInputValue > 0) {
        elPeople.textContent = Math.floor(elInputValue / peopleSpeed) + " hour " + Math.round(((elInputValue / peopleSpeed) - Math.floor(elInputValue / peopleSpeed)) * 60) + " minut";
        elBycicle.textContent = Math.floor(elInputValue / bycicleSpeed) + " hour " + Math.round(((elInputValue / bycicleSpeed) - Math.floor(elInputValue / bycicleSpeed)) * 60) + " minut";
        elCar.textContent = Math.floor(elInputValue / carSpeed) + " hour " + Math.round(((elInputValue / carSpeed) - Math.floor(elInputValue / carSpeed)) * 60) + " minut";
        elPlane.textContent = Math.floor(elInputValue / planeSpeed) + " hour " + Math.round(((elInputValue / planeSpeed) - Math.floor(elInputValue / planeSpeed)) * 60) + " minut";
    } else if (elInputValue === "") {
        alert("Qiymat kiriting")
    } else if (isNaN(elInputValue)) {
        alert("iltimos raqam kiriting")
    } else {
        alert("iltimos musbat sonda kiriting")
    }
    elForm.reset();
})