$(document).ready(function () {
  $("#btn").click(function () {
    $("#div0").delay("slow").fadeIn();
  });
});

$(document).ready(function () {
  $(".btn").click(function () {
    $("#div1").delay("fast").fadeIn();
    $("#div2").delay("slow").fadeIn();
    $("#div3").delay(1000).fadeIn();
    $("#div4").delay(2000).fadeIn();
    $("#div5").delay(9000).fadeIn();
  });
});
