// Operators - 

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators


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
