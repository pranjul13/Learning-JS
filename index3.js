// Primitive types.
let x = 10;
let y = x;
x = 20;

let a = {value: 10};
let b = a;  // b points to the memory of a.
a.value = 20;

let number = 10;
function increase(number){
    number++;
}

increase(number);
console.log(number);