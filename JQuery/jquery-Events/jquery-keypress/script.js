i = 0;
$(document).ready(function () {
  $("input").keypress(function () {
    $("span").text((i += 1));
  });
});
