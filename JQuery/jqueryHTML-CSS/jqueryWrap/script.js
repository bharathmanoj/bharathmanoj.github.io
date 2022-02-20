$(document).ready(function () {
  $("button").click(function () {
    $("p").wrap("<div></div>");
  });
});

// Example 2
// $(document).ready(function () {
//   $("div").click(function () {
//     var content = '<div class="div"></div>';
//     $("#destination").wrap(content);
//   });
// });
