$(document).ready(function () {
  $("#btn1").click(function () {
    $(".para1").prepend("<b>Prepended text: </b> ");
  });
});

$(document).ready(function () {
  $("#btn2").click(function () {
    $(".para2").prepend("<b>Prepended text</b>. ");
  });
  $("#btn3").click(function () {
    $("ol").prepend("<li>Prepended item</li>");
  });
});
