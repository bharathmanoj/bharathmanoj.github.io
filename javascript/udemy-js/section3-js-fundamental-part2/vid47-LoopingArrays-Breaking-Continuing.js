const jonas = [
  "jonas,",
  "Nick",
  2037 - 1991,
  "teacher",
  ["michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //filling types array
  // types[i] = typeof jonas[i];

  // another way filling types array
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i = i + 1) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// CONTINUE AND BREAK\
// CONTINUE
//only get strings not a numbers

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

// BREAK

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
