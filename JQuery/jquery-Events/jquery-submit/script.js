$("form").submit(function (event) {
  if ($("input:first").val() === "HelloEveryone") {
    $("span").text("Submitted Successfully.").show();
    return;
  }
  $("span").text("Not valid!").show().fadeOut(2000);
  event.preventDefault();
});
