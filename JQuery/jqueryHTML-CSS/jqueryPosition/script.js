$(document).ready(function () {
  $("button").click(function () {
    var x = $("p").position();
    alert("Top position: " + x.top + " Left position: " + x.left);
  });
});

// Another example

$(document).ready(function () {
  $("div").click(function () {
    var position = $(this).position();
    $("#lresult").html("left position: <span>" + position.left + "</span>.");
    $("#tresult").html("top position: <span>" + position.top + "</span>.");
  });
});
