const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

$(document).ready(function () {
  $(".carousel").carousel({
    padding: 150,
  });
  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }
});
