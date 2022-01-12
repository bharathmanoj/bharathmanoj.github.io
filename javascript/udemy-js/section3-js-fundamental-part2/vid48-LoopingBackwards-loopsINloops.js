const jonas = [
  "jonas",
  "Nick",
  2037 - 1991,
  "teacher",
  ["michael", "Peter", "Steven"],
];

//prev video looped we started with index 0, 1, 2, 3, 4
// Now in this video loop we start with index 4, 3, 2, 1, 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// loop in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting exercise${exercise}-----`);

  for (let rep = 1; rep < 7; rep++) {
    console.log(`Lifting weight repetition${rep}`);
  }
}
