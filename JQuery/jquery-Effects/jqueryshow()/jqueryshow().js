$("#hide").click(function () {
  // $("#book").hide();
  // $("#book").hide("slow"); //Create simple animation
  // $("#book").hide("fast");

  $("#book").hide(2000); //milliseconds
});

$("#show").click(function () {
  // $("#book").hide();
  // $("#book").show("slow"); //Create simple animation
  // $("#book").hide("fast");

  // with speed parameter
  $("#book").show(3000);
});

// Simple css
$("p")
  .css("background-color", "skyblue")
  .css("font-size", "2rem")
  .css("padding", "2rem");
