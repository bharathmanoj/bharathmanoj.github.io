// const loadText = document.getElementById("loading-text");
// const bg = document.getElementById("bg");

// let load = 0;

// let int = setInterval(blurring, 50);

// function blurring() {
//   load++;

//   if (load > 99) {
//     clearInterval(int);
//   }

//   loadText.innerText = `${load}%`;
//   loadText.style.opacity = scale(load, 0, 100, 1, 0);
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

// JQUERY

$(document).keypress(function () {
  $("#bg").attr("style", "filter:blur(0px)"), 1000;
  $("#bg").removeProp("filter");

  // $("#bg").animate(
  //   {
  //     filter: "blur(30px)",
  //   },
  //   1000
  // );

  $("div").text("100%").animate({
    opacity: "0.9",
  });

  $("#loading-text").attr("style", "opacity:0%");
});

// $(document).keypress(function scale(num, in_min, in_max, out_min, out_max) {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// });

// $(document).click(function () {
//   $("#bg").animate({
//     opacity: "0.9",
//   });
// });
