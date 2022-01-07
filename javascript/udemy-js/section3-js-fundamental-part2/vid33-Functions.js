function logger() {
  console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, Oranges) {
  console.log(apples, Oranges);
  const juice = `Juice with ${apples} apples and ${Oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// We used to convert a string to a number
const num = "23";

console.log(typeof num);

const num1 = Number("23");

console.log(num1);
