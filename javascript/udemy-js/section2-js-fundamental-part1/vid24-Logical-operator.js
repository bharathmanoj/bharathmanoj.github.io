const hasDriversLicense = true;
const hasGoodvision = true;

console.log(hasDriversLicense && hasGoodvision);
console.log(hasDriversLicense || hasGoodvision);
console.log(!hasDriversLicense);

const shoulddrive = hasDriversLicense && hasGoodvision;

if (hasDriversLicense && hasGoodvision) {
  console.log("sara ia able to drive");
} else {
  console.log("someone else should drive...");
}

const istired = false;
console.log(hasDriversLicense || hasGoodvision || istired);
console.log(hasDriversLicense && hasGoodvision && istired);

// if (hasDriversLicense && hasGoodvision && !istired) {
//   console.log("sara ia able to drive");
// } else {
//   console.log("someone else should drive...");
// }
