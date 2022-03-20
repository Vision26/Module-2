//For this review, follow the directions in the JS file to make the code more ES6y.
//  Comment and uncomment code as you work down the file. Run it to make these funcitons
//   work or just more readable practicing ES6.

// You'll be using:

// arrow functions
// rest
// spread
// destructuring in a parameter
// default parameters

// const button = document.getElementById('button')
// const output = document.getElementById('output')
// const input = document.getElementById('input')
// // change this function to be an arrow function
// button.addEventListener('click', (e) => output.innerText = "You've submitted: " + input.value)


//-------------------------------------------------------------------------------------------
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// function collectAnimals(...animal) {  
//     return console.log(animal)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

//-------------------------------------------------------------------------------------------
// Use destructuring to use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({location, duration}){
  return console.log(`We're going to have a good time in ${location} for ${duration}`)
}

// console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

//-------------------------------------------------------------------------------------------
// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants
function unshift(array, ...arr) { 
    return [...arr, ...array];
}
console.log(unshift())

//-------------------------------------------------------------------------------------------
// make "greeting" default to "hello"
function greet(name, greeting){

    return greeting + ", " + name
}

console.log(greet('Emily', "hello"))