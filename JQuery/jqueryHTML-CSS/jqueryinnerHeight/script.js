$(document).ready(function () {
  $("button").click(function () {
    alert("Inner height of the div is: " + $(".container").innerHeight());
  });
});

// example2
var modHeight = 80;
$("div").one("click", function () {
  $(this).innerHeight(modHeight).addClass("mod");
  modHeight -= 8;
});
