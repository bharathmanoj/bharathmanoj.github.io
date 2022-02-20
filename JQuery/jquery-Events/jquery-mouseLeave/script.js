$(document).ready(function () {
  $("#h2").mouseleave(function () {
    $("div").text("Bye Bye... leaving heading").show().fadeOut(2000);
  });
});

// Example2

$(document).ready(function () {
  $("p").mouseenter(function () {
    $("p").css("background-color", "red");
  });
  $("p").mouseleave(function () {
    $("p").css("background-color", "blue");
  });
});
