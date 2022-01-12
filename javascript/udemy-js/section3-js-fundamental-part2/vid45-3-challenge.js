const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullname: "John smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// John Smith BMI (28.3) is higher than Mark Miller's (23.9)!

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullname}'s BMI ${john.bmi} is higher than ${mark.fullname}'s BMI${john.bmi}`
  );
}
