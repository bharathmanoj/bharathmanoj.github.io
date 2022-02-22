// const progress = document.getElementById("progress");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const circles = document.querySelectorAll(".circle");

// let currentActive = 1;

// next.addEventListener("click", () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }

//   // update();
//   console.log(update());
// });

// prev.addEventListener("click", () => {
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }

//   // update();
//   console.log(update());
// });

// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   const actives = document.querySelectorAll(".active");

//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

// JQUERY

// $("#progress #prev #next .circle");

// let currentActive = 1;

// $("#next").click(function () {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }

//   update();
// });

// $("#prev").click(function () {
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }

//   update();
// });

// $(function update() {
//   $(".circle").forEach(function (circle, idx) {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });

//   $(".active");

//   $("#progress").css(
//     "width",
//     "((active.length - 1) / (circle.length - 1)) * 100 + " % ""
//   );

//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circle.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// });

$("#next").click(function () {
  $(".circle2").addClass("active");
  $(".progress").css("width", "33.3333%");
  $(".btn").removeAttr("disabled");

  $("#next").click(function () {
    $(".circle3").addClass("active");
    $(".progress").css("width", "66.6667%");

    $("#next").click(function () {
      $(".circle4").addClass("active");
      $(".progress").css("width", "100%");
      $(".hide").prop("disabled", true);
    });
  });
});

$("#prev").click(function () {
  $(".circle4").removeClass("active");
  $(".progress").css("width", "66.6667%");
  $(".hide").removeAttr("disabled");

  $("#prev").click(function () {
    $(".circle3").removeClass("active");
    $(".progress").css("width", "33.3333%");

    $("#prev").click(function () {
      $(".circle2").removeClass("active");
      $(".progress").css("width", "0%");
      $(".hide2").prop("disabled", true);
    });
  });
});
