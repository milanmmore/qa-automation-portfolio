
// Reverse a String Solution
function reverseString(str) {
  // TODO: Implement solution
  str = str.trim(); // Remove leading and trailing whitespace
  if (str.length === 0) return ""; // Return empty string if input is empty
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--)
    reversed += str[i]; // Append characters in reverse order
  return reversed; // Return the reversed string
}
// Example usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("  whitespace  ")); // "ecapstihw"
console.log(reverseString("")); // ""
console.log(reverseString("a")); // "a"
console.log(reverseString("12345")); // "54321"
console.log(reverseString("!@#$%^&*()")); // ")(*&^%$#@!"

export { reverseString }; // Exporting the function for use in other modules

