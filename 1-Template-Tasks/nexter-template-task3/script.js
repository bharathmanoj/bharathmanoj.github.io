const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", function () {
    cards[i].classList.add("flipcard");
  });
  cards[i].addEventListener("mouseleave", function () {
    cards[i].classList.remove("flipcard");
  });
}
