// Type Conversion = change the datatype of a value to another (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?")

console.log(typeof age);
age = Number(age);  // changes the data type of age to a Number
console.log(typeof age);
age += 1;

console.log("Happy birthday! You are " + age + " years old");
*/

let x;
let y;
let z;

x = Number("3.14")  // Number constructor, if you try to convert somethin that isn't a number it will give you NaN -> Not a Number
y = String(3.14)  // String constructor
z = Boolean("")  // converting an empty string to a boolean results in false, but if you type anything it will give you true. Same with numbers but instead of an empty string we use a 0

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)