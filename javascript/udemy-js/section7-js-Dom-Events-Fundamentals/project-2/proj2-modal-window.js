"use strict";

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// for (let i = 0; i < btnsOpenModal.length; i++)
//   // WHEN BUTTON WE CLICK CARD WILL BE OPEN
//   btnsOpenModal[i].addEventListener("click", function () {
//     console.log("Button clicked");
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });

// // WHEN MULTIPLICATION SIGN WE CLICK CARD WILL BE CLOSED
// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// // WHEN WE CLICK OUTSIDE(OVERLAY) OF CARD WILL BE ALSO CLOSED
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// ANOTHER WAY WE WRITE SIMPLE LINE OF CODE
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//HANDILING AN ESCAPE (ESC) KEYPRESS EVENT
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape") {
    // boolean value !
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

// ANOTHER WAY
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
