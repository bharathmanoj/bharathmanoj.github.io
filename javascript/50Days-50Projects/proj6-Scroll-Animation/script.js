// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", checkBoxes);

// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

// checkBoxes();

// Jquery

// $(window).scroll(function () {
//   // $(".panel").removeClass("active");
//   $(".box").addClass("show");
//   $(".box").getBoundingClientRect().top;
// });

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  const triggerBottom = (window.innerHeight / 5) * 4;

  if (scroll < triggerBottom) {
    $(".box").addClass("show");
  } else {
    $(".box").removeClass("show");
  }
});
