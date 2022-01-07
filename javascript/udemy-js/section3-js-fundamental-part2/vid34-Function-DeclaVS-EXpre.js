// Function declaration
function calcage1(birthyear) {
  return 2022 - birthyear;
}

const age1 = calcage1(1999);
console.log(age1);

function calcAge1(birthyear) {
  const Age = 2037 - birthyear;
  return Age;
}

const Age = calcAge1(1995);
console.log(Age);

// FUNCTION EXPRESSIONS
const calcage2 = function (birthyear) {
  return 2022 - birthyear;
};

const age2 = calcage2(2000);
console.log(age2);
