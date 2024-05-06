// How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?")
// console.log(username)

// DIFFICULT WAY with HTML textbox

let username;

document.getElementById("myButton").onclick = function(){  // makes a function for our button once it is clicked

    username = document.getElementById("myText").value;  // gets the value from our input element in our HTML doc
    console.log("Hello " + username)
    document.getElementById("myLabel").innerHTML = username  // modifies the content of the element
}