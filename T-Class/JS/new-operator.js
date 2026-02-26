// new operator in js
// Define new operator
function MyNew(constructor, ...args) {
    // Create a new object
    const obj = {};
    
    // Set the prototype of the new object to the constructor's prototype
    Object.setPrototypeOf(obj, constructor.prototype);
    
    // Call the constructor with the new object as its context and pass the arguments
    const result = constructor.apply(obj, args);
    
    // If the constructor returns an object, return that; otherwise, return the new object
    return (typeof result === 'object' && result !== null) ? result : obj;
}

// Example usage
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = MyNew(Person, 'Alice', 30);
console.log(person1.name);
console.log(person1.age);

