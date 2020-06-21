// EC Test File
// JavaScript ES6+

// Old function definition
function old_function(param1, param2) {
    super() // Built-in

    return param1 + param2    
}

// Modern function
const new_function = (param1, param2) => {
    super() // Built-in

    return param1 + param2
}

// Variable definitions
let string = "amazing"
let number = 123
let character = 'A'
let boolean = true
let floating_point = 3.14159265359
let t_string = `This is a normal string but has ${string} variables in it.`

// Constant definitions
const STRING = "amazing"
const NUMBER = 123
const CHAR = 'A'
const BOOL = true
const FLOAT = 3.14159265359
const T_STR = `This is a normal string but has ${string} variables in it.`


// User-defined function call

const result = old_function(1, 2)
let result2 = new_function(3, 4)

// ERROR: (overwriting a constant)
const final = 0;
final = result + result2

// Safe (overwriting a variable)
let final_var = 0;
final_var = result + result2

// Semi-colons
// Optional in JavaScript
console.log("Built-in function without semi-colon")
console.log("Built-in function with semi-colon");