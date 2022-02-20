$(document).ready(function () {
  $("input").keydown(function () {
    $("input").css("background-color", "red");
  });
  $("input").keyup(function () {
    $("input").css("background-color", "yellow");
  });
});
