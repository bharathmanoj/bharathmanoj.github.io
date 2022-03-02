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

$(".box1").click(function () {
  $(".box1").addClass("show");
  $(".box").getBoundingClientRect().top;

  $(window).click(function () {
    $(".box").removeClass("show");
  });
});
