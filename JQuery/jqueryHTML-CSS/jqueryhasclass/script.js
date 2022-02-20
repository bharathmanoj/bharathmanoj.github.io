$(document).ready(function () {
  $("button").click(function () {
    alert($("p").hasClass("intro"));
  });
});

// Example2

$(document).ready(function () {
  $("#result1").text($("p#pid1").hasClass("red"));
  $("#result2").text($("p#pid2").hasClass("yellow"));
});

// example3

$(document).ready(function () {
  $(".btn").click(function () {
    var className = $(this).attr("id");
    $("ul li").each(function () {
      if ($(this).hasClass(className)) {
        $(this).fadeTo("slow", 0.0).fadeTo("slow", 1.0);
      }
    });
  });
});
