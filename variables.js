// Variables - storage  - Which stores either a single vriable or a multiple variable

// let a = 10

/*

var  - In  modern JS/TS (ES6 - ECMASCRIPT 6 - 2015)  we never use var to declare a variable
let - Whenever we declare a variable which is not a constant
const - is used to declre a constant variable // const a =10

*/
// String a ="10"

// Syntax - keyword(var/let/const) variableName = value

// 1. var 
// 1. Scope - The scope will be gloabl by default - inside a function by using a var  - local scope
// 2. Variable declared using a var keyword it can be redeclared and reinitialised.
// 3. It is not mandatory to assign the value of the variable at the time of declaration

// local variable
// global variable

var i = 10 // global variable
var i = "20" // redeclaration
var i = true
i = 40
console.log(i)

function fun(){
    var i = 50 // local variable
  //  var i = 30
    console.log(i)
  //  console.log(a)
}
fun()
//console.log(a) // erorr

if(true){
    console.log(i)
}

var j // undefined

j = 20





var flag = true // global variable

var i = 10

if(i>5){
    var flag = false // local variable
    console.log(flag) // false
}

console.log(flag); // false

console.log("****************************************");

// let
// 1. let - block scope {...}
// 2. let - Variable declared using let keyword cannot be redeclared and can be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration

// Syntax - keyword(var/let/const) variableName = value

let m =10 // not inside {} - global
//let m = 20
m =40


if(true){
  let m =30 // {} - local to {}
 // let m = 40
  console.log("Line #74", m) // 30
//  console.log(m)
}

console.log("line #78", m) // 10

let p

p = 67
 console.log("**********************************");
//const
// 1. const - block scope {...}
// 2. const - Variable declared using const keyword cannot be redeclared and cannot be reinitialised
// 3. It is mandatory to assign the value of the variable at the time of declaration


const name = "John"
//const name = "John"
name = "Rahul"


if(true){
  const a =30 // {} - local to {}
  console.log("Line #99", a) // 30
  console.log(name);
//  console.log(m)
}

//console.log("Line #103", a) // 30
console.log(name);

const t = 100

//t = 90

