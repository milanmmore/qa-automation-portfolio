//creating classes in javascript
class person {
    constructor(name, age, isStudent, hobbies, address) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.hobbies = hobbies;
        this.address = address;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    // Method to display full address
    displayAddress() {
        console.log(`${this.address.street}, ${this.address.city}, ${this.address.country}`);
    }
    // Method to add a hobby
    addHobby(newHobby) {
        this.hobbies.push(newHobby);
        console.log(`Hobby added: ${newHobby}`);
    }
    // Method to get full name
    getFullName() {
        return `${this.name.first} ${this.name.last}`;
    }
    // Method to check if the person is an adult
    isAdult() {
        return this.age >= 18;
    }
    // Method to get a summary of the person
    getSummary() {
        return `${this.name} is ${this.age} years old and lives in ${this.address.city}.`;
    }

};


