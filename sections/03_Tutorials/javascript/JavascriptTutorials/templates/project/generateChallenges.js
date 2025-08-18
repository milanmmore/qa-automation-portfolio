const fs = require('fs');
const { createCanvas } = require('canvas');

// Problem definitions
const problems = {
  "prime_checker": `function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}`,
  "armstrong_number": `function isArmstrong(num) {
  let sum = 0, temp = num;
  const digits = num.toString().length;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}`,
  "reverse_string": `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
  "palindrome_check": `function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}`,
  "count_vowels": `function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}`,
  "find_longest_word": `function findLongestWord(str) {
  return str.split(' ').reduce((longest, word) =>
    word.length > longest.length ? word : longest, '');
}`,
  "replace_spaces": `function replaceSpaces(str, replacement) {
  return str.split(' ').join(replacement);
}`
};

// Create JS files
for (const [name, code] of Object.entries(problems)) {
  fs.writeFileSync(`${name}.js`, code);
}

// Create HTML file
let html = `<!DOCTYPE html>
<html>
<head><title>JavaScript Problems</title></head>
<body>
<h1>JavaScript Problem Functions</h1>
<ul>
`;
for (const name of Object.keys(problems)) {
  html += `<li><a href="${name}.js">${name.replace('_', ' ')}</a></li>\n`;
}
html += `</ul>
</body>
</html>`;
fs.writeFileSync('problems.html', html);

// Create PNG listing
const canvas = createCanvas(600, 300);
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#000000';
ctx.font = '16px sans-serif';
ctx.fillText('JavaScript Problem Functions:', 10, 30);
Object.keys(problems).forEach((name, i) => {
  ctx.fillText(`- ${name.replace('_', ' ').toUpperCase()}`, 10, 60 + i * 25);
});
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('problem_diagram.png', buffer);
