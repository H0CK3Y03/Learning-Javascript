let a;
let b;
let c;
/*
a = Number(window.prompt("Enter side A"));
b = Number(window.prompt("Enter side B"));

c = Math.sqrt(a ** 2 + b ** 2)

console.log(c)
*/

document.getElementById("myButton").onclick = function(){

    a = Number(document.getElementById("aInput").value);
    b = Number(document.getElementById("bInput").value);
    document.getElementById("cLabel").innerHTML = "The length of c is: " + Math.sqrt(a ** 2 + b ** 2);
}