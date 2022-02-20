$(document).ready(function () {
  $("p").click(function () {
    alert("This paragraph was clicked.");
  });
});

// Example 2
$(document).ready(function () {
  $("h2,h3,h4").click(function () {
    $(this).hide();
  });
});
