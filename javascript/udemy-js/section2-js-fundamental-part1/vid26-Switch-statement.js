// USING SWITCH
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "Tuesday":
    console.log("Prepare theory videos");
    break;

  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;

  case "Friday":
    console.log("Record videos");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend :D");
    break;

  default:
    console.log("Not a valid day!");
}

// USING IF / ELSE
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
