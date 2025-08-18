
// Find Longest Word in a sentence Solution
function findLongestWord(input) {
  // Split the input into words
  const words = input.split(" ");
  // Find the longest word
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
// Example usage
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
console.log(findLongestWord("JavaScript is a versatile language")); // "versatile"
console.log(findLongestWord("  whitespace  ")); // "whitespace"
console.log(findLongestWord("")); // ""
console.log(findLongestWord("a")); // "a"
console.log(findLongestWord("12345 67890")); // "67890"
