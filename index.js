const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const bb = document.querySelector("bb")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bb.classList.toggle("active")
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))