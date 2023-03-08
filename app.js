const searchIcon = document.querySelector(".fa-magnifying-glass")
const searchDiv = document.querySelector(".search")
const navbar = document.querySelector(".navbar")
const x  = document.querySelectorAll(".fa-xmark")
const event = document.querySelector(".collection .event")
const navItems = document.querySelectorAll(".nav_item")
const vehicles = document.querySelector(".vehicles")
const shopp = document.querySelector(".shop")
const discover = document.querySelector(".discover")
const x2 = document.querySelector(".navbar-car .fa-xmark")

navItems[0].addEventListener("click", () => {
    vehicles.style.height = "500px"
})
document.querySelector('.take').addEventListener("click", () => {
    vehicles.style.display = 'none';
})
// console.log( navItems )

// // navItems[0].addEventListener("click", () => {
// //     vehicles.classList.add("show")
// // })
// x[2].addEventListener("click", () => {
//     vehicles.classList.remove("show")
// })




searchIcon.addEventListener("click", () => {
    searchDiv.classList.add("srch")
})
document.querySelector('.close').addEventListener("click", () => {
    searchDiv.style.display = 'none';
})

console.log(x);


const til = document.querySelector(".til")
const lan = document.getElementById("demo")

til.addEventListener("click", () => {
    lan.classList.toggle("len")
})

let xmark2 = document.querySelector("#demo .fa-xmark") 

xmark2.addEventListener("click", () => {
    lan.classList.remove("len")
})



