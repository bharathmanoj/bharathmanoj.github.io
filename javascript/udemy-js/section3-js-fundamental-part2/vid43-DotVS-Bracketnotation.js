const jonas = {
  FirstName: "jonas",
  LastName: "Nick",
  Age: 2037 - 1991,
  job: "teacher",
  Friends: ["michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.LastName);
console.log(jonas["LastName"]);

const namekey = "Name";
console.log(jonas["First" + namekey]);
console.log(jonas["Last" + namekey]);

const interestedIn = prompt(
  "What do u want to know about Jonas? Choose between Firstname,Lastname,Age,job,and Friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between Firstname,Lastname,Age,job,and Friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.FirstName} has ${jonas.Friends.length} friends, and his best friend is called ${jonas.Friends[0]}`
);
