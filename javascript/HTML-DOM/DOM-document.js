function getHtml() {
  var Element = document.getElementById("demo");
  Element.innerHTML = "HELLO EVERYONE";
  Element.style.color = "red";
  Element.style.backgroundColor = "black";
  Element.style.padding = "1rem";
  Element.style.fontSize = "2rem";
  Element.style.fontFamily = "sans-serif";
}
function ptag() {
  var i;
  for (i = 0; i <= p.length; i++);
  {
    document.getElementsByTagName("p").style.backgroundColor = "red";
  }
}

// document.getElementsByTagName("p").style.backgroundColor = "red";
// Adding and Deleting Elements

// CREATE ELEMENTS
function gethtml() {
  var Element = document.createElement("ul");
  console.log(Element);
  function gethtml() {
    var Element2 = document.createElement("li");
    Element2.innerHTML = "hello";

    console.log(Element2);
  }
  gethtml();
}
gethtml();

var Element3 = document.createElement("h1");

Element3.setAttribute("class", "heading1");
Element3.innerHTML = "HELLO EVERYONE";
Element3.setAttribute("id", "hello");

var Element4 = document.createElement("h2");

Element4.setAttribute("class", "heading2");
Element4.innerHTML = "HELLO EVERYONE";
Element4.setAttribute("id", "hello-everyone");

var Element5 = document.createElement("h3");

Element5.setAttribute("class", "heading3");
Element5.innerHTML = "HELLO EVERYONE";
Element5.setAttribute("id", "hi");

// console.log(Element3, Element4, Element5);
console.log(Element3);
console.log(Element4);
console.log(Element5);

// REMOVE ELEMENTS
function removeelement() {
  var elementremove = document.getElementById("ord-list");
  elementremove.remove();
}
