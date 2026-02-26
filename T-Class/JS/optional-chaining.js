// optional chaining
// optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each level of the object exists. It uses the `?.` operator to prevent errors when trying to access properties that may be undefined or null.

const user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};

// Accessing nested properties without optional chaining
// console.log(user.address.city); // New York
// console.log(user.address.country); // undefined (no error)

// Accessing nested properties with optional chaining
// console.log(user?.address?.city); // New York
// console.log(user?.address?.country); // undefined (no error)

// Optional chaining can also be used with function calls and array indexing

const getUser = () => {
    return {
        name: "Bob",
        friends: ["Charlie", "Dave"]
    }
}

// console.log(getUser()?.friends?.[0]); // Charlie
// console.log(getUser()?.friends?.[2]); // undefined (no error)

// Optional chaining is a powerful tool for working with complex objects and can help prevent runtime errors when accessing properties that may not exist.

console.log(user.address?.city);
console.log(user.address?.country); // undefined (no error)