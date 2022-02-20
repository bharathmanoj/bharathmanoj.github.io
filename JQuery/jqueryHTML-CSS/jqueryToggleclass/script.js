$(document).ready(function () {
  $("button").click(function () {
    $("p").toggleClass("main");
  });
});

// Example2
$(".para").click(function () {
  $(this).toggleClass("highlight");
});

// var cls = ["", "a", "a b", "a b c"];
// var divs = $("div.wrap").children();
// var appendClass = function () {
//   divs.append(function () {
//     return "<div>" + (this.className || "none") + "</div>";
//   });
// };
// appendClass();
// $("button").on("click", function () {
//   var tc = this.className || undefined;
//   divs.toggleClass(tc);
//   appendClass();
// });
// $("a").on("click", function (event) {
//   event.preventDefault();
//   divs.empty().each(function (i) {
//     this.className = cls[i];
//   });
//   appendClass();
// });
