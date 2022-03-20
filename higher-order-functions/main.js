//Higher Order Functions

//A Higher Order Function/Method is a function that:
// 1. Takes a function as a parameter
// or / and
// 2. Returns a function

// Higher Order array methods follow that first criteria as they require a function as a parameter.  They do not return a function.
// callback - is a function passed into another function

//This function would be considered a higher order function
function doMath(num1, num2, callback) {
    return callback(num1, num2)
}

//sum would be considered callback functions 
function sum(num1, num2) {
    return num1 + num2
}

//subtract would be considered a callback function
function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

//doMath is the higher order function, passing two numbers through num1 and num2, and sum would be passed through
//--> callback which will execute sum() function
console.log(doMath(2, 4, sum))
console.log(doMath(20, 100, subtract))
console.log(doMath(5, 5, multiply))
console.log(doMath(16, 8, divide))

//Common Higher Order Function Methods:
//.map():Returns a new array with a change made to every item from the original array
//-->Whatever you return from the inner function is inserted into the same index as the original array
var arr = [1, 2, 3, 4];

console.log(arr.map(function (item) {
    return item + 3;
}))

//compare through a normal for loop:
var arr = [1, 2, 3, 4];

for (var i = 0; i < arr.length; i++) {
    arr[i] += 5;
    console.log(arr)
}

var dogs = ['lab', 'poodle', 'shih-tzu'];

console.log(dogs.map(function (dog) {
    return dog + 'ggos are quite fancy';
}))

//.filter():Returns a new array that only includes some of the items from the original array
// -->If inner function returns true (or something "truthy"), 
// -->that item is included in the new array. If it returns false (or something "falsey"), it doesn't include it in the new array.
var numbers = [12, 4, 56, 27];

console.log(numbers.filter(function (number) {
    return number >= 25;
}))

//Old for loop way:
var numbers = [12, 4, 56, 27];
var newArr = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 25) {
        newArr.push(numbers[i]);
        console.log(newArr)
    }
}
//.reduce():Returns any kind of value you want (number, string, boolean, array, etc.)
//--> Inner function used to combine the values from the original array into a single value
//-->of some kind. E.g.: adding all the values together from an array of numbers.
var numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce(function (a, b) {
    return a + b
}))

//.sort():Modifies/mutates the original array by re-ordering the items therein.
// -->Inner function compares 2 items and determines how they should be reordered.
//low to high:
var scores = [12, 98, 34, 85];

console.log(scores.sort(function (a, b) {
    return a - b
}))

//high to low:
var scores = [12, 98, 34, 85];

console.log(scores.sort(function (a, b) {
    return b - a
}))

//sort alphabet alphabeticallly:
var words = ['bat', 'pineapple', 'drugs', 'zebra', 'ghost'];

console.log(words.sort())
//.forEach():Returns undefined (don't expect to receive anything in return)
//--> Runs the inner function once for every item in the original array
var numbers = [1, 2, 3, 4]

numbers.forEach(function (number) {
    return number * 2
})
//no changes occured

var numbers = [1, 2, 3, 4]

console.log(numbers.forEach(function (number, i) {
    return numbers[i] = number * 2
}))
//We added i as the second parameter. Anytime a second
//  parameter is given to .map, .filter, or .forEach, it becomes 
//  the index of that array.
// Take note of the s at the end of numbers in the return statement.
//  We are grabbing the index of the original array and we are not using 
//  the number parameter that we created in the callback function.
// numbers[i] = number * 2 correct
// number[i] = number * 2 incorrect
// So what is the point of having forEach() if it doesn't save anything?
//  Well it could be used for testing purposes if you wanted to see what
//   happened without actually making any changes. Or it could be used to to
//    run a function on each item. However, 9 times out of ten you will use 
//    .map over .forEach.

//.find():Returns one of the items from the array
// -->If inner function returns true, the .find() finishes and returns that current
// -->value in the original array. If it returns false, it continues to search through 
// -->the array until it returns true. If it never returns true (no items match the condition), 
// -->it returns undefined
var numbers = [2, 25, 21, 23, 29]

console.log(numbers.find(function(number){
    return number > 20
}))
//.findIndex():Same as .find() but instead of returning the item in the array,
// -->it returns the index where it found the matching item
var numbers = [12,30,5,62,18,53]

console.log(numbers.findIndex(function(number){
    return number > 50
}))
//.some():Returns either true or false
// -->If inner function returns true, the .some() immediately returns true (because at least
// -->one of the items matches your condition). If the inner function returns false for every item in 
// -->the array, the .some() returns false (no items matches your condition)
var numbers = [12,30,5,62,18,53]

console.log(numbers.some(function(number){
    return number > 50
}))

//if no numbers are greater than 50 then it returns
//--> false
var numbers = [1,5,19,49,23]

numbers.some(function(number){
    return number > 50
})

//.every():Returns true or false
//--> Opposite of .some(), in that if the inner function ever returns false for any item, .every() immediately 
// --> returns false (because NOT every item matched the condition). If the inner function returns true for every
//--> item in the array, the .every() returns true

var numbers = [12,30,5,62,18,53]

console.log(numbers.every(function(number){
    return number > 50
}))

//if all numbers less than zero then it returns false
var numbers = [1,5,19,49,23]

console.log(numbers.every(function(number){
    return number < 50
}))














// function sum(num1, num2, num3){
//     return num1 + num2 + num3
// }
// console.log(sum(2, 4, 2))