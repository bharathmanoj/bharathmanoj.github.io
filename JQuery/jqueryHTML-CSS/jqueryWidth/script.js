$(document).ready(function () {
  $("button").click(function () {
    alert("Width of div: " + $(".container").width());
  });
});

// example2

// var modWidth = 70;
// $("div").one("click", function () {
//   $(this).width(modWidth).addClass("mod");
//   modWidth -= 10;
// });
