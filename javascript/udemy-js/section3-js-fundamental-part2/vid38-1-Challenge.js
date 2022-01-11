const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// test1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkwinner = function (avgdolphins, avgkoalas) {
  if (avgdolphins >= 2 * avgkoalas) {
    console.log(`Dolphins win ${avgdolphins} vs. ${avgkoalas}`);
  } else if (avgkoalas >= 2 * avgdolphins) {
    console.log(`koalas win ${avgkoalas} vs. ${avgdolphins} `);
  } else {
    console.log("No team wins...");
  }
};

checkwinner(scoreDolphins, scoreKoalas);

checkwinner(576, 111);

// Test 2
const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

console.log(scoreDolphins1, scoreKoalas1);
checkwinner(scoreDolphins1, scoreKoalas1);
