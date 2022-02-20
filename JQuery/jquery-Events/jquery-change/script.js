// $("select").change(function () {
//   document.getElementById("loc").innerHTML =
//     "You selected: " + document.getElementById("se").value;
// });

// Example 2

$("select")
  .change(function () {
    var str = "";
    $("select option:selected").each(function () {
      str += $(this).text() + " ";
    });
    $("div").text(str);
  })
  .change();
