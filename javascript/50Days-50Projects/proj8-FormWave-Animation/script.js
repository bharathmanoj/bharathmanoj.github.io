// const labels = document.querySelectorAll(".form-control label");

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });

// JQUERY

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// $(".form-control .label").mousedown(function () {
//   $(".form-control .label").each(function () {
//     $(this).split("");
//     $(this).map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     );

//     $(this).join("");
//   });
// });

// Split
// let manoj = "hello, world, again";

// manoj.split(",", 1);

// const msg = "yes, you can do it ";

// console.log(msg[0]);

// let arr = msg.split(" ");
// console.log(arr);

// let arr2 = msg.split(" ", 2);
// console.log(arr2);

// console.log("".split()); //with out passing splitter

// console.log("".split("")); //here passing splitter

// // Join
// const countries = ["Canada", "USA", "India"];

// const res = countries.join(", ");

// console.log("I want to visit " + res);

// // map
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// // const numbersdouble = numbers.map(double);

// // function double(value) {
// //   return value * 2;
// // }

// const numbersdouble = numbers.map(multiply);

// function multiply(value) {
//   return value * 3;
// }

// console.log(numbersdouble);
