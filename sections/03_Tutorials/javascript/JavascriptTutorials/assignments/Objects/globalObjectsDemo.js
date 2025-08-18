// Global Objects Demo
// Global objects in JavaScript are built-in objects that are available in all JavaScript environments.
//https://developer.mozilla.org/en-US/docs/Glossary/Global_object
// They provide functionality that is commonly used in JavaScript programming.
// Some common global objects include:
const globalObjectsDemo = {
    // Date object to work with dates and times
    currentDate: new Date(),
    
    // Math object for mathematical constants and functions
    pi: Math.PI,
    
    // JSON object for parsing and stringifying JSON data
    jsonExample: JSON.stringify({ name: "John", age: 30 }),
    
    // Regular expressions for pattern matching in strings
    regexExample: /hello/i.test("Hello World"),
    
    // Error object for handling errors
    errorExample: new Error("This is an error message")
};
// Function to display global objects information
function displayGlobalObjectsInfo() {
    console.log("Current Date:", globalObjectsDemo.currentDate);
    console.log("Value of Pi:", globalObjectsDemo.pi);
    console.log("JSON Example:", globalObjectsDemo.jsonExample);
    console.log("Regex Example (matches 'hello'):", globalObjectsDemo.regexExample);
    console.log("Error Example:", globalObjectsDemo.errorExample.message);
}

// Example usage
displayGlobalObjectsInfo();

// Display today's date in a formatted way
// This uses the Date object to get the current date and formats it as YYYY-MM-DD



const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
console.log(`Today's date is: ${formattedDate}`);
