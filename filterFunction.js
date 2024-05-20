// 'filter' function - Find/filter a value in an array. (Works in an array only).
const arr = [2, 4, 7, 1, 8, 8, 3];

let result = arr.filter((item) => { // Arrow function.
    //console.log(item);
    return item === 3;
})
console.log(result);