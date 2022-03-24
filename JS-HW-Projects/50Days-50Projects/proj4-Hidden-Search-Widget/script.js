// const search = document.querySelector(".search");
// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");

// const search = document.getElementById("search");
// const btn = document.getElementById("btn");
// const input = document.getElementById("input");

// btn.addEventListener("click", () => {
//   search.classList.toggle("active");
//   input.focus();
// });

// window.addEventListener("click", () => {
//   search.classList.toggle("active");
//   input.focus();
// });

//HIDDEN SEARCH WIDGET JAVASCRIPT TO JQUERY

$("#btn").click(function () {
  $(".search").addClass("active");
  $("#btn").click(function () {
    $(".search").removeClass("active");
  });
});
