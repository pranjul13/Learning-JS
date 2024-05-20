// Console.log line written inside the JS script is not part of JS.
// Console.log written inside a browser's console is part of browser's function and if the script is running through node is a module of the nodeJS.
let x = '10';
let y = 20;
let z = 30;
console.log(x + y + z);
console.log(typeof y);

let a = '100';
let b = 100;
if (a == b)    // String is converted to number during this comparison == in JS. (Type conversion enabled).
    console.log("Match");
else    // No conversion in === , both value and datatype are matched in this case. (Type conversion disabled).
    console.log('No match');

// *NOTE: JS converts empty string to 0. So, 0 == '0' will result in true.

for (i = 0; i < 5; i++) {
    console.log(i);
}

const array1 = [2, 9, 4, 3, 7, 3, 91, 3, 4, 385];
console.log(array1);
console.log(array1[0]);

const index7 = require('./index7')  // Importing the value from the exports module of the index7.js file.
console.log(index7);
console.log(index7.x);