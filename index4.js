function Circle(radius){    // First letter of constructor function is captial.
    this.radius = radius;   // "This" is used to refer to the object that is executing the current line of code.
    this.draw1 = function(){
        console.log('Draw 1');
    }
}
const circle = new Circle(10);

// For-in loop
for (let key in circle){
    console.log(key);   // Returns both the properties and the methods.
    console.log(key, circle[key]);  // Returns the value of the properties.
    if (typeof circle[key] != 'function')   // Making sure, not displaying the function and only the value of the parameters.
        console.log(key, circle.key);
}

const keys = Object.keys(circle);   // Will store all the keys of the circle object, inside the keys constant.
console.log(keys);

// in can also be used inside if.
if ('radius' in circle)
    console.log('Circle has radius parameter');