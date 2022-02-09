function ADDLIST() {
  var addList = document.getElementById("list");
  var input = document.getElementById("input");
  var createLiElements = document.createElement("li");

  createLiElements.setAttribute("id", input.value);
  createLiElements.appendChild(document.createTextNode(input.value));
  addList.appendChild(createLiElements);
}

// Creating a function to remove item from list
function REMOVELIST() {
  // Declaring a variable to get select element
  var addList = document.getElementById("list");
  var input = document.getElementById("input");
  var item = document.getElementById(input.value);
  addList.removeChild(item);
}
