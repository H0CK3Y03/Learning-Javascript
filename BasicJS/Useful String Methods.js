let userName = "  Bro Code  ";
let phoneNumber = "123-456-7890";

let nameLength = userName.length;  // the length of the content within the variable
let nameChar = userName.charAt(2);  // returns the character at the give index, starts from 0
let letterOcurrence = userName.indexOf("o"); // finds the index of the first instance of the given character, if there isn't such a character then it returns -1 for some reason
let lastOccurance = userName.lastIndexOf("o");  // finds the last occurence of the given character
userName = userName.trim();  // gets rid of any spaces before and after all characters
userName = userName.toUpperCase();  // capitalizes all of the characters
userName = userName.toLowerCase(); // decapitalizes all of the characters
// phoneNumber = phoneNumber.replace("-", "") // replaces first instance of the given character with the other given character
// phoneNumber = phoneNumber.replace("-", "")
phoneNumber = phoneNumber.replaceAll("-", "") // replaces all instances of the character with the other character

console.log(nameLength);
console.log(nameChar);
console.log(letterOcurrence);
console.log(lastOccurance);
console.log(userName)
console.log(phoneNumber)