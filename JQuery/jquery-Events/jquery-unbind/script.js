$(document).ready(function () {
  $("h3").bind("mouseover", function () {
    $(this)
      .css({ "background-color": "pink", "font-size": "25px" })
      .text("Hovered");
  });
  $("#b3").click(function () {
    $("h3").unbind("mouseover");
  });
});

// Example-2
$(document).ready(function () {
  var i = 0,
    j = 1;
  $("div").click(function (e) {
    $("div")
      .animate({ height: "+=25px", width: "+=25px", fontSize: "+=10px" })
      .text(j + " times")
      .css({ color: "blue", "background-color": "yellow" });
    i++;
    j++;
    if (i >= 10) {
      $(this).unbind(e);
    }
  });
});
