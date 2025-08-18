
// Replace Spaces in string with hyphens Solution
function replaceSpaces(input) {
  return input.replace(/ /g, "-");  
}

// Example usage
console.log(replaceSpaces("hello world")); // "hello-world"
console.log(replaceSpaces("JavaScript is fun")); // "JavaScript-is-fun"
console.log(replaceSpaces("  leading and trailing spaces  ")); // "-leading-and-trailing-spaces-"
console.log(replaceSpaces("")); // ""
console.log(replaceSpaces("a b c")); // "a-b-c"
console.log(replaceSpaces("123 456")); // "123-456"
console.log(replaceSpaces("!@#$%^&*()")); // "!@#$%^&*()"
console.log(replaceSpaces("multiple   spaces")); // "multiple---spaces"
console.log(replaceSpaces("spaces at the end ")); // "spaces-at-the-end-"
console.log(replaceSpaces("  spaces at the start")); // "-spaces-at-the-start-"
