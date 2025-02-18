// Loops - Which will execute the same block of code multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// 1. for loop - If we know how many times we have to the run the iteration
// 2. while loop - If we do not know how many times that we have to run the iteration
// 3. do-while loop - If we want to run the loop atleast for one time before checking the condition

// 4. for...of loop - This loop used to iterate over iteratable like Arrays, string etc etc
// 5. for...in loop - {name:"Rahul"} - Is used to iterate over the properties of an object

console.log("*********************************");

// 1. for loop
// Syntax:
/*

for(initialization; condition; increment/Decrement){
 // code
}
initialization - initialise the variable to start the execution. Ex: - let i=1
condition - This is the condition that will be checked before the execution of the code. Ex: - i<=5
increment/decrement - This is the variable that will be used to increment/decrement the value of the
variable. Ex: - i++ // i--

*/


for(let i=1; i<=50 ; i++){ // i=6  6<=5  5++ = 5+1=6
    console.log(i) // 1 2 3 4 5
}
console.log("*************WHile loop********************");


// 2. while loop - 
// Syntax: - 
/*
intialisation
while(condition){
// code
// increment/decrement 
}

*/
let i =1
while(i<=0){
    
    console.log(i)
    i++
}
console.log("*************Do While loop********************");
// 

// 3. do while loop - 
// Syntax: -
/*

initialisation;

do
{
// code
increment/decrement

}while(condition);

*/

let j =1
do{
    console.log(j) // 1
    j++ //1++
}while(j<=0);


let k
console.log(k);












