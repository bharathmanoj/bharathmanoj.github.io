// $(document).ready(function () {
//   $("button").click(function () {
//     alert("Background color = " + $("p").css("background-color"));
//   });
// });

// set css and set mulitple css
$(document).ready(function () {
  $("button").click(function () {
    $(".para3").css({
      "background-color": "blue",
      "font-size": "1.4rem",
      padding: "1rem",
      color: "#fff",
    });
  });
});
