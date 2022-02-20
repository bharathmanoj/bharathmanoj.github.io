// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").unwrap();
//   });
// });

// Example 2

$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").wrap("<div></div>");
  });
  $("#btn2").click(function () {
    $("p").unwrap();
  });
});
