const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

$("#btn").click(function () {
  $(".search").addClass("active");
  $("#btn").click(function () {
    $(".search").removeClass("active");
  });
});

// slider
