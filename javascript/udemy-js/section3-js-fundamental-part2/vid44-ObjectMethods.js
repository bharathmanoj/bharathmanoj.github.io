const jonas = {
  FirstName: "jonas",
  LastName: "Nick",
  birthyear: 1991,
  job: "teacher",
  Friends: ["michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcage: function (birthyear) {
    return 2037 - birthyear;
  },
};

console.log(jonas.calcage(1991));
console.log(jonas["calcage"](1991));
