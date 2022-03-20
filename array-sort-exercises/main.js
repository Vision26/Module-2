//1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
  arr.sort((a, b) => a - b)
  // console.log(arr)
}
leastToGreatest([1, 3, 5, 2, 90, 20])

// 2) Sort an array from largest number to smallest
function greatestToLeast(arr) {
  arr.sort((a, b) => b - a)
  // console.log(arr)
}

greatestToLeast([1, 3, 5, 2, 90, 20])

// 3) Sort an array from shortest string to longest
function lengthSort(arr) {
  arr.sort() //this is sorting alphabetically
  // console.log(arr)
}
lengthSort(["dog", "wolf", "by", "family", "eaten"])

// 3) Sort an array from shortest string to longest
function lengthSort(arr) {
  arr.sort(function (a, b) {
    return a.length - b.length
    
  })
  console.log(arr)
  }

lengthSort(["dog", "wolf", "by", "family", "eaten"])

// 4) Sort an array alphabetically
function alphabetical(arr) {
arr.sort()
console.log(arr)
return arr
}
alphabetical(["dog", "wolf", "by", "family", "eaten"])

// 5) Sort the objects in the array by age
function byAge(arr){
  arr.sort((a, b) => a.age - b.age)
  console.log(arr)
}
byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
])


//EXAMPLES:

// (a === "by" && b === "family") //x
// (a === arr[2] && b === arr[3]) //x
// (a.length === b.length) //x
// (arr.length)

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// function fiveCharactersOrFewerOnly(arr) {
//   const resultC = arr.filter(arrs => arrs.length < 5)
// console.log(resultC)
// }
// fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])

//const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

 // arr.sort(function(a, b){
//     return b - a
// })

// //ES6 Syntax:
// arr.sort((a, b) => a - b)
// console.log(arr)