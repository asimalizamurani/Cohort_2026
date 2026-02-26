// Objects

// Two ways

let gemini = new Object(); // constructor function

let chatGPT = {
    name: "ChatGPT",
    version: "3.5",
}; // object literal

// Properties and methods
// console.log(chatGPT.name); // Accessing a property

chatGPT.isMultiModal = true; // Adding a new property

// console.log(chatGPT.isMultiModal); // Accessing the new property

// property shorthand

let getLaptop = (brand, price) => {
    return {
        brand,
        price,
    }
}

// Reference and copying

// primitive types are copied by value

let like = "Radika Das";
let love = like;

console.log(love); // Radika Das

like = "John Doe";

console.log(love); // Radika Das (unchanged)

let a = {}
let b = {}

// console.log(a === b); // false (different objects in memory)

// const  can not be modified, but the properties of the object can be modified

const person = {
    name: "Alice",
    age: 30,
};

// person = {}; // Error: Assignment to constant variable.

person.name = "Bob"; // This is allowed

// console.log(person.name); // Bob

// object assign is used to copy the properties of one or more source objects to a target object

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target); // { a: 1, b: 4, c: 5 }
// console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// nested objects 
const user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};

// shallow copy using Object.assign
const shallowCopy = Object.assign({}, user);

// modifying the nested object in the shallow copy
shallowCopy.address.city = "Los Angeles";

// console.log(user.address.city); // Los Angeles (original object is affected)

// deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(user));

// modifying the nested object in the deep copy
deepCopy.address.city = "Chicago";

// console.log(user.address.city); // Los Angeles (original object is not affected) 

