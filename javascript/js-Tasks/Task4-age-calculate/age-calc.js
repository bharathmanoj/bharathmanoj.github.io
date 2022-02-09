// // document.querySelector("#done").addEventListener("click", function () {
// function bttn() {
//   let birthday = document.getElementById("birthday").value;
//   var today = new Date();
//   var birthDate = new Date(birthday);
//   console.log(today, birthDate);
//   //   bday_val = bday.getTime();
//   //   today = new Date();
//   //   now = today.getTime();
//   //   value = now - bday_val;
//   //   var_sec = Math.floor(value / 1000);
//   //   var_min = Math.floor(value / (1000 * 60));
//   //   var_hour = Math.floor(value / (1000 * 60 * 60));
//   //   var_day = Math.floor(value / (1000 * 60 * 60 * 24));
//   //   var_week = Math.floor(value / (1000 * 60 * 60 * 24 * 7));
//   //   var_month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375));
//   //   var_year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

//   //   let insert = function (x, y) {
//   //     document.querySelector(x).innerHTML = y;
//   //   };

//   //   insert("#minutes", var_min + "minutes");
//   //   insert("#seconds", var_sec + "seconds");
//   //   insert("#year", var_sec + "year");
//   //   insert("#month", var_sec + "month");
//   //   insert("#week", var_sec + "week");
//   //   insert("#day", var_sec + "day");
//   //   insert("#hour", var_sec + "hour");
// }
// // setInterval(update, 1000);
// // });

// function getAge() {
//   var birth_date = new Date("Feb, 6, 2022");

//   // var years, months, days, hours, minutes, seconds;
//   var ageCount = document.getElementById("counter");
//   setInterval(function () {
//     var current_date = new Date();
//     // var YearDiff = current_date.getYear() - birth_date.getYear();
//     // var monthDiff = current_date.getMonth() - birth_date.getMonth();
//     // var daysDiff = current_date.getDate() - birth_date.getDate();
//     // var hoursDiff = current_date.getHours() - birth_date.getHours();
//     var minDiff = current_date.getMinutes() - birth_date.getMinutes();
//     var secDiff = current_date.getSeconds() - birth_date.getSeconds();

//     ageCount.innerHTML =
//       // YearDiff +
//       // " Years " +
//       // monthDiff +
//       // " Months " +
//       // daysDiff +
//       // " Days " +
//       // hoursDiff +
//       // " Hours " +
//       minDiff + " Minutes " + secDiff + " Seconds";

//     // document.getElementById("counter").ageCount.innerHTML =
//     //   "Age in minutes = " + minDiff;
//   }, 500);
// }

// function getAge(dateString) {
//   var ageInMilliseconds = new Date() - new Date(dateString);
//   return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
// }
// console.log(getAge("1997-04-23"));

var secondsInAMinute = 60,
  minutesInAnHour = 60,
  hoursInADay = 24,
  daysInAYear = 364.25;
var days, hours, minutes, seconds, validateAge;

function calculateMyAge() {
  var validateAge = Number(document.getElementById("validateAge").value);
  // var validateAge = isNumber(age);

  // if (age == null || age == "") {
  //   // document.getElementById("error").style.opacity = "1";
  //   // document.getElementById("error").innerHTML = "Please enter your age!";
  //   // setTimeout(function () {
  //   //   // document.getElementById("error").style.opacity = "0";
  //   // }, 3000);
  // }

  // days = age * daysInAYear;
  // document.getElementById("days").innerHTML = days;

  // hours = age * hoursInADay * daysInAYear;
  // document.getElementById("hours").innerHTML = hours;

  minutes = validateAge * minutesInAnHour * hoursInADay * daysInAYear;
  document.getElementById("minutes").innerHTML = minutes;

  seconds =
    validateAge *
    secondsInAMinute *
    minutesInAnHour *
    hoursInADay *
    daysInAYear;
  document.getElementById("seconds").innerHTML = seconds;
}
