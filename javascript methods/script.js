// //Reduce Method

let array = [1, 2, 3, 4, 5, 6, 7];
// let array = ["H", "E", "L", "L", "O", "E", "V", "E", "R", "Y", "O", "N", "E"];

var numbers = array.reduce(function (x, y) {
  x = x + y;
  return x;
});

console.log(numbers); //output: 28
console.log(array);

console.log(maxvalue); //output: 7
console.log(array);

Reduce Right Method

const array = ["T", "P", "I", "R", "C", "S", "A", "V", "A", "J"];

const numbers = array.reduceRight(function (a, b) {
  a = a + b;
  return a;
});

console.log(numbers); //output: JAVASCRIPT
console.log(array);

// REVERSE METHOD

const arrNumbers = [10, 20, 30, 40, 50];

const newArr = arrNumbers.reverse();

console.log(newArr); //Output: [50, 40, 30, 20, 10]

// SHIFT METHOD

const arrShift = [400, 2, 54, 52, 3, 532, 43, 23];
const results = arrShift.shift();

console.log(results); //output:  400
console.log(arrShift); //output:  [2, 54, 52, 3, 532, 43, 23]

// SLICE METHOD

const arrSlice = [1, 2, 3, 4, 5, 6];

const newArraySlice = arrSlice.slice(3);
// const newArraySlice = arrSlice.slice(-5);
// const newArraySlice = arrSlice.slice(2, 5);

console.log(newArraySlice); //output: [4, 5, 6]
console.log(arrSlice);

// SOME METHOD

const arrSome = [10, 30, 60, 20, 99, 130];

const newSome = arrSome.some(function (n) {
  return n > 100;
});

console.log(newSome); //output: true
console.log(arrSome);

// SORT METHOD

const arrSort = [
  "ravi",
  "Siva",
  "Lokesh",
  "Arun",
  "arun",
  34,
  432,
  2,
  3232,
  100,
  true,
  "zero",
];

const newArrSort = arrSort.sort();

console.log(arrSort); //output:  [100, 2, 3232, 34, 432, 'Arun', 'Lokesh', 'Siva', 'arun', 'ravi', true, 'zero']

SPLICE METHOD

const arrSplice = [12, 10, 32, 45, 54, 43, 23, 22, 44];

const newArrSPlice = arrSplice.splice(2, 2);

console.log(newArrSPlice); //output:  [32, 45]
console.log(arrSplice); //output:  [12, 10, 54, 43, 23, 22, 44]

// toString Method

const arrString = [123, 23, "hi", "hello"];
const newArrString = arrString.toString();

console.log(newArrString);//output:  123,23,hi,hello

// ToLocalstring Method

const localString = 123456;

const result = localString.toLocaleString();
// const result = localString.toLocaleString("en-US");
// const result = localString.toLocaleString("en-IN");
// const result = localString.toLocaleString("fr-FR");

console.log(result); //123,456

// UNSHIFT METHOD

const arrUnshift = [400, 2, 54, 52, 3, 532, 43, 23];
const results = arrUnshift.unshift("2000");

console.log(results); //output:  9
console.log(arrUnshift); //output:   ['2000', 400, 2, 54, 52, 3, 532, 43, 23]
