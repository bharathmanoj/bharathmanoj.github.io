function validate() {
  var username = document.getElementById("uname");
  var password = document.getElementById("pass");

  if (username.value.trim() == "" || password.value.trim() == "") {
    alert("No blank values allowed");
    return false;
  } else {
    return true;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// Numerical input
function numbervalid() {
  let x = document.getElementById("number").value;
  let text;
  if (isNaN(x) || x < 1 || x > 40) {
    text = "Not a valid input";
  } else {
    text = "Valid input";
  }
  console.log(text);
}
