// function displayVals() {
//   var singleValues = $("#single").val();
//   $("p").html("<b>Value:</b> " + singleValues);
// }
// $("select").change(displayVals);
// displayVals();

// function displayVals() {
//   var singleValues = $("#single").val();
//   var multipleValues = $("#multiple").val() || [];
//   $("p").html(
//     "<b>Single:</b> " +
//       singleValues +
//       " <b>Multiple:</b> " +
//       multipleValues.join(", ")
//   );
// }
// $("select").change(displayVals);
// displayVals();

// Set the value of the input field
$(document).ready(function () {
  $("button").click(function () {
    $("input:text").val("Hello Everyone");
  });
});
