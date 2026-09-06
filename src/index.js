const { sumArray, average } = require("./utils/math");
const { getDisplayName, isAdult } = require("./utils/user");

const numbers = [10, 20, 30, 40];
console.log("Sum:", sumArray(numbers));
console.log("Average:", average(numbers));

const user = { name: "Krish" };
console.log("Display name:", getDisplayName(user));

console.log("Is adult (age 10):", isAdult(10));
