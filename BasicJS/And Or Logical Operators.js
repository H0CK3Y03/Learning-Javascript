// Gives us the ability to chceck more than 1 condintion concurrently
// && -> AND (BOTH conditions must be true)
// || -> OR (Either condition can be true)

let temp = 1;
let sunny = true;
/*
if(temp > 0 && temp < 30){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");
}
*/
/*
if(temp <= 0 || temp >= 30){
    console.log("The weather is bad");
}
else{
    console.log("The weather is good");
}
*/
if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");
}