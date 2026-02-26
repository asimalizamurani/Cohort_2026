// Symbol is a primitive data type in JavaScript that represents a unique identifier. It was introduced in ECMAScript 2015 (ES6) and is often used to create unique property keys for objects.

// A symbol can be created using the Symbol() function. Each time you call Symbol(), it returns a new, unique symbol.

const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false (each symbol is unique)

// You can also create symbols with a description for better debugging

const sym3 = Symbol("mySymbol");
console.log(sym3); // Symbol(mySymbol)

// Symbols can be used as property keys in objects. This allows you to create properties that won't conflict with other properties, even if they have the same name.

const myObject = {};
const mySymbolKey = Symbol("key");

myObject[mySymbolKey] = "This is a symbol key";
console.log(myObject[mySymbolKey]); // This is a symbol key

// Symbols are not enumerable, which means they won't show up in for...in loops or Object.keys().

for (let key in myObject) {
    console.log(key); // No output (symbol keys are not enumerable)
}

console.log(Object.keys(myObject)); // [] (no symbol keys)

// However, you can retrieve symbol keys using Object.getOwnPropertySymbols()

const symbols = Object.getOwnPropertySymbols(myObject);
console.log(symbols); // [ Symbol(key) ]
console.log(myObject[symbols[0]]); // This is a symbol key

// Symbols are often used to create private properties or to avoid name collisions in objects, especially when working with libraries or frameworks.    

// Global symbols can be created using Symbol.for() and retrieved using Symbol.keyFor()

const globalSym1 = Symbol.for("globalKey");
const globalSym2 = Symbol.for("globalKey");

console.log(globalSym1 === globalSym2); // true (same symbol for the same key)

console.log(Symbol.keyFor(globalSym1)); // globalKey
console.log(Symbol.keyFor(sym1)); // undefined (sym1 is not a global symbol)


// System Symbol
// JavaScript has several built-in symbols that are used by the language itself. These are called system symbols and can be accessed using the Symbol object.

console.log(Symbol.iterator);
console.log(Symbol.toStringTag);
