// // function functionname(parameter1, parameter2, ...parameterN) {
// //   functionbody;
// // }
// // functioncall

// // FUNCTION DECLARATION

// function hello() {
//   console.log("Hello everyone!");
// }
// hello();
// hello();

// // LOCAL VARIABLES

// function fname() {
//   var x = 10;
//   x -= 100;
//   console.log(x);
// }
// fname();

// function message() {
//   let message = "hello everyone";
//   let message1 = "hi";
//   let message2 = "hello";
//   let numbers = "1,2,3,4,5,6,7,8,9";
//   console.log(message, message1, message2, numbers);
//   console.log(message);
//   console.log(message1);
//   console.log(message2);
//   console.log(numbers);
// }
// message();

// // OUTER VARIABLES

// let hello = "Manoj";
// function user() {
//   let user = "Hello " + hello;
//   console.log(user);
// }
// user();

// let firstname = "Manoj";
// function username() {
//   firstname = "Manu";
//   let username = "Hello " + firstname;
//   console.log(username);
// }
// console.log(firstname);
// username();
// console.log(firstname);

// let userName = "Manoj";
// console.log(userName);
// function showMessage() {
//   let userName = "Everyone";
//   let message = "Hello, " + userName;
//   console.log(message);
// }
// showMessage();
// console.log(userName);

// // PARAMETERS

// s
// function addnumber(a, b) {
//   var total = a * b;
//   console.log("The total number is : " + total);
// }
// addnumber(2, 5);

// function addnames(name, age, Gender, Nationality) {
//   var total = name + age + Gender + Nationality;
//   console.log("My Profile : " + total);
// }
// addnames("Manoj ", "21 ", "Male ", "Hindu");

// function addnames(
//   name = "Manoj ",
//   age = "21 ",
//   Gender = "Male ",
//   Nationality = "Hindu"
// ) {
//   var total = name + age + Gender + Nationality;
//   console.log("My Profile : " + total);
// }
// addnames();

// function message(name, text = " hello") {
//   console.log(name + text);
// }
// message("Manoj :");

// // ALTERNATIVE DEFAULT PARAMETERS and ANOTHER FUNCTION

// function showMessage(text) {
//   if (text === undefined) {
//     text = "Hello Everyone";
//   }
//   console.log(text);
// }
// showMessage();

// function addnames(name, age, Gender, Nationality) {
//   var total = name + age + Gender + Nationality;
//   console.log("My Profile : " + total);

//   function message(name, text = " hello") {
//     console.log(name + text);
//   }
//   message("Manoj :");
// }
// addnames("Manoj ", "21 ", "Male ", "Hindu");

// // || OPERATOR

// function showMessage(a = 50, b = 100, c = 500) {
//   numbers = a < b || a < c;
//   console.log(numbers);
// }
// showMessage(3, 2, 1);

// // RETURNING A VALUE

// function sum(a, b = 4) {
//   return a + b;
// }

// var result = sum(1);
// console.log(result);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }

// function multiply(a, b = 1) {
//   return a * b;
// }

// var i = multiply(2, 10);
// var j = multiply(3, 10);
// var k = multiply(4, 10);
// console.log(i);
// console.log(j);
// console.log(k);
