$(document).ready(function () {
  $("#h2").mousedown(function () {
    $("div").text("mouse down event triggered").show().fadeOut(2000);
  });
});

// Example 2

$(document).ready(function () {
  $("p").mousedown(function () {
    $("p").css("background-color", "blue");
  });
  $("p").mouseup(function () {
    $("p").css("background-color", "lightblue");
  });
});
