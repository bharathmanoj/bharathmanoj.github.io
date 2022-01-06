const age = 1;
if (age === 18) {
  console.log("You just become an adult: D (strict)");
} else {
  console.log("You just become an adult: D (loose)");
}

const favourite = Number(prompt("What's your favourite number?")); //converting string to number

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //'23'==23 //23===23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 10) {
  console.log("10 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 10");
}

if (favourite !== 23) {
  console.log("why not 23?");
}
