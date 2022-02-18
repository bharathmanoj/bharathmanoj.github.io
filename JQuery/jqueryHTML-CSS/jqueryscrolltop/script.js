$(document).ready(function () {
  $("button").click(function () {
    console.log($(".para").scrollTop() + " px");
  });
});

$(".container").scrollTop(100);
