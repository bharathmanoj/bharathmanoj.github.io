$(document).ready(function () {
  $(".para1").bind("click", function () {
    alert("This paragraph was clicked.");
  });
});

// Example2
$("p").bind("click", function (event) {
  var str = "( " + event.pageX + ", " + event.pageY + " )";
  $("span").text("This is a single click! " + str);
});
$("p").bind("dblclick", function () {
  $("span").text("This is a double click on " + this.nodeName);
});
$("p").bind("mouseenter mouseleave", function (event) {
  $(this).toggleClass("over");
});
