// let user = new object();

// var user = {
//   name: "Rajesh",
//   age: 25,
//   gender: "male",
//   // user.likes birds=true; //
//   "likes birds": true,
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.gender);
// delete user.age;
// console.log(user);

// alert(["likes birds"]);

//Square bracktes
// let user = {};
// user["likes birds"] = true;

// console.log(user["likes birds"]);

// delete user["likes birds"];

// let numbers = {};
// numbers[(1, 2, 3, 4, 5)] = true;

// console.log(numbers[(1, 2, 3, 4, 5)]);

// let alphabets = {};
// alphabets["a b c d e f"] = true;

// console.log(alphabets["a b c d e f"]);

// let user = {
//   name: "Manoj",
//   age: 21,
//   gender: "male",
//   nationality: "hindu",
// };

// let key = prompt("What do you want?", "name");

// console.log(user[key]);

// let user = {
//   name: "hello",
//   age: 20,
// };

// let key = "name";
// console.log(user.key); //undefined

// COMPUTED PROPERTIES
// let fruit = prompt("which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5,
// };

// console.log(bag.apple);

// let fruit = prompt("Which fruit to buy?", "grapes");
// let bag = {};

// bag[fruit] = 5;
// console.log(bag[fruit]);

// let fruit = "apple";
// let bag = {
//   [fruit + "Computers"]: 5,
// };

// console.log(bag);

// PROPERTY VALUE SHORTHAND
// function makeUser(name, age, gender) {
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// }

// let user = makeUser("John", 30, "male");

// console.log(user.name);
// console.log(user.age);
// console.log(user.gender);

// let user = {
//   name: "MANOJ",
//   age: "21",
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.gender);

// PROPERTY NAMES LIMITATIONS
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//   for: "hello",
//   let: "hello",
//   return: "hello",
// };

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//   0: "test",
// };

// console.log(obj["0"]);
// console.log(obj[0]);

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__);

//in operator
// let user = {};

// console.log(user.noSuchProperty === undefined);

// let user1 = {
//   name: "manoj",
// };

// console.log(user1.name === undefined);

// let user = {
//   name: "manoj",
//   age: 30,
// };

// console.log("name" in user);
// console.log("hello" in user);

// console.log("name" in user, "hello" in user);

// let obj = {
//   test: undefined,
// };

// console.log(obj.test);

// console.log("test" in obj);

// let obj = {
//   test: undefined,
// };

// console.log(obj.test);

// console.log("test" in obj);

// FOR ..IN
// let user = {
//   name: "manoj",
//   age: 21,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let user = {
//   name: "manoj",
//   age: 21,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user.age);
// }

// let user = {
//   name: "manoj",
//   age: 21,
//   isAdmin: true,
// };

// console.log(user.name, user.age, user.isAdmin);
// for (let key in user) {
//   console.log(key);
// }

// ORDER LIKE AN OBJECT
// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   1: "USA",
//   3: "three",
//   9: "nine",
// };

// for (let code in codes) {
//   console.log(code);
// }

// let codes = {
//   six: "Germany",
//   five: "Switzerland",
//   four: "Great Britain",
//   three: "USA",
//   two: "hello",
//   one: "hello",
// };

// for (let code in codes) {
//   console.log(code);
// }

// console.log(String(Math.trunc(Number("49.3414")))); //remove decimal numbers
// console.log(String(Math.trunc(Number("+3.8498"))));
// console.log(String(Math.trunc(Number("1.3882"))));
// console.log(String(Math.trunc(Number("9.3414"))));
// console.log(String(Math.trunc(Number("+19.8498"))));
// console.log(String(Math.trunc(Number("77.3882"))));
// console.log(String(Math.trunc(Number("23.3414"))));
// console.log(String(Math.trunc(Number("+334.8498"))));
// console.log(String(Math.trunc(Number("112.3882"))));

// let user = {
//   name: "Manoj",
//   Surname: "Bharath",
// };

// user.age = 21;

// for (let prop in user) {
//   console.log(prop);
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   "+1": "USA",
// };

// for (let code in codes) {
//   console.log(+code);
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   "+1": "USA",
//   50: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   1: "USA",
//   3: "three",
//   9: "nine",
// };

// for (let code in codes) {
//   console.log(+code);
// }
