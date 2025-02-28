// array
let i = 10
let j = [10,20,30,40,50, "TS", true, null, undefined] // index in an array starts with 0

//[0:10, 1:20, 2:30, 3:40, 4:50, .....]
console.log(j[1])

// int[] arr = new int[5]

// There are 2 ways in which we can create an array in JS/TS

// 1. Using the array literal - We use [] to create an array
// Syntax:
// let arrayName = [value1, value2, value3, .....]

let arr = [10,20,30,40,50, "TS", true, null, undefined] 




// 2. Using array constructor

let arr1 = new Array("HTML", "CSS", "Javascript", "React")
console.log(arr1);

let arr2 = new Array() 
arr2[0] = 10
arr2[1] = 20
arr2[2] = 30
console.log(arr2)

console.log("**************************************");
let array = ["TS", "JS", 45, 34.67, true, "fruits", "apple"]
console.log(array[0])
console.log(array[1])

// 1. length - which is used to calculate the total number of elements are available in the array
// Syntax:-
// arrayName.length

console.log(array.length) // 7 - 0-6 // 7

for(let i=0; i<array.length; i++){
    console.log(array[i])
}

// for ...of loop
// Syntax:-
/*

for(variable of array){
// code
}

*/
console.log("**************************");
for(const i of array){
    console.log(i);
}

console.log("***********Methods of an array**************");



