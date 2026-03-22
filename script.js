const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const faBars = document.querySelector(".fa-bars");
const faTimes = document.querySelector(".fa-times");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    faBars.classList.toggle("hide");
    faTimes.classList.toggle("hide");
});
