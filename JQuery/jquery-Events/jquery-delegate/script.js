$("body").delegate("p", "click", function () {
  $(this).after("<p>Click me for another paragraph.</p>");
});
