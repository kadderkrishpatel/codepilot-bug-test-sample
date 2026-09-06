function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function average(numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  return sumArray(numbers) / numbers.length;
}

module.exports = { sumArray, average };
