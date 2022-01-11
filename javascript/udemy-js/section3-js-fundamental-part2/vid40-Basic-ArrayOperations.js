const friends = ["michael", "Steven", "Peter"];
const newlength = friends.push("Jay"); //add last

console.log(friends);
console.log(newlength);

friends.unshift("john"); //add first
console.log(friends);

// Remove elements
friends.pop(); //remove last
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //remove first
console.log(friends);

const shifted = friends.shift();
console.log(shifted);

friends.push("Manoj");
friends.push("Nick");
console.log(friends);

console.log(friends.indexOf("Manoj"));
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Hello"));

// ES6 METHOD AND ITS CALLED INCLUDES
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("steven"));
console.log(friends.includes("Manoj"));
console.log(friends.includes(23));

// Nothing will happen because peter is not in array
if (friends.includes("peter")) {
  console.log("you have a friend call Peter");
}

if (friends.includes("Steven")) {
  console.log("you have a friend call Steven");
}
