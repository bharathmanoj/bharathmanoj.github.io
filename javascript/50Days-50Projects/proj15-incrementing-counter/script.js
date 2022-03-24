// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   counter.innerText = "0";

//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = target / 200;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });

// Jquery

const $counters = $(".counter");

// $(".counter").each(function (counter) {
$counters.each((counter) => {
  counter.innerText = 0;

  function updateCounter() {
    const target = +counter.attr("data-target");
    // $(this).attr("data-target") + counter;

    const c = +counter.innerText;

    const increment = target / 200;
    // const increment = $(this) / 200;

    // if (c < $(this)) {
    //   counter.innerText = `${Math.ceil(c + increment)}`;
    //   setTimeout(updateCounter, 1);
    // } else {
    //   counter.innerText = $(this);
    // }

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});
