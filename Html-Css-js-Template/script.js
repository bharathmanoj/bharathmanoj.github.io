// Mobile Navigation javascript
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//
// SECTION--1
$("#btn1").click(function () {
  $(".iframe1").addClass("show");
  $(".iframe2, .iframe3, .iframe4").removeClass("show");
});

$("#btn2").click(function () {
  $(".iframe2").addClass("show");
  $(".iframe1, .iframe3, .iframe4").removeClass("show");
});

$("#btn3").click(function () {
  $(".iframe3").addClass("show");
  $(".iframe1, .iframe2, .iframe4").removeClass("show");
});

$("#btn4").click(function () {
  $(".iframe4").addClass("show");
  $(".iframe1, .iframe2, .iframe3").removeClass("show");
});
