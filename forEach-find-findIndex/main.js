//# .forEach
// Returns: Undefined 
// Purpose: Used in place of a for-loop
//     Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
//             forEach will always loop the entire length of the array.
            
// # .find()
// Returns: The first item it finds in the array that matches your criteria
// Purpose: Finding an item in an array

// # .findIndex()
// Returns: The index number of the first item it finds in the array that matches your criteria
// Purpose: Finding the index number of an item in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]
//.forEach:

// const result = arr.forEach(arrs => console.log(arrs))
// console.log(result) //logs undfined, forEach()does not have to be assigned into a variable because 
// //-->its purpose its to just loop over the array

// //using .forEach in a variable, making a new array with even numbers using the "arr" numbers array:
// let newArr = []
// arr.forEach(function(arrs){
//     if(arrs % 2 === 0){
//         newArr.push(arrs)
//     }
//     console.log(newArr)
// })

//or ES6 SYNTAX!:
const newArr = []
arr.forEach(arrs => arrs % 2 === 0 && newArr.push(arrs))
// console.log(newArr)

//proper way of using .forEach():
// arr.forEach(arrs => console.log(arrs))

//.find():

//remember .find() is looking for the FIRST item with the letter "j", so its always gonna
//-->for the FIRST ITEM
const result = users.find(user => user.name[0] === "j" )
// console.log(result)

//.findIndex():

// const resultB = users.findIndex(user => user.name === "rick")
// console.log(resultB)

//or none ES6:

const resultB = users.findIndex(function(user){
    if(user.name === "rick"){
        return true
    }
})
console.log(resultB)


