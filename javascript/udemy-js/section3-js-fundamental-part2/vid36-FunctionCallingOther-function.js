const cutpieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, Oranges) {
  const applepieces = cutpieces(apples);
  const orangepieces = cutpieces(Oranges);

  const juice = `Juice with ${applepieces} pieces of apple and ${orangepieces} pieces of oranges`;
  return juice;
};

console.log(fruitProcessor(2, 3));
