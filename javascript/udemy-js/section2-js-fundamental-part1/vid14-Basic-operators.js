// BASIC OPERATORS
// MATHEMATICAL, COMPARISON, LOGICAL, ASSIGNMENT OPERATORS AND MANY MORE

// MATHEMATICAL OPERATORS
const myage = 2022 - 1999;
console.log(myage);

const now = 2037;
const agejonas = now - 1991;
const agesara = now - 2018;

console.log(agejonas, agesara);
console.log(agejonas * 2, agejonas / 10, 2 ** 3);
// agejonas: 46+46=92, agejonas: 46/10=4.6
//2**3 means 2 to the power of 3=2*2*2

const firstname = "Hello";
const lastname = "Jonas";
console.log(firstname + " " + lastname);

// ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10;
x *= 4;
x++; //x = x + 1;
++x;
--x;
x--;
console.log(x);

// COMPARISON OPERATORS
console.log(agejonas > agesara); // >, <, >=, <=
console.log(agesara >= 18);

const isFullAge = agesara >= 18;

console.log(now - 1991 > now - 2019);
