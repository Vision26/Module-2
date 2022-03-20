// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    let result = arr.map(function(num){
      return num * 2
    })
     console.log(result)
  }
  doubleNumbers([2, 5, 100])

//   // 2) Take an array of numbers and make them strings
  function stringItUp(arr){
    let resultA = arr.map(function(letter){
      return `${letter}`
    })
    // console.log(resultA)
  }

console.log(stringItUp([2, 5, 100]))

// 3) Capitalize each of an array of names
function capitalizeNames(arr){
  let resultB = arr.map(function(arrs){
    let one = arrs.slice(0, 1)
    let oneHalf = arrs.slice(1, Math.floor(arrs.length / 1))
    let two = one.toUpperCase()
    let three = two.concat(oneHalf)
    return three
  })
  console.log(resultB)
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])

// 4) Make an array of strings of the names
function namesOnly(arr) {
  let stringify = arr.map(function (arrs) {
    return arrs.name
  })
  console.log(stringify)
}

namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])

//5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
  let matrix = arr.map(function (arrs) {
    if (arrs.age > 18) {
      return `${arrs.name} can go watch the matrix`
    } else {
      return `${arrs.name} cannot go watch the matrix`
    }
  })
  console.log(matrix)
}

makeStrings([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])

// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr) {
  let dom = arr.map(function (arrs) {
 return `<h1> ${arrs.name} <h1> <h2> ${arrs.age} <2>`
  })
  console.log(dom)
}

readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])




// function capitalizeAndLowercase(hello){
//   var oneMore = hello.slice(0, Math.floor(hello.length / 2))
//   var twoMore = hello.slice(2, 5)
//   var capital = oneMore.toUpperCase()
//   var finish = capital.concat(twoMore)
//   console.log(finish)
// }
// capitalizeAndLowercase(hello)
// var name = "jose"
// var splitName = name.split("")
// console.log(splitName)

// var joseIndex = splitName.indexOf("o")
// console.log(joseIndex)
  //arr.map(function (item) {
//     return item + 3;
// })

// const result = arr.map(function(num){//num = arr[i]<--every item in the array
//   return num + 2
//   })
//   console.log(result)