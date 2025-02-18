// Statement or condition

// if statement - 
// if else statement
// if else if else statement - Nested if else
// switch statement


// if statement
// Syntax:
/*

if(condition){
..... code
}

*/

if (1 > 5) {
    console.log("10 is greater than 5");
}


// if else statement
// Syntax:-
/*

if(condition){
// code
}
else{
// code
}

Definition:-
If the condition is true then the code inside the if block will be executed otherwise the code inside 
the else block will be executed.

*/

if (0 > 10) {
    console.log("0 is greater than 10");
} else {
    console.log("0 is not greater than 10");
}

// if else if statement - nested if else statement
// Syntax:
/*

if(condition1){
// code 
}else if(condition2){
 // code
}
 else if(condition3){
 // code
}
 else{
 // code
}

 */

let browser = "edge"

if (browser === "chrome") { // "edge" ==="chrome"
    console.log("Browser is chrome");
}
else if (browser === "firefox") { // // "edge" ==="firefox"
    console.log("Browser is firefox");
}
else if (browser === "safari") { // // "edge" ==="Safari"
    console.log("Browser is safari");
}
else {
    console.log("Browser is not supported");
}

console.log("************************************");
// switch -
// Syntax:

/*

switch(browser){ //"edge"
case "chrome":
    // code
    break;

case "firefox":
    // code
    break;

case "safari":
    // code
    break;

case "headless":
    // code
    break; 

default:
    // code
    break;
}

*/



let browserType = "opera"

switch (browserType) { // "chrome"
    case "chrome":
        console.log("Browser is chrome");
        break;
    case "firefox":
        console.log("Browser is firefox");
        break;
    case "safari":
        console.log("Browser is safari");
        break;
    case "edge":
        console.log("Browser is edge");
        break;
    default:
        console.log("Browser is not supported");
        break;
}






