$(document).ready(function () {
  $("button").click(function () {
    $("p").detach();
  });
});

// Example 2
$("p").click(function () {
  $(this).toggleClass("off");
});
var p;
$("button").click(function () {
  if (p) {
    p.appendTo("body");
    p = null;
  } else {
    p = $("p").detach();
  }
});

// diff btw detach and remove method
$(document).ready(function () {
  $("#btn1").click(function () {
    $("body").append($("#p1").detach());
  });
  $("#btn2").click(function () {
    $("body").append($("#p2").remove());
  });
  $("p").click(function () {
    $(this).animate({ fontSize: "+=1px" });
  });
});
