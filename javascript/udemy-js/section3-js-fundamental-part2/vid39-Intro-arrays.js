const frd1 = "Michael";
const frd2 = "Steven";
const frd3 = "Peter";

const frds = ["Michael", "Steven", "Peter"];

console.log(frds);

console.log(frds[0]);
console.log(frds[2]);

console.log(frds.length);
console.log(frds[frds.length - 2]);

frds[2] = "jay"; //replace peter to jay
console.log(frds);

const firstName = "jonas";
const jonas = [firstName, "nick", 2037 - 1991, "teacher", frds];

console.log(jonas);
console.log(jonas.length);

// // Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
