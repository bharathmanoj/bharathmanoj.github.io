// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const markweightmass = 78;
const heightmark = 1.69;
const BMIMark = markweightmass / heightmark ** 2;

console.log(BMIMark);

const johnweightmass = 92;
const heightjohn = 1.95;
const BMIjohn = johnweightmass / (heightjohn * heightjohn);

console.log(BMIjohn);

const markHigherBMI = BMIMark >= BMIjohn;

console.log(markHigherBMI);

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
const markweightmass1 = 95;
const heightmark1 = 1.88;
const BMIMark1 = markweightmass1 / heightmark1 ** 2;

console.log(BMIMark1);

const johnweightmass1 = 85;
const heightjohn1 = 1.76;
const BMIjohn1 = johnweightmass1 / (heightjohn1 * heightjohn1);

console.log(BMIjohn1);

const markHigherBMI1 = BMIMark1 >= BMIjohn1;

console.log(markHigherBMI1);
