$(document).ready(function () {
  $("#h2").mouseup(function () {
    $("div").text("Bye Bye... mouse up event triggered").show().fadeOut(2000);
  });
});

//  Example 2

$(document).ready(function () {
  $("p").mousedown(function () {
    $("p").css("background-color", "pink");
  });
  $("p").mouseup(function () {
    $("p").css("background-color", "yellowgreen");
  });
});
