// Mobile Navigation javascript
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//
// const frame = (videos, width) => {
//   const msg = document.querySelector("#one");

//   msg.innerText = videos;
//   msg.style.width = width;
// };

const firstbtn = document.querySelector("#btn1");
firstbtn.addEventListener("click", function () {
  // frame("https://www.youtube.com/embed/RbQGn6vBlys");
  window.location.href = "https://www.youtube.com/embed/RbQGn6vBlys";
});

const secondbtn = document.querySelector("#btn2");
secondbtn.addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/embed/1Rs2ND1ryYc";
});

const thirdbtn = document.querySelector("#btn3");
thirdbtn.addEventListener("click", function () {
  // frame("https://www.youtube.com/embed/W6NZfCO5SIk");
  window.location.href = "https://www.youtube.com/embed/W6NZfCO5SIk";
});

const fourthbtn = document.querySelector("#btn4");
fourthbtn.addEventListener("click", function () {
  // frame("https://www.youtube.com/embed/JjIvF0yikGU");
  window.location.href = "https://www.youtube.com/embed/JjIvF0yikGU";
});
