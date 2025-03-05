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

let arrays = [10,20,30,40,"TS", "JS", true, "Apple", "Orange"]
console.log(arrays)

// 2. push(element1, element2....) - add the element to the end of an array
// Syntax
// arrayName.push(element1, element2, ....)

arrays.push(50)
console.log("Push", arrays)

// 3. pop() - Removing the element from the end of an array
// Syntax:-
// arrayName.pop()
arrays.pop()
console.log("pop", arrays)

// 4. unshift(value) - Adding the element to the beginning of an array
// Syntax:-
// arrayName.unshift(value)
arrays.unshift(100, 200, 300)
console.log("unshift", arrays)

// 5. shift() - Remove the element from the start of an array
// Syntax:-
// arrayName.shift()
arrays.shift()
console.log("shift", arrays)

//let arrays = [200,300,10,20,30,40,'TS','JS',true,'Apple','Orange']

// 6. splice()
// Syntax:-
// arrayName.splice(startIndex, howmany, item1, item2, item3, ....)
// startIndex - The position where you want the add the elements
// howmany - The number of elements you want to delete from the array
// item1, item2, item3, .... - The elements you want to add


arrays.splice(2, 3, "Java", "Python")
console.log("Splice", arrays)

// 7. slice()
// Syntax:-
// arrayName.slice(startIndex, endIndex)
// startIndex - The position where you want to start the slice
// endIndex - The position where you want to end the slice
console.log(arrays.slice(-3, -1)) // -3..-1

// 8. toString()
// Syntax:-
// arrayName.toString()
console.log(arrays.toString())

// 9. indexOf(element)
// Syntax:-
// arrayName.indexOf(element)

const array1 = [10,50,30,40,10,20,"TS", "JS"]
console.log(array1.indexOf(10, 2)) 

// forEach(function), map(fun), filter(fun), reduce(fun), some(fun), every(fun)


// 10. forEach(function)
// Syntax:-
// arrayName.forEach(function(element, index, array){})

// element - The current element being processed - 10-0, 50-1, 30-2
// index - The index of the current element
// array - The array forEach() was called upon



array1.forEach(function(element, index){
    console.log(element)
})
console.log("**************")
for(let i=0; i<array1.length; i++){
    console.log(array1[i], i)
}


// 11. map(fun) - Create a new array
// Syntax:-
// arrayName.map(function(element, index, array){})

// element - The current element being processed - 10-0, 50-1,
// index(optional) - The index of the current element
// array (optional) - The array map() was called upon

let array2 = [10, 20, 30, 40, 50, 13]

const mapArray = array2.map(function(element){
    return element * element
})
console.log(mapArray)

// 12. filter(fun) - Create a new array but will return us only those values which passes the function
// Syntax:-
// arrayName.filter(function(element, index, array){})
 
// // element - The current element being processed
// index(optional) - The index of the current element
// array (optional) - The array filter() was called upon

const filterArray = array2.filter(function(element){
    return element % 2 ==1
})
console.log(filterArray)

// 13. some(fun) - Return us the value as true or false - if at least one element passes the constion true else it will retun us a false
// Syntax:-

// arrayName.some(function(element, index, array){})

// element - The current element being processed
// index(optional) - The index of the current element
// array (optional) - The array some() was called upon

const someArray = array2.some(function(element){
    return element > 50
})
console.log(someArray)

// 14. every(fun) - Return us the value as true or false - if all the elements passes the
// Syntax:-
// arrayName.every(function(element, index, array){})

// element - The current element being processed
// index(optional) - The index of the current element
// array (optional) - The array every() was called upon

let array3 = [1,2,3,4,5,7]

const everyArray = array3.every(function(element){
    return element > 1
    })
    console.log(everyArray)



    // 15. reduce(function) - 


