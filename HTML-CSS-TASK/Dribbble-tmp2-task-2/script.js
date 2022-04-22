$("#board").click(function () {
  $(".iframe1").addClass("show");
  $(
    ".iframe2, .iframe3, .iframe4, .iframe5, .iframe6, .iframe7, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#send").click(function () {
  $(".iframe2").addClass("show");
  $(
    ".iframe1, .iframe3, .iframe4, .iframe5, .iframe6, .iframe7, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#wallet").click(function () {
  $(".iframe3").addClass("show");
  $(
    ".iframe1,.iframe2, .iframe4, .iframe5, .iframe6, .iframe7, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#Withdraw").click(function () {
  $(".iframe4").addClass("show");
  $(
    ".iframe1, .iframe2, .iframe3, .iframe5, .iframe6, .iframe7, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#bill").click(function () {
  $(".iframe5").addClass("show");
  $(
    ".iframe1, .iframe2, .iframe3, .iframe4, .iframe6, .iframe7, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#settings").click(function () {
  $(".iframe6").addClass("show");
  $(
    ".iframe1, .iframe2, .iframe3, .iframe4, .iframe5, .iframe7, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#History").click(function () {
  $(".iframe7").addClass("show");
  $(
    ".iframe1, .iframe2, .iframe3, .iframe4, .iframe5, .iframe6, .iframe8, .iframe9"
  ).removeClass("show");
});

$("#Payment").click(function () {
  $(".iframe8").addClass("show");
  $(
    ".iframe1, .iframe2, .iframe3, .iframe4, .iframe5, .iframe6, .iframe7, .iframe9"
  ).removeClass("show");
});
$("#help").click(function () {
  $(".iframe9").addClass("show");
  $(
    ".iframe1, .iframe2, .iframe3, .iframe4, .iframe5, .iframe6, .iframe7, .iframe8"
  ).removeClass("show");
});
