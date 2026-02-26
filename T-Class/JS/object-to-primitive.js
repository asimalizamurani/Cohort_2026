// Object to Primitive Conversion in JavaScript

// In JavaScript, when an object is used in a context where a primitive value is expected (like in string concatenation, arithmetic operations, etc.), JavaScript tries to convert the object to a primitive value. This process is called "object to primitive conversion".

// The conversion process follows these steps:
    
// 1. If the object has a `Symbol.toPrimitive` method, it will be called with a hint (either "string", "number", or "default") to determine how to convert the object.

// code examples

let turbat = {
    status: "beautiful",
    aura: -1000,
}

// When we try to convert the object to a primitive value, JavaScript will call the `Symbol.toPrimitive` method if it exists.

turbat[Symbol.toPrimitive] = function(hint) {
    if (hint === "string") {
        return `Turbat is ${this.status}`;
    } else if (hint === "number") {
        return this.aura;
    } else {
        return this.status;
    }
}



// Now, when we try to convert the object to a primitive value, it will use the `Symbol.toPrimitive` method.

console.log(String(turbat)); // Turbat is beautiful
console.log(Number(turbat)); // -1000
console.log(turbat + ""); // Turbat is beautiful (default hint)

// If the object does not have a `Symbol.toPrimitive` method, JavaScript will try to call the `toString()` method. If that also does not return a primitive value, it will then try to call the `valueOf()` method.

let simpleObject = {
    name: "Simple Object",
    toString() {
        return this.name;
    },
    valueOf() {
        return 42;
    }
}

console.log(String(simpleObject)); // Simple Object (toString is called)
console.log(Number(simpleObject)); // 42 (valueOf is called)
console.log(simpleObject + ""); // Simple Object (toString is called)

// If neither `toString()` nor `valueOf()` returns a primitive value, JavaScript will throw a TypeError when trying to convert the object to a primitive value.             
