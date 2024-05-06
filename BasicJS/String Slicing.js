// slice() extracts a section of a string
//         and returns it as a new string
//         without modifying the original string

let fullName = "Bro Code";
let firstName;
let lastName;

// firstName = fullName.slice(0, 3); // two values: starting index and ending index seperated by a comma (,), doesn't include the last character
// lastName = fullName.slice(4);  // if you don't add end value -> copies everthing to the end

firstName = fullName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ") + 1)

console.log(firstName);
console.log(lastName);