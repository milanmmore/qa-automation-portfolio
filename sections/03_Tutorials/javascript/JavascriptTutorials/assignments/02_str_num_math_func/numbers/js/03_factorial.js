// JavaScript solution for Factorial

function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-1)); // undefined


