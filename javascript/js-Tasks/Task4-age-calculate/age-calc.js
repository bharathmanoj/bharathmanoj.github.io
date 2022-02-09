document.querySelector("#sumbit").addEventListener("click", function () {
  const update = function () {
    let dob = document.querySelector("#dob").value,
      day = new Date(dob),
      time = day.getTime(),
      today = new Date(),
      timenow = today.getTime(),
      value = timenow - time,
      sec = Math.floor(value / 1000),
      min = Math.floor(value / (1000 * 60));

    document.getElementById("min").innerHTML = "Age in Minutes = " + min;
    document.getElementById("min").style.fontSize = "1.4rem";
    document.getElementById("min").style.paddingBottom = "2rem";
    document.getElementById("min").style.transition = "0.7s";

    document.getElementById("sec").innerHTML = "Age in Seconds = " + sec;
    document.getElementById("sec").style.fontSize = "1.4rem";
    document.getElementById("sec").style.transition = "0.7s";
  };
  setInterval(update, 1000);
});
