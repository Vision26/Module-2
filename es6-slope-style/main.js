// //Use the Rest Operator to help this function return an array of animals,
// //  no matter how many animals are passed to it:

// function collectAnimals(...animals) {
//     console.log(animals)
//     return animals
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

// //Write a function that returns a food object with the array names as
// //  properties using Object Literals:


// function combineFruit(fruit, sweets, vegetables) {
//     return {fruits: fruit, sweetss: sweets, vegetabless: vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//     ["cake", "pie"],
//     ["carrot"]))

//     //Use destructuring to use the property names as variables. 
//     // Desructure the object in the parameter:

//     const vacation = {  
//         location: "Burly Idaho",
//         duration: "2 weeks"
//       };
      
//       function parseSentence({location, duration}){
//         return `We're going to have a good time in ${location} for ${duration}`
//       }
// console.log(parseSentence(vacation))

// //Use destructuring to make this code ES6:

// // const firstItem  /*change this line to be es6*/
// // function returnFirst(items){
// //     firstItem = items[0]
// //     return firstItem
// // }

// //Write destructuring code to assign variables that will help us return the expected 
// // string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// let firstFav 
// let secondFav 
// let thirdFav

// function returnFavorites(arr){
//         firstFav = arr[1]
//         secondFav = arr[3]
//         thirdFav = arr[4]
//     return `My top three favorite activities are,  ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

//Use the Rest and Spread Operator to help take any number of arrays, 
// and return one array. You will need to change how the arrays are passed 
// in. You may write it assuming you will always recieve three arrays if you
//  would like to.

// function combineAnimals(a, b, c) {  
//  const result = [...a, ...b, ...c]
//  return console.log(result)
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6xy:
// function product(...numbers) {  
//     const num = numbers.reduce((final, number) => final = final * number, 1)
//     console.log(num)
//   }
//   product(1, 2, 3, 4, 5)

//Make the following function more ES6xy. Use at least both 
// the rest and spread operators:
function unshift(array, ...second) {  
    return [...second, ...array]
  }
//   console.log(unshift(["f", "g", "h", "i", "k", "l"], "a", "b", "c", "d", "e"))

  //Write some destructuring code to help this function out. Use object literals 
//   to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//        name = name.split(" ");
//         return {
//             firstName: name[0],
//             lastName: name[1]
//         }
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
function populatePeople(names) {
    return names.map(function (name) {
    
        let [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        }
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
