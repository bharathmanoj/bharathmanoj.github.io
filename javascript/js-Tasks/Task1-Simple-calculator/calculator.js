function result() {
  var x = Number(document.getElementById("input--1").value);
  var y = Number(document.getElementById("input--2").value);
  var z = x + y;

  // addition, Subtraction, Multiplication, Division

  if (document.getElementById("addition").checked) {
    z = x + y;
  } else if (document.getElementById("Subtraction").checked) {
    z = x - y;
  } else if (document.getElementById("Multiplication").checked) {
    z = x * y;
  } else {
    //if (document.querySelector(".Division").checked) {
    z = x / y;
  }

  document.getElementById("sum").innerHTML = "Sum is: " + String(z);
  document.getElementById("sum").style.display = "block";
  document.getElementById("sum").style.margin = "1.8rem 0rem";
  document.getElementById("sum").style.transition = "0.5s";
  document.getElementById("sum").style.fontSize = "1.6rem";
}
