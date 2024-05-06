let x;// = Math.floor(Math.random() * 20) + 1;  // generates a random number between 0 and 1 if left empty, * 6 -> random number from 0, 6
                                // it's always 0,1 so we use operators to change the numbers -> *6 -> 0,6 -> +1 -> 1,7
let y;// = Math.floor(Math.random() * 20) + 1;
let z;// = Math.floor(Math.random() * 20) + 1;

// console.log(x);
// console.log(y);
// console.log(z);

document.getElementById("rollBtn").onclick = function(){

    let x = Math.floor(Math.random() * 20) + 1;
    let y = Math.floor(Math.random() * 20) + 1;
    let z = Math.floor(Math.random() * 20) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;

}