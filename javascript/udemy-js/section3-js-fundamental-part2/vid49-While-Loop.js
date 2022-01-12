//ONCE COMING FROM THE FOR LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR LOOP: Lifting weight repetition${rep}`);
}

// ONCE COMING FROM THE WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE LOOP: Lifting weight repetition${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 2) + 1;
console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }
