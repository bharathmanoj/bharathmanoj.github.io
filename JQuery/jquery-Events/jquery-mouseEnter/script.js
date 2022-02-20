$(document).ready(function () {
  $("#h2").mouseenter(function () {
    $("div").text("Mouse entered on heading").show().fadeOut(2000);
  });
});

//Example 2

$(document).ready(function () {
  $("p").mouseenter(function () {
    $("p").css("background-color", "lightgreen");
  });
  $("p").mouseleave(function () {
    $("p").css("background-color", "yellow");
  });
});
