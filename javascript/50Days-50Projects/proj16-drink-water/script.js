// const smallCups = document.querySelectorAll(".cup-small");
// const liters = document.getElementById("liters");
// const percentage = document.getElementById("percentage");
// const remained = document.getElementById("remained");

// smallCups.forEach((cup, idx) => {
//   cup.addEventListener("click", () => highlightCups(idx));
// });

// function highlightCups(idx) {
//   if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
//   else if (
//     smallCups[idx].classList.contains("full") &&
//     !smallCups[idx].nextElementSibling.classList.contains("full")
//   ) {
//     idx--;
//   }

//   smallCups.forEach((cup, idx2) => {
//     if (idx2 <= idx) {
//       cup.classList.add("full");
//     } else {
//       cup.classList.remove("full");
//     }
//   });

//   updateBigCup();
// }

// function updateBigCup() {
//   const fullCups = document.querySelectorAll(".cup-small.full").length;
//   const totalCups = smallCups.length;

//   if (fullCups === 0) {
//     percentage.style.visibility = "hidden";
//     percentage.style.height = 0;
//   } else {
//     percentage.style.visibility = "visible";
//     percentage.style.height = `${(fullCups / totalCups) * 330}px`;
//     percentage.innerText = `${(fullCups / totalCups) * 100}%`;
//   }

//   if (fullCups === totalCups) {
//     remained.style.visibility = "hidden";
//     remained.style.height = 0;
//   } else {
//     remained.style.visibility = "visible";
//     liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
//   }
// }

// // jquery

// $(".cup-small").click(function () {
//   $(this).addClass("full");
//   $("#liters").text("1.75L");
//   $("#percentage")
//     .css("visibility", "visible")
//     .css("height", "41.25px")
//     .text("12.5%");

//   $(".cup-small").click(function () {
//     $("#liters").text("1.5L");
//     $("#percentage")
//       .css("visibility", "visible")
//       .css("height", "82.2px")
//       .text("25%");
//   });
// });

const smallCups = document.querySelectorAll(".cup-small");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (idx === 7 && $(".cup-small")[idx].classList.contains("full")) idx--;
  else if (
    $(".cup-small")[idx].classList.contains("full") &&
    !$(".cup-small")[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = $(".cup-small.full").length;

  const totalCups = $(".cup-small").length;

  if (fullCups === 0) {
    $("#percentage").css("visibility", "hidden");
    $("#percentage").css("height", "0");
  } else {
    $("#percentage").css("visibility", "visible");
    $("#percentage").css("height", `${(fullCups / totalCups) * 330}px`);
    $("#percentage").text(`${(fullCups / totalCups) * 100}%`);
  }

  if (fullCups === totalCups) {
    $("#remained").css("visibility", "hidden").css("height", "0");
  } else {
    $("#remained").css("visibility", "visible");
    $("#liters").text(`${2 - (250 * fullCups) / 1000}L`);
  }
}
