
// Count Vowels Solution
function countVowels(input) {
  // TODO: Implement solution
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of input) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example usage
console.log(countVowels("hello")); // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("  whitespace  ")); // 4
console.log(countVowels("")); // 0
console.log(countVowels("a")); // 1
console.log(countVowels("12345")); // 0
console.log(countVowels("!@#$%^&*()")); // 0
