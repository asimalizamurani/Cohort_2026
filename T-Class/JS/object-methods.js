// object methods
let dogesh = {
    name: "Dogesh",
    breed: "Shiba Inu",
    age: 3,
}

// Adding a method to the object
dogesh.bark = function() {
    console.log("Woof!");
}

// Calling the method
// dogesh.bark(); // Woof!

// Using 'this' keyword in methods

dogesh.describe = function() {
    console.log(`My name is ${this.name}, I am a ${this.breed} and I am ${this.age} years old.`);
}

// dogesh.describe(); // My name is Dogesh, I am a Shiba Inu and I am 3 years old.

// Method shorthand syntax

let chatGPT = {
    name: "ChatGPT",
    version: "3.5",
    describe() {
        console.log(`I am ${this.name} version ${this.version}.`);
    }
}

// chatGPT.describe(); // I am ChatGPT version 3.5.

// Object.assign() method is used to copy the properties of one or more source objects to a target object. It returns the target object.

let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

Object.assign(target, source);

// console.log(target); // { a: 1, b: 4, c: 5 }

