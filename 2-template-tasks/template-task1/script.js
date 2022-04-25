const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// cards hover

const card = document.querySelectorAll("#card");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseenter", function () {
    card[i].classList.add("card-grown");
  });
  card[i].addEventListener("mouseleave", function () {
    card[i].classList.remove("card-grown");
  });
}

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];

  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
});

obs.observe(sectionHeroEl);
