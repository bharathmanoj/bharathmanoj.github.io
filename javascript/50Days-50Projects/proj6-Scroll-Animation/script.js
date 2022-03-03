const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes();

// Jquery

$(window).scroll(function () {
  $(".box").addClass("show");
  $(".box").getBoundingClientRect().top;
});

// $(window).scroll(function () {
//   $(".box").removeClass("show");
// });

// $(window).scroll(function () {
//   function checkBoxes() {
//     const triggerBottom = (window.innerHeight / 5) * 4;
//     // ($(window).innerHeight / 5) * 4;

//     $(".box").each(function () {
//       const boxTop = $(".box").getBoundingClientRect().top;
//       // const boxTop = box.getBoundingClientRect().top;

//       if (boxTop < triggerBottom) {
//         $(".box").addClass("show");
//       } else {
//         $(".box").removeClass("show");
//       }
//     });
//   }

//   checkBoxes();
// });
