function test(param1) {
    const unused_variable = "test"
    const readonly_variable = "test"
    let variable = "test"

    console.log(param1)             // Function parameter
    console.log(readonly_variable)  // Readonly variable (constant)
    console.log(variable)           // Writable variable
}

class Test {
    constructor() {
        // nut
        this._nut = "butter"
    }
}