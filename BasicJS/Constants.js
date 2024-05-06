// Constant -> const = a variable that can't be changed

// let pi = 3.14159;  // is able to be changed / overwritten later in code
const PI = 3.14159;  // is not able to be changed or overwritten later in code, common naming convention -> make all letters uppercase
let radius;
let circumference;

radius = Number(window.prompt("Enter the radius of a circle"));

circumference = 2 * PI * radius

console.log("The circumference is: ", circumference)