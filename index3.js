// Primitive types.
let x = 10;
let y = x;
x = 20;

let a = {value: 10};
let b = a;  // b points to the memory of a.
a.value = 20;

let number = 10;    // Primitive variable.
function increase(number){
    number++;
}
increase(number);
console.log(number);


// Here, two variables are pointing to the same object.
let objecttt = {value: 10};     // An object is assigned to the objecttt variable.
function increase1(objecttt){
    objecttt.value++;
}
increase1(objecttt);
console.log(objecttt);

delete objecttt.increase1;  // Deleting the property of an object.
delete objecttt['increase1'];