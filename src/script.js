function calculateSavings(initialAmount) {
  const weeksInYear = 52;
  let totalSavings = 0;

  for (let week = 1; week <= weeksInYear; week++) {
    totalSavings += initialAmount;
    initialAmount++;
  }

  return totalSavings;
}

const initialAmount = parseFloat(prompt("Enter the amount you want to start with in the first week:"));

if (isNaN(initialAmount) || initialAmount < 0) {
  console.log("Invalid input. Please enter a valid positive number.");
} else {
  const result = calculateSavings(initialAmount);
  console.log("Total savings at the end of the year: $" + result.toFixed(2));
}
