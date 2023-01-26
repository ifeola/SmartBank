const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
