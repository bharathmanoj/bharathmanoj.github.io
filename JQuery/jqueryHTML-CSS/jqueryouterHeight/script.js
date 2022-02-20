$(document).ready(function () {
  $("button").click(function () {
    alert("Outer height of the div is: " + $("div").outerHeight());
  });
});

// Example2

// var modHeight = 80;
// $("div").one("click", function () {
//   $(this).outerHeight(modHeight).addClass("mod");
//   modHeight -= 8;
// });
