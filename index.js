// This is my first JS code.
// console.log('Hello World');

let gameName = 'Hecker'; // String Literal.
console.log(gameName);

let age = 22; // Number Literal.
age++;
console.log('Value of age is', age);

const myName = 'Pranjul Mishra';
console.log('\nValue of myName is', myName);

let swtichToBackend = true; // Boolean Literal.
console.log('\nValue of boolean is', swtichToBackend);

let anything; // Undefined by default.
console.log('\nValue of anything is', anything);

let something = undefined; // Explicitly setting the value as undefined.
console.log('\nValue of undefined is', something);

let nothing = null; // Null literal.
// To exlicitly clear the value of a variable.
console.log('\nValue of null is', nothing);

// Objects in JS.
// Used to contain multiple values (variables) associated with common representation.
// Example: let name = 'ABCD';
// let age = '23';
// Here, both the name and age are associated with a person therefore, we put them inside the same object named 'Person'.
let person = {
    name: 'Hecker',
    age: '23'
};
console.log('\nValue of person object is ', person);

// To change the value of a property in an object, there are two ways. 1) Dot Notation. 2) Bracket Notation.
// Dot Notation
person.name = 'Devil';
console.log('\nDot Notation\nValue of name inside the person game object is ', person.name);

// Bracket Notation
person['name'] = 'King';
console.log('\nBracket Notation\nValue of name inside the person game object is ', person['name']);

// Bracket Notation Runtime
let runtimeSelectionValue = 'name';
person[runtimeSelectionValue] = 'Devil King';
console.log('\nBracket Notation Runtime\nValue of name after the getting and changing it at runtime is ', person[runtimeSelectionValue]);
console.log('\n', person.name);

let selectedColors = ['red', 'blue']; // Array Literal.
console.log(selectedColors); // Printing complete array.
console.log(selectedColors[0]); // Array value at index 0.
selectedColors[2] = 'green'; // Expanding the array.
console.log(selectedColors[2]);
console.log(selectedColors.length); // Prints the length of an array.

// To check the datatype of a variable or object in JS, we use typeof.
typeof person;
typeof selectedColors; // In JS, array is also an object.
// We can also print this type to the console using console.log().
console.log("\nType of selectedColors is", typeof selectedColors);

function hecking() {
    console.log('\nInside the hecking function');
} // Function declared.

hecking(); // Calling the function.

function printName(lastName) {
    console.log('\nLast name is ', lastName);
} // Function with parameter.

printName('King'); // Passing the argument to the function.

// Function to take user input and display it on the console.
function takeUserInput() {
    let enterUserName = prompt("Please enter your name: "); // Taking input from the user at runtime.
    console.log('Name entered by the user is: ' + enterUserName);
}

takeUserInput();

function squareOfNumber(number) {
    return number * number;
}
let num;
// 3 functions are called in the below line of code, "prompt", "squareOfNumber" and "log" functions.
console.log('Square of the number is ', squareOfNumber(prompt("Enter your number", num))); // Taking input of number from user and passing it to the function to square it.