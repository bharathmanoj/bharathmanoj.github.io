function ADDLIST() {
  var addList = document.getElementById("list");
  var input = document.getElementById("input");
  var createLiElements = document.createElement("li");
  localStorage.setItem("Todo", "Manoj");
  const name = localStorage.getItem("Todo");
  localStorage.getItem("name");

  createLiElements.setAttribute("id", input.value);
  createLiElements.appendChild(document.createTextNode(input.value));
  addList.appendChild(createLiElements);
}

function REMOVELIST() {
  var addList = document.getElementById("list");
  var input = document.getElementById("input");
  var item = document.getElementById(input.value);
  addList.removeChild(item);
}
