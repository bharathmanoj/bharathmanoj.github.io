// ARROW FUNCTIONS
const calcage = (birthyear) => 2037 - birthyear;
const age = calcage(1991);
console.log(age);

const yearUntilRetirment = (birthyear) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearUntilRetirment(1991));

const yearUntilRetirment1 = (birthyear1, firstName1) => {
  const age1 = 2037 - birthyear1;
  const retirement1 = 65 - age1;
  return `${firstName1} retires in ${retirement1} Years`;
};

console.log(yearUntilRetirment1(1991, "Jonas"));
console.log(yearUntilRetirment1(1980, "Nick"));
