// EC Test File
// JavaScript template strings

const variable = "Hello, "

const templated = `${variable} World!`

const test_function = (message) => {
    return message
}

const templated_with_string_in_function = `Hello, ${test_function("World!")}`

console.log(templated) // Hello, World!
console.log(templated_with_string_in_function) // Hello, World!