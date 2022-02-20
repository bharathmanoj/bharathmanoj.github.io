$(document).ready(function () {
  $("button").click(function () {
    $("p").wrapAll("<div></div>");
    $("div:first").addClass("container");
  });
});

// Example 2

$(document).ready(function () {
  $("div").click(function () {
    var content = "<div class='div'></div>";
    $("div").wrapAll(content);
  });
});
