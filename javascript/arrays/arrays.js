// //ARRAYS
// let names = ["Raju", "Sandeep", "Karthik", "Akhil", "hi"];

// // //
// // alert(names[0]);
// // alert(names[1]);
// // alert(names[2]);
// // alert(names[3]);

// alert((names[2] = "sandeep"));
// alert((names[4] = "hi"));

// // total arrays length
// alert(names.length);

// // show whole arrays
// alert(names);

// // mix values
// let arr = [
//   "apple",
//   { name: "Kishore" },
//   true,
//   function () {
//     alert("hello");
//   },
// ];

// alert(arr[1].name);
// arr[3]();

// METHODS//////////////////////////
// POP;
// let fruits = ["apple", "grapes", "orange", "pear"];

// alert(fruits.pop());
// alert(fruits);

// PUSH
// let fruits = ["apple", "orange", "pear"];

// fruits.push("Mango");
// alert(fruits);

// SHIFT
// let fruits = ["Apple", "orange", "pear", "grapes"];

// alert(fruits.shift());
// alert(fruits.shift());
// alert(fruits);

// UNSHIFT
// let fruits = ["apple", "grapes", "orange", "pear"];

// fruits.unshift("banana");
// alert(fruits);

//add push and unshift multiple elements at once
// let fruits = ["orange"];

// fruits.push("apple", "grapes");
// fruits.unshift("pear", "banana");
// alert(fruits);

// pop and shift
// let fruits = ["orange", "apple", "grapes", "pear", "banana"];

// fruits.pop(); //remove banana
// fruits.shift(); //remove orange
// alert(fruits);

// INTERNALS
// let fruits = ["banana"];
// let arr = fruits;

// alert(arr === fruits);
// arr.push("apple");
// alert(fruits);

// LOOPS
// for
// let arr = ["apple", "orange", "banana"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = ["apple", "orange", "banana"];

// for (let i = 0; i <= 1; i++) {
//   console.log(arr[i]);
// }

let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= 4; i++) {
  console.log(arr[i]);
}
// we have to remove variable and array
// for (let m = 1; m <= 6; m++) {
//   console.log("Question", m);

//   for (let j = 1; j <= 4; j++) {
//     console.log("Answer", j);
//   }
// }

// for..of
// let arr = [0, 1, 2, 3, 4, 5];
// for (let element of arr) {
//   alert(arr);
// }

// for..in
// let numbers = [0, 1, 2, 3, 4, 5];
// for (let element in numbers) {
//   alert(numbers);
// }

// length
// let fruits = [];
// fruits[8] = "hello";
// alert(fruits.length);

// let numbers = [1, 2, 3, 4, 5];

// numbers.length = 4;
// alert(numbers);

// numbers.length = 5;
// alert(numbers[3]);

// NEW ARRAYS/////////////////////////
// let arr = new Array("apple", "hello", "everyone");

// let arr = new Array(100);

// alert(arr[0]); //undefined

// alert(arr.length);

// MULTIDIMENTIONAL ARRAYS //////////
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// alert(matrix[0][0]);
// alert(matrix[0][1]);
// alert(matrix[0][2]);
// alert(matrix[1][0]);
// alert(matrix[1][1]);
// alert(matrix[1][2]);
// alert(matrix[2][0]);
// alert(matrix[2][1]);
// alert(matrix[2][2]);

// let matrix = [
//   [1, 3],
//   [4, 6],
//   [7, 8],
// ];

// console.log(matrix[1][1]);

// let matrix = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
// console.log(matrix[2][3]);

// TO STRING
// let arr = [1, 2, 3];

// alert(arr); // 1,2,3
// alert(String(arr) === "1,2,3");

// alert([] + 1);
// alert([1] + 1);
// alert([1, 2] + 1);
// alert([1, 2, 3] + 1); //1,2,31

// alert("" + 1);
// alert("1" + 1);
// alert("1,2" + 1);
// alert("1,2,3" + 1);

// let arr = ["hello"];

// alert(arr); // hello
// alert(String(arr) === "hello");

// DONT COMPARE ARRAYS WITH ==
// let arr = [1, 2, 3];

// alert([] == []);
// alert([0] == [0]);

// alert(0 == []);
// alert("0" == []);

// alert(0 == "");

// alert("0" == "");

// let person = [];

// person[99999] = 5;
// person.age = 25;
