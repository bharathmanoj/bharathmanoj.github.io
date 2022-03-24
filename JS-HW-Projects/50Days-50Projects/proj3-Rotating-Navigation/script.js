// const open = document.getElementById("open");
// const close = document.getElementById("close");
// const container = document.querySelector(".container");

// open.addEventListener("click", () => container.classList.add("show-nav"));

// close.addEventListener("click", () => container.classList.remove("show-nav"));
// Explore about the types of function declaration

//ROTATING NAVIGATION JAVASCRIPT TO JQUERY

$("#open").click(function () {
  $(".container").addClass("show-nav");
});

$("#close").click(function () {
  $(".container").removeClass("show-nav");
});
