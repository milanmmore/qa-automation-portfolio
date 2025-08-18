
import { reverseString } from './01_reverse_string.js';
// Palindrome Check Solution
function isPalindrome(str) {
  // Normalize the string by removing whitespace and converting to lowercase
  str = str.trim().toLowerCase();
  // Check if the string is equal to its reverse
  return str === reverseString(str);
}


