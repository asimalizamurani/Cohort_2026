// Garbage collection is the process of automatically freeing up memory that is no longer being used by the program. In JavaScript, garbage collection is handled by the JavaScript engine, which uses a technique called "mark-and-sweep" to identify and remove unused objects from memory.

// When an object is created in JavaScript, it is stored in memory. If there are no references to that object, it becomes eligible for garbage collection. The JavaScript engine periodically runs the garbage collector to free up memory by removing these unreferenced objects.

// For example:

function createObject() {
    let obj = { name: "ChatGPT" };
    return obj;
}

let myObject = createObject(); // myObject now references the object created in createObject

myObject = null; // Now there are no references to the object, it becomes eligible for garbage collection

// The garbage collector will eventually free up the memory used by the object that was created in createObject, since there are no references to it anymore.

