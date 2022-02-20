$(document).ready(function () {
  $("input").keydown(function () {
    $("input").css("background-color", "green");
  });
  $("input").keyup(function () {
    $("input").css("background-color", "#fff");
  });
});
