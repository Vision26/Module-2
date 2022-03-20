//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    let resultA = arr.filter(arrs => arrs > 5)
    console.log(resultA)
   return resultA
  }
fiveAndGreaterOnly([3, 6, 8, 2])

//2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    const resultB = arr.filter(arrs => arrs % 2 === 0)
    console.log(resultB)
  }
evensOnly([3, 6, 8, 2])  

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    const resultC = arr.filter(arrs => arrs.length < 5)
  console.log(resultC)
  }
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr){
  const resultD = arr.filter(arrs => arrs.member !== true)
  console.log(resultD)
}
peopleWhoBelongToTheIlluminati([
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
])
  
//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
function ofAge(arr){
  const resultE = arr.filter(arrs => arrs.age > 18)
  console.log(resultE)
}
ofAge([
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
])



// // 3) Capitalize each of an array of names
// function capitalizeNames(arr){
//   let resultB = arr.map(function(arrs){
//     let one = arrs.slice(0, 1)
//     let oneHalf = arrs.slice(1, Math.floor(arrs.length / 1))
//     let two = one.toUpperCase()
//     let three = two.concat(oneHalf)
//     return three
//   })
//   console.log(resultB)
// }
// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])