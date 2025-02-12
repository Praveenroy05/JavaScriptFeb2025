// Operators - 

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators (=)


// 1. Arithmetic Op - An operator which perform mathematical operation
    // 1. Addition - (+)
    // 2. Subtraction - (-)
    // 3. Multiplication - (*)
    // 4. Division - (/)
    // 5. Modulus - (%)
    // 6. Exponentiation - (**)
    // 7. Increment op - (++)
    // 8. Decrement op - (--)


let a = 21
let b = 10

// + - number (add the 2 numbers)
console.log(a + b)
console.log("Hello" + " World"); // concatenation 

// - a-b
console.log(a-b);

// * - multiply 2 number
console.log(a*b);
// / - divide 2 number
console.log(a/b); // 2.1

// % - Modulus - remainer 
console.log(a%b); // 1

// ** - Exponential
// a ** b = a^b // 2 ** 3 // 2^3 // 8

console.log(9 ** 3); // 9^3



// ++ - Increment Op ++ +1 // x++ = x+1

// Pre-increment (++x)- Action will be performed after the value will be incremented

let c = 10
console.log(c);
console.log("line 51 - ", ++c); // 11



// Post increment (x++) - x+1 - Action will be performed first and then the value will be incremented
let d = 15
console.log("line 57- ", d++); // 15++ = 15+1 // 16
console.log("line 58 - ", d); 


// -- - decrement Op

// pre-decrement (--X) - Action will be performed after the value will be decremented

let e = 20
console.log(--e) // e-1

// post decrement (X--) - Action will be performed first and then the value will be decremented

let f = 25
console.log(f--) // 25-1
console.log(f) // 24

console.log("*************Comparison Operators**********");

// Comparison Operators - It compares the values and return the result in the form of boolean (true or false)

/*
    1. Equal to (==)
    2. Not Equal to (!=)
    3. Greater than (>)
    4. Less than (<)
    5. Greater than or Equal to (>=)
    6. Less than or Equal to (<=)
    7. Strictly Equal to (===)
    8. Strictly Not Equal to (!==)

*/

// 1. Equal to (==)
// It checks if the values are equal or not. If the values are equal then it returns true
// else it returns false.

let g = 10 // number
let h = "10" // string

console.log(g==h) // 10==20

// 2. Not Equal to (!=)
// It checks if the values are not equal . If the values are not equal then it true else false
console.log(g!=h) // true 

// 3. Strictly Equal to (===)
// It checks if the values and data type are equal or not. If the values and data type are same then it will return true else false

console.log(g===h); 


// 4. Strictly Not Equal to (!==)
// It checks if the values and data type are not equal. If the values and datatype 
// are not same then it will return true else false
console.log(g!==h); 

// 5. Greater than (>)
// It checks if the value of the first operand is greater than the value of the second operand.
// If the value of the first operand is greater than the value of the second operand then it will
// return true else false
console.log(10>5); // true
console.log(5>10); // false

// 6. Less than (<)
// It checks if the value of the first operand is less than the value of the second operand.
// If the value of the first operand is less than the value of the second operand then it will
// return true else false
console.log(5<10); // true
console.log(10<5); // false

// 7. Greater than or equal (>=)
// It checks if the value of the first operand is greater than or equal to the value of the
// second operand.
// If the value of the first operand is greater than or equal to the value of the second operand
// then it will return true else false
console.log(10>=10); // true
console.log(5>=10); // false

// 8. Less than or equal to (<=)
// It checks if the value of the first operand is less than or equal to the value of than
// second operand.
// If the value of the first operand is less than or equal to the value of the second operand
// then it will return true else false
console.log(10<=10); // true
console.log(10<=5); // false

console.log("*************Logical Operators**********");

// 3. Logical Operators - Will try to compare the boolean expression
    // 1. AND (&&) 
    // 2. OR (||)
    // 3. NOT (!)

// 1. AND (&&)  - It will return true if both the conditions are true else false

// true && true - true
// true && false - false
// false && true - false

console.log((10>5) && (7>8)) // true && false - false
console.log((10>5) && (7<8)) // true && true - true
console.log((10<5) && (7>6)) // false && true - false

// 2. OR (||) - It will return true if any of the conditions are true else false

// true || true - true
// true || false - true
// false || true - true
// false || false  - false

console.log((10>5) || (7>8)) // true || false - true
console.log((10>5) || (7<8)) // true || true - true
console.log((10<5) || (7>6)) // false || true - true
console.log((10<5) || (7<6)) // false || false - false

// 3. NOT (!) - It will return true if the condition is false or vice versa
// !true - false
// !false - true
console.log(!(11>9)) // false
console.log(!(9>20)) // true

// sales - country

console.log("*************Assignment Operators**********");

// Assignment OP (=)
let i = 34
let j = 40
let k = 79
let l = 65

// +=, -+, *=, /=

console.log(i += 5) // i = i+5 // i = 34+5 == 39
console.log(j -= 5) // j = j-5 // j = 40-5
console.log(k *= 5) // k = k*5 // k = 79*5
console.log(l /= 5) // l = l/5 // l = 65/5



