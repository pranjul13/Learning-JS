// OOPS in JS.

// Procedural implementation.
let baseSalary = 500000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate);
}

// Object Oriented Implementation (Encapsulation).
let employee = {
    baseSalary: 500000,  // Properties of this object.
    overtime: 10,
    rate:20,
    getWage: function(){    // Method of this object.
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage(); // The best functions are those functions with no parameters.
// Because it is easier to reuse and implement those functions.

//Encapsulation - Reduce complexity + increase reusability.
//Abstraction - Hide some properties and methods from outside.
//Inheritance - Eliminate reduntant code.
//Polymorphism - Refactor ugle if and switch-else.

const circle = {
    radius: 1,
    location: {     // This key value is an object in itself but it is still a property of this object.
        x: 1,
        y: 1
    },
    draw: function(){   // Method of this object.
        console.log('Draw');
    }
};

circle.draw();


// Factory function
function CreateCircle(radius){
    return{
        //radius: radius, // In ES6, if key and value are same, we can simply pass the value.
        radius, // Re-written radius: radius as radius
        draw1: function(){
            console.log('Draw 1');
        }
    };
}

const circle1 = CreateCircle(1);
circle1.draw1;


// Constructor Function.
function Circle(radius){    // First letter of constructor function is captial.
    this.radius = radius;   // "This" is used to refer to the object that is executing the current line of code.
    this.draw1 = function(){
        console.log('Draw 1');
    }
    //return this;    // Happens automatically, when we use this, so no need to explicitly write it.
}

// Currently refering to the circle object.
const another = new Circle(1);  // "New" creates an empty object and sets 'this' to point to the created object.
// By default, "this" points to the 'global object'.
// In browser, "window" is the global object and inside node, "global" is the global object.

// Bad practice.
const another1 = Circle(1); // Now refering to the global object.


const Circle2 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('Draw');
}`);    // Used backtick to break the code into multiple lines.

Circle.call({}, 1)  // Same as line below.
const another2 = new Circle(1); // Same as line above.
// New function will internally create an empty object and pass it as the first argument to the call method.
