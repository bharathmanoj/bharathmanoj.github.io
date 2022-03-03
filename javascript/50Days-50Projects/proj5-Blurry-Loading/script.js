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
  let load = 0;

  let int = setInterval(blurring, 50);

  function blurring() {
    load++;

    if (load > 99) {
      clearInterval(int);
    }

    $("#loading-text").text(`${load}%`);
    $("#loading-text").css("opacity", "scale(load, 0, 100, 1, 0)");

    $("section")
      .filter("#bg")
      .css("filter", `blur(${scale(load, 0, 100, 50, 0)}px)`);
  }
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// $("#bg").attr("style", "filter:blur(0px)");
// $("#bg").removeProp("filter");

// $("div").text("100%").animate({
//   opacity: "0",
// });
