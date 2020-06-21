// EC Test File
// Static Types & interfaces

// Interfaces are definitions to check a type against
interface Person {
    name: string,
    age: number,
    height?: number // optional value
}

// Simple function that takes a Person and returns age value (which is required)
const get_age = (person: Person) => {
    return person['age']
}

// Create a new Person object, without the optional element
const test: Person = {
    name: "Joe",
    age: 18
}

// Pass new Person into get_age function
const age = get_age(test)

console.log(age)