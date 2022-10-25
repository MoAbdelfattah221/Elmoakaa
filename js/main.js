// Burger Icon Function
let icon = document.querySelector(".icon");
let menu = document.querySelector("header ul");
icon.onclick = () => {
    menu.classList.toggle("active")
}