function ADDLIST() {
  var addList = document.getElementById("list");
  var input = document.getElementById("input");
  var createLiElements = document.createElement("li");
  var Todo = document.getElementById("input").value;

  createLiElements.setAttribute("id", input.value);
  createLiElements.appendChild(document.createTextNode(input.value));
  addList.appendChild(createLiElements);
  localStorage.setItem("Todo", "Manoj");
  localStorage.getItem(Todo);
}

function REMOVELIST() {
  var addList = document.getElementById("list");
  var input = document.getElementById("input");
  var item = document.getElementById(input.value);
  addList.removeChild(item);
}
