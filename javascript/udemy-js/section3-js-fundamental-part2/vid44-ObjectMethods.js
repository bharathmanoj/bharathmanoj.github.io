const jonas = {
  FirstName: "jonas",
  LastName: "Nick",
  birthyear: 1991,
  job: "teacher",
  Friends: ["michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcage: function (birthyear) {
  //   return 2037 - birthyear;
  // },

  // calcage: function () {
  //   console.log(this);
  //   return 2037 - this.birthyear;
  // },

  calcage: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this.FirstName} is a ${this.calcage()} -years old ${
      jonas.job
    } ,and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcage());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
