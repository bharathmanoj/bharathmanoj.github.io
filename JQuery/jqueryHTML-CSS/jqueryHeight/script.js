$(document).ready(function () {
  $("button").click(function () {
    alert("Height of div: " + $("div").height());
  });
});

// Example2

$("div").one("click", function () {
  $(this).height(50).css({
    cursor: "auto",
    backgroundColor: "green",
  });
});
