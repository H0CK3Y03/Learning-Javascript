/*
    arithmetic expression is a combination of:
    operands (values, variables, etc.)
    operators (+ - * / % **)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students % 3;
// students = students ** 2;
let extrastudents = students % 3;  

students += 1;  // += -> augmented assignment operator
students -= 1;
students *= 2;
students /= 2;
students **= 2;

console.log(students);
console.log(extrastudents);

/*
    operator precedence
    1. parenthesis
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4) ** 2;

console.log(result)