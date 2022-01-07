// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins is the first winner");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("scoreKoalas is the second winner");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("both win the trophy");
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

// const scoreDolphins = (97 + 112 + 83) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins is the first winner");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("scoreKoalas is the second winner");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}
