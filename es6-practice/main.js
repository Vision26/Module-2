//let and const
// Replace all the vars with let and const. Alter the code however necessary to 
// make sure this continues to work (so the pet's name isn't "John", but instead 
// "spot" is returned). You only need to delete var and insert let and const

// John is the pet owner, and his name should be stored differently than the other names.

let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log(`man name: , ${name}`)
    return petObjects
}

runForLoop(["cat", "dog"])

//Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the =>
//      it will think it's starting a function, and not starting
//       an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    //  const obj = arr.map(carrot  =>  ({type: "carrot", name: carrot}))
    console.log(arr.map(carrot  =>  ({type: "carrot", name: carrot})))
}
    mapVegetables(carrots)

    // Task 2
// Re-write this .filter() using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
   const friend =  arr.filter(person => person.friendly)
    console.log(friend)
}

// Task 3
// Re-write the following functions to be arrow functions:

// const doMathSum = (a, b) =>  a + b 

// const produceProduct = (a, b) =>  a * b  

//Task 4
// Write a printString function that takes firstName,
//  lastName, and age as parameters and returns a string like the following:

// function printString(firstName, lastName, age){
// return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// }
    

const printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
console.log(printString("Jane", "Doe", "100"))

//Task 5
// Use the shorthand syntax to make the following
//  filter take up one line. Copy and paste the array
//   to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

//  function filterForDogs(arr) {
//    const dogs =  arr.filter(animal => animal.type === "dog" ? true : false )
//    console.log(dogs)
// }

const filterForDogs = (arr) => arr.filter((animal) => animal.type === "dog" ? true : false)
console.log(filterForDogs(animals))