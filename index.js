let menu =document.getElementById("menu");
let primaryNavigation = document.getElementById("primary-navigation")
let home = document.getElementById("home");
let contact = document.getElementById("contact");
let about = document.getElementById("about");


menu.addEventListener("click", ()=>{
    primaryNavigation.classList.toggle("display")
})

home.addEventListener("click", ()=>{
    primaryNavigation.classList.toggle("display")
})

contact.addEventListener("click", ()=>{
    primaryNavigation.classList.toggle("display")
})

about.addEventListener("click", ()=>{
    primaryNavigation.classList.toggle("display")
})