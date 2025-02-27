// Functions in JS

// There are 2 types of functions in JS

// 1. Named function - A function which will have a name - Function Declaration
    //a. Parameterised function
    //b. Non-Parameterised function
// 2. Anonymous or Unnamed function - A function which will not have any name - Function Expression
//    a. Anonymous function  - 
//    b. Arrow function - This is a type of anonymous function which is introduced in ES6
// 3. Constructor Function


// 1. Named Function  - (Function Declaration)
// Syntax:

/*

function functionName(argument){
    // code
   // functionName(parameter)
}

functionName(parameter)

*/

//1. Non-parameterised function (non-retunring)

function greet(){
    console.log("Hello, JavaScript")
}

greet()

//2. Non-parameterised function (retunring)

function greetings(){
    return "Hello, JS"
}

// greetings()
// console.log(greetings())
const result = greetings()
console.log(result)

// 3. Parameterised and non-retunring

function add(a,b){
    console.log(a+b);
}

add(5,17)

// 4. Parameterised and retunring

function addition(a,b){
  //  console.log("Test");
    return a+b
}

console.log(addition(34,58));

function add2(a,b){
    return a+b
}

function add3(c){
    let sum = add2(35,67)
    console.log(sum+c)
}

add3(100)

console.log("****************************");

// 2. Anonymous Function (Function Expression) - A function which will not have any name 

// Syntax:

/*

let variable = function(argument){
   // code
}


variable()



*/

let sum = function(a,b){
    console.log(a+b);
    return a+b
}

let resultsOfSum = sum(12,24) //36
console.log(resultsOfSum)

console.log("************************");
// 2. B - Arrow Function -  // ES6 - ECMASCRIPT 6 - 2015

// Syntax:
/*

let variable = (argument) => {
  // code
}

let variable  = (a,b) => a+b



variable(parameter)

*/

let arrow = (a,b) => {
    console.log(a+b)
    console.log("End of the function");
}

//console.log(arrow(10,88))
arrow(36,54)

// 3. Constructor Functions
// What is the definition
// A function that is used to create an object is known as constructor function

//this
// syntax:
/*

function ConstructorFunctionName(arg1, arg2){
    this.param1 = arg1; // obj.param1 = arg1
    this.param2 = arg2;
}

const obj = new ConstructorFunctionName(param1, param2)
obj.param1
obj.param2

*/


function Car(make, model, color){
    this.carMake = make;   // car.carMake = "BMW"
    this.carModel = model; // car.carModel = "i7"
    this.carColor = color; // car.carColor = "Red"
    this.function = function(){
        console.log(this.carMake, this.carModel, this.carColor)
    }
}

let car = new Car("BMW", "i7", "Red")
console.log(car.carMake)
console.log(car.carModel)
console.log(car.carColor)
car.function()

let car1 = new Car("Audi", "Q5", "Red")
car1.function()



