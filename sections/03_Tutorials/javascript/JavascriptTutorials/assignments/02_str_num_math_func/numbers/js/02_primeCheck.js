function isPrime(n) {
  if (n <= 1) return false;  // 0 and 1 are not prime numbers
  if (n === 2) return true;  // 2 is the only even prime number
  if (n % 2 === 0) return false; // Exclude all other even numbers

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Try it out:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false