$("input").focus(function () {
  $(this).next("span").css("display", "inline").fadeOut(2000);
});

// Example 2
// $("input[type=text]").focus(function () {
//   $(this).blur();
// });
