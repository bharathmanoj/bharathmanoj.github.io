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

// $("#btn").click(function () {
//   $(".search").addClass("active");
//   $("#btn").click(function () {
//     $(".search").removeClass("active");
//   });
// });

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

//
// const frame = (videos) => {
//   const msg = document.querySelector("#one");

//   msg.innerText = videos;
// };

// const firstbtn = document.querySelector("#btn1");
// firstbtn.addEventListener("click", function () {
//   frame("https://www.youtube.com/embed/RbQGn6vBlys");
//   // window.location.href = "https://www.youtube.com/embed/RbQGn6vBlys";
// });

// const secondbtn = document.querySelector(".iframe, #btn2");
// secondbtn.addEventListener("click", function () {
//   frame("https://www.youtube.com/embed/1Rs2ND1ryYc");
//   // window.location.href = "https://www.youtube.com/embed/1Rs2ND1ryYc";
// });

// const thirdbtn = document.querySelector("#btn3");
// thirdbtn.addEventListener("click", function () {
//   frame("https://www.youtube.com/embed/W6NZfCO5SIk");
//   // window.location.href = "https://www.youtube.com/embed/W6NZfCO5SIk";
// });

// const fourthbtn = document.querySelector("#btn4");
// fourthbtn.addEventListener("click", function () {
//   frame("https://www.youtube.com/embed/JjIvF0yikGU");
//   // window.location.href = "https://www.youtube.com/embed/JjIvF0yikGU";
// });
