$(document).ready(function () {
  $("button").click(function () {
    // $("p").wrapInner("<em></em>");
    $("p").wrapInner("<em><b><marquee></marquee></b></em>");
  });
});

// Example 2

// $(document).ready(function () {
//   $("div").click(function () {
//     var content = "<marquee><b></b></marquee>";
//     $(this).wrapInner(content);
//   });
// });
