
const fs = require('fs');
const path = require('path');

// Define paths
const templatePath = path.join(__dirname, 'templates', 'template.html');
const outputPath = path.join(__dirname, 'output', 'reverse_number_exercise.html');

// Read the template
let template = fs.readFileSync(templatePath, 'utf-8');

// Define replacements
const replacements = {
  '{{PAGE_TITLE}}': 'Reverse a Number Exercise',
  '{{HEADER_TITLE}}': 'JavaScript Coding Exercise – Reverse a Number',
  '{{SIDEBAR_LINKS}}': '<li><a href="#reverse">Reverse Number</a></li>',
  '{{MAIN_CONTENT}}': `
    <section id="reverse">
      <h2>Reverse a Number</h2>
      <p>Write a JavaScript function that takes a number and returns its reverse.</p>
      <button onclick="loadSolution('https://example.com/reverse.js')">Load Solution</button>
      <textarea id="solutionBox" readonly></textarea>
    </section>
  `
};

// Replace placeholders
for (const [key, value] of Object.entries(replacements)) {
  template = template.replace(key, value);
}

// Ensure output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the final HTML
fs.writeFileSync(outputPath, template, 'utf-8');

console.log('✅ HTML page generated at:', outputPath);


const problems = [
  {
    key: 'reverse_string',
    title: 'Reverse a String',
    description: 'Write a JavaScript function that takes a string and returns its reverse.',
    functionName: 'reverseString'
  },
  {
    key: 'palindrome_check',
    title: 'Palindrome Check',
    description: 'Write a JavaScript function that checks if a string is a palindrome.',
    functionName: 'isPalindrome'
  },
  {
    key: 'count_vowels',
    title: 'Count Vowels',
    description: 'Write a JavaScript function that counts the number of vowels in a string.',
    functionName: 'countVowels'
  },
  {
    key: 'find_longest_word',
    title: 'Find Longest Word',
    description: 'Write a JavaScript function that finds the longest word in a sentence.',
    functionName: 'findLongestWord'
  },
  {
    key: 'replace_spaces',
    title: 'Replace Spaces',
    description: 'Write a JavaScript function that replaces all spaces in a string with underscores.',
    functionName: 'replaceSpaces'
  }
];

problems.forEach(problem => {
  // HTML
  const htmlContent = `
    <section id="${problem.key}">
      <h2>${problem.title}</h2>
      <p>${problem.description}</p>
      <button onclick="loadSolution('solutionBox', '${problem.key}.js')">Load Solution</button>
      <textarea id="solutionBox" readonly></textarea>
      <img src="${problem.key}.png" alt="${problem.title} Visual" />
    </section>
  `;
  const htmlPath = path.join(__dirname, 'output', `${problem.key}.html`);
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

  // JS
  const jsContent = `
// ${problem.title} Solution
function ${problem.functionName}(input) {
  // TODO: Implement solution
}
`;
  const jsPath = path.join(__dirname, 'output', `${problem.key}.js`);
  fs.writeFileSync(jsPath, jsContent, 'utf-8');

  // PNG placeholder
  const pngPath = path.join(__dirname, 'output', `${problem.key}.png`);
  fs.writeFileSync(pngPath, ''); // Empty file as a placeholder
});

// Generate a summary file
const summaryContent = problems.map(problem => {
  return `- [${problem.title}](./${problem.key}.html): ${problem.description}`;
}).join('\n');

const summaryPath = path.join(__dirname, 'output', 'summary.md');
fs.writeFileSync(summaryPath, summaryContent, 'utf-8');

console.log('✅ Problem exercises generated successfully!');
// Generate a README file
const readmeContent = `# JavaScript Coding Exercise

## Summary
This repository contains a series of JavaScript coding exercises designed to help you practice and improve your skills.

## Exercises
${summaryContent}

`;

const readmePath = path.join(__dirname, 'output', 'README.md');
fs.writeFileSync(readmePath, readmeContent, 'utf-8');
