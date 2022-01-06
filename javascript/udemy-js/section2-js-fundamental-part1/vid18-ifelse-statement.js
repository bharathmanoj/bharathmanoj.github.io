const age = 19;

if (age >= 18) {
  console.log("jonas can eligible driving license");
} else {
  const yearleft = 18 - age;
  console.log(`jonas is too young. wait another ${yearleft} years :`);
}

const birthyear = 1999;

let century;
if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
