function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    total += numbers[i];
  }
  return total;
}

function average(numbers) {
  return sumArray(numbers) / numbers.length;
}

module.exports = { sumArray, average };
