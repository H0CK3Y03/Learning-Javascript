// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

// let age;  // declaration of variable age
// age = 21  // assignment of variable age to 21
let age = 21; // declaration and assignment of variable age to 21 // this is a number data type
let firstname = "Bro";  // string data type
let student = true;  // boolean data type, only true or false
let somting = firstname + age + student

age = age + 1;


console.log("Hello", firstname);
console.log("You are:", age, "years old");
console.log("Enrolled: ", student);
console.log(somting);

document.getElementById("p1").innerHTML = "Hello " + firstname  // gets the id of an element and changes it's contents
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student
