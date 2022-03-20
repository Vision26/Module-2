function sum(num1, num2){
    return num1 + num2
}

const actual = sum(10, 10)
const expected = 20

if(actual !== expected){
    throw new Error(`Expecting: ${expected}; Return: ${actual} did not passed`)
} else {
    console.log(`TEST PASSED: ${actual} === ${expected}`)
}