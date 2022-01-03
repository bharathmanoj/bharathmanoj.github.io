// Variables
// let msg;
// msg = "Hello";

// console.log(msg);

// let user = "manoj",
//   age = "21",
//   gender = "male";

// console.log(user, age, gender);

// let user = "John",
//   age = 25,
//   message = "Hello";

// console.log(user, age, message);

// let user = "Manoj";
// let age = 21;
// let gender = "male";

// console.log(user);
// console.log(age);
// console.log(gender);

// THE OLD VAR
// if (true) {
//   var hello = true;
// }
// console.log(hello);

// if (true) {
//   let hello1 = true;
// }
// console.log(hello1);

// var tolerates redeclarations
// let user;
// let user;

// var user = "Pete";

// console.log(user);

// var user = "Manoj";
// console.log(user);

// difference between let, var, and const
// let x = 5;
// let x = 50;

// console.log(x);

//  var
// var y = 6;
// var y = 7;

// console.log(y);

// CONSTANTS
// const mybirthday = "02.02.1999";

// console.log(mybirthday);

// const text = "hello everyone";
// text = "change";

// console.log(text);

// const x = 50;
// x = x + 10;

// console.log(x);

// EXPRESSIONS
// var x = 7;

// console.log(x);

// var code = 3 + 4;

// console.log(code);

// OPERATORS
// ARITHMETIC OPERATORS

// addition
// var x = 3,
//   y = 12;

// console.log(x + y);

// var x = 18,
//   y = 10;

// console.log(x + y);

// // subtraction
// var x = 3,
//   y = 12;

// console.log(x - y);

// var x = 17,
//   y = 5;

// console.log(x - y);

// // multiplication
// var x = 3,
//   y = 12;

// console.log(x ** y);

// var x = 25,
//   y = 28;

// console.log(x * y);

// // division = a / b;
// var x = 12,
//   y = 3;

// console.log(x / y);

// var x = 40,
//   y = 65;

// console.log(x + y);

// // modulus = a % b;
// var x = 12,
//   y = 3;

// console.log(x % y);

// var x = 120,
//   y = 50;

// console.log(x % y);

// //increment
// var mynumber = 42;

// console.log(mynumber + 1);
// console.log(1 + mynumber);

// console.log(mynumber++);
// console.log(mynumber);

// console.log(++mynumber);
// console.log(mynumber);

// var num1 = ++mynumber + mynumber++; //43 + 43 =86
// var num2 = mynumber++ + ++mynumber; //42 + 44 = 86

// console.log(num1);
// console.log(num2);

// DECREMENT
// var mynumber = 42;

// console.log(mynumber - 1);
// console.log(1 - mynumber);

// console.log(mynumber--);
// console.log(mynumber);

// console.log(--mynumber);
// console.log(mynumber);

// var num1 = --mynumber + mynumber--; //42 + 40 =82
// var num2 = mynumber-- + --mynumber; //41 + 41 = 82

// console.log(num1);
// console.log(num2);

//Assigment Operator
// let a = 10;
// a += 20;

// console.log(a);

// let m = "hello";
// m += "everyone";

// console.log(m);

// let a = 10;
// a *= 20;

// console.log(a);

// let a = 10;
// a /= 20;

// console.log(a);

// STRING OPERATOR
// var mystring = "hello";
// mystring += "everyone";

// console.log(mystring);

// console.log("hello" + "everyone");

// LOGICAL OPERATOR
// AND
// var a1 = true && true;
// var a2 = true && false;
// var a3 = false && true;
// var a4 = false && 3 == 4;
// var a5 = "Cat" && "Dog";
// var a6 = false && "Cat";
// var a7 = "Cat" && false;

// OR

// var o1 = true || true;
// var o2 = false || true;
// var o3 = true || false;
// var o4 = false || 3 == 4;
// var o5 = "Cat" || "Dog";
// var o6 = false || "Cat";
// var o7 = "Cat" || false;

for (let i = 1; i <= 100; i++) {
  let primenumber = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      primenumber = 1;
    }
  }

  if (i > 1 && primenumber == 0) {
    console.log(i);
  }
}
