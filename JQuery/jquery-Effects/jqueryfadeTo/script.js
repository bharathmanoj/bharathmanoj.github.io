$(document).ready(function () {
  $("#btn").click(function () {
    $(".para1").fadeTo("slow", 0.1);
    $(".para2").fadeTo("slow", 0.5);
    $(".para3").fadeTo("slow", 0.9);
  });
});

$("P").css("font-size", "2rem");
$("#btn").css("margin-bottom", "2rem");

$(document).ready(function () {
  $(".btn").click(function () {
    $("#div1").fadeTo("slow", 0.1);
    $("#div2").fadeTo("slow", 0.5);
    $("#div3").fadeTo("slow", 0.9);
  });
});

$(".btn").css("margin-top", "2rem");
