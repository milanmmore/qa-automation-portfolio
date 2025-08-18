// JavaScript Objects demo
// JavaScript Objects are collections of key-value pairs
// They can store various data types and are useful for organizing related data
// In Other words , Javascript Objects are collections of data and functionality stored as properties and methods 
// Objects can be created using object literals, constructors, or the Object.create() method
// Objects are typically constants, but their properties can be modified.
// Example of a simple object
const person = {
    name: "John Doe",
    birtthday: "1990-01-01",
    //age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    // Method to display full address
    displayAddress: function() {
        console.log(`${this.address.street}, ${this.address.city}, ${this.address.country}`);
    },
    // Method to add a hobby
    addHobby: function(newHobby) {
        this.hobbies.push(newHobby);
        console.log(`Hobby added: ${newHobby}`);
    }
};

//accessing object properties - dot notation
console.log(person.name); // "John Doe"
// accessing object properties - bracket notation
console.log(person["age"]); // 30

var query = "isStudent";
console.log(person[query]); // false

//Object methods
person.greet(); // "Hello, my name is John Doe"





