function groupNumbers() {
  var arr = [1, 2, -4, -6, -8, 9, 7, 3, 10];
  // var arr = Number(document.getElementById("finding-num").value);

  // largest and smallest
  const smallest = Math.min(...arr);
  const largest = Math.max(...arr);

  document.getElementById("smallest-num").innerHTML = "Smallest: " + smallest;
  document.getElementById("largest-num").innerHTML = "Largest: " + largest;

  // Even numbers
  var evenNumbers = arr.filter((number) => number % 2 == 0);
  // console.log("Even numbers " + evenNumbers);
  document.getElementById("even-num").innerHTML =
    "Even numbers =" + evenNumbers;

  // ODD numbers
  var oddNumbers = arr.filter((number) => number % 2 !== 0);
  // console.log("Odd numbers " + oddNumbers);
  document.getElementById("odd-num").innerHTML = "Odd numbers =" + oddNumbers;

  // var smallest = arr[0];
  // var largest = arr[arr.length - 1];

  // document.getElementById("smallest-num").innerHTML = "Smallest: " + smallest;
  // document.getElementById("largest-num").innerHTML = "Largest: " + largest;

  // positive and negative
  var positiveArr = arr.filter((number) => number > 0);
  var negativeArr = arr.filter((number) => number < 0);

  document.getElementById("positive-num").innerHTML =
    "Positive Numbers: " + positiveArr;
  document.getElementById("negative-num").innerHTML =
    "Negative Numbers: " + negativeArr;
}

// var num;
// function fun() {
//   num = parseInt(document.getElementById("num").value);
//   if (num) {
//     // temp = document.getElementById("resPara");
//     // temp.style.display = "block";
//     if (num % 2 == 0)
//       document.getElementById("res").innerHTML = "Even Numbers : " + num;
//     else document.getElementById("res").innerHTML = "Odd Numbers : " + num;
//   }
// }
