// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if" statements

let grade = 95;
/*
if(grade == "A"){
    console.log("You did great!");
}
else if(grade == "B"){
    console.log("You did good!");
}
else if(grade == "C"){
    console.log("You did okay!");
}
else if(grade == "D"){
    console.log("You passed... barely!");
}
else if(grade == "F"){
    console.log("You FAILED!");
}
else{
    console.log(grade, "is not a letter grade!");
};
*/
/*
switch(grade){   // we put in the thing we want to inspect
    case "A":  // in the case that the thing we input is "A"
        console.log("You did great!");
        break;  // stop the case by breaking, something like a while loop
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed... barely!");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default:  // if there are no matching cases then this code runs
    console.log(grade, "is not a letter grade!");
        break;
}
*/
switch(true){   // we put in the thing we want to inspect
    case grade >= 90:  // in the case that the thing we input is "A"
        console.log("You did great!");
        break;  // stop the case by breaking, something like a while loop
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed... barely!");
        break;
    case grade < 60:
        console.log("You FAILED!");
        break;
    default:  // if there are no matching cases then this code runs
    console.log(grade, "is not a letter grade!");
        break;
}