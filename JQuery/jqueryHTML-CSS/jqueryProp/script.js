$(document).ready(function () {
  $("button").click(function () {
    var $x = $("div");

    $x.prop("color", "#e23");

    $x.append("The value of the color property: " + $x.prop("color"));

    $x.removeProp("color");

    $x.append("<br>Now the value of the color property: " + $x.prop("color"));
  });
});

//Example 2

$("input")
  .change(function () {
    var $input = $(this);
    $("p").html(
      '.attr( "checked" ): <b>' +
        $input.attr("checked") +
        "</b><br>" +
        '.prop( "checked" ): <b>' +
        $input.prop("checked") +
        "</b><br>" +
        '.is( ":checked" ): <b>' +
        $input.is(":checked")
    ) + "</b>";
  })
  .change();
