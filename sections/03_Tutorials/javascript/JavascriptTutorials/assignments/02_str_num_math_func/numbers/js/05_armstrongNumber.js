// JavaScript solution for Armstrong Number
// Armstrong Number (or Narcissistic Number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. 
// For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

function isArmstrongNumber(input) {
  const digits = String(input).split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  return sum === input; // Check if the sum of digits raised to the power equals the original number
}

// Example usage
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false
console.log(isArmstrongNumber(0)); // true
console.log(isArmstrongNumber(1)); // true
console.log(isArmstrongNumber(10)); // false

