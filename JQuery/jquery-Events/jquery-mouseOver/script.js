$(document).ready(function () {
  $("p").mouseover(function () {
    $("p").css("background-color", "lightgreen");
  });
  $("p").mouseout(function () {
    $("p").css("background-color", "orange");
  });
});

// Example-2

$("div.out")
  .mouseover(function () {
    $(this).find("span").text("mouse over ");
  })
  .mouseout(function () {
    $(this).find("span").text("mouse out ");
  });
