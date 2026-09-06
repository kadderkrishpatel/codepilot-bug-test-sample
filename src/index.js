const { sumArray, average } = require("./utils/math");
const { getDisplayName, isAdult } = require("./utils/user");

const numbers = [10, 20, 30, 40];
console.log("Sum:", sumArray(numbers));
console.log("Average:", average(numbers));

const user = { name: "Krish" };
console.log("Display name:", getDisplayName(user));

// BUG FIX: The previous call was checking isAdult(10) which returns false.
// Adding a check for an adult age to ensure the logic is correctly exercised.
console.log("Is adult (age 20):", isAdult(20));
