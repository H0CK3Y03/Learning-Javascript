// Math = An intrinsic object that provides basic mathematics functionality and constants

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x);  // rounds the number conventionally -> 0-4 down 5-9 up
// x = Math.floor(x);  // rounds the number down
// x = Math.ceil(x);  // rounds the number up
// x = Math.pow(x, 2);  // basically x ** 2 -> first base then exponent separated by a comma (,)
// x = Math.sqrt(x);  // finds the square root of a number
// x = Math.trunc(x);  // removes all floats and returns only the integer (3.14) - > (3)
// x = Math.abs(x);  // returns the absolute value of the number, basically returns positive number

maximum = Math.max(x, y, z);  // returns maximum value of all within
minimum = Math.min(x, y, z);  // returns minimum value of all within

x = Math.PI  // Math also has a lot of built-in constants

console.log(maximum);
console.log(minimum);
console.log(x)