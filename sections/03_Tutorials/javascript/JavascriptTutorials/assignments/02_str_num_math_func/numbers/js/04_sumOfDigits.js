// JavaScript solution for Sum of Digits

function sumOfDigits(num) {
  // TODO: implement solution
  if (num < 0) return undefined; // Handle negative numbers
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // Add the last digit to sum
    num = Math.floor(num / 10); // Remove the last digit
  }
  return sum; // Return the total sum of digits
}

// Example usage
console.log(sumOfDigits(123));  // 6
console.log(sumOfDigits(4567)); // 22
console.log(sumOfDigits(-123)); // undefined
console.log(sumOfDigits(0));    // 0
console.log(sumOfDigits(8));    // 8


