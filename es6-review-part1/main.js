// Why is ageRange not defined?
// Answer: var scopes to the functions curly brackets and let scopes any curly brackets
function getAgeRange(person){
    let ageRange
    if(person.age < 18){
        ageRange = "Child"
         
    } else if(person.age >= 18 && person.age < 80){
        ageRange = "Adult"
         
    } else {
        ageRange = "Elderly Person"
    }
    return ageRange
}

// How can we fix this function with var? 
var ageRange = ["Child", "Adult", "Elderly Person"]
    if(person.age < 18){
        return ageRange[0]
    } else if(person.age >= 18 && person.age < 80){
        return ageRange[1]
    } else {
        return ageRange[2]
    }


// How can we fix this function avoiding the use of var?
function getAgeRange(person, arr){
    if(person.age < 18){
        return arr[0]
    } else if(person.age >= 18 && person.age < 80){
        return arr[1]
    } else {
        return arr[2]
    }
}
getAgeRange(["child", "adult", "elderly person"])

// Why would you use const vs let?
// const is used on a variable that will not change, can be used on arrays and objects
// let is used for variables that will change


// What would the above function potentially look like if we destructured the person parameter?
function getAgeRange({age}){
    let ageRange 
    if(age < 18){
        ageRange = "Child"
    
    } else if(age >= 18 && age < 80){
        ageRange = "Adult"
        
    } else {
        ageRange = "Elderly Person"
    }
    return ageRange
}

const person = { name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person?
//because objects are muttable, use const on every immutable
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors

//or lines that clutter the console
console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`)
// change the above concatented string into a template literal

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
const fringeMonths = [...springMonths, ...fallMonths]
// console.log(fringeMonths)

// console.log(springMonths, fallMonths, fringeMonths)