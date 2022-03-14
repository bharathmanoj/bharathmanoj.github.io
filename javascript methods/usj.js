//Reduce Method

let array = [1, 2, 3, 4, 5, 6, 7];
// let array = ["H", "E", "L", "L", "O", "E", "V", "E", "R", "Y", "O", "N", "E"];

var numbers = array.reduce(function (x, y) {
  x = x + y;
  return x;
});

console.log(numbers); //output: 28
console.log(array);

// Reduce Right Method

// const array = ["T", "P", "I", "R", "C", "S", "A", "V", "A", "J"];

// const numbers = array.reduceRight(function (a, b) {
//   a = a + b;
//   return a;
// });

// console.log(numbers); //output: JAVASCRIPT
// console.log(array);

// var maxvalue = array.reduce(function (x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return (x = y);
//   }
// });

console.log(maxvalue); //output: 7
console.log(array);
