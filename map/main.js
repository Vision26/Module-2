//High order array methods
//.map():
//    returns: A new array the same size as the input array
// purpose:allows you to take an array of data and create a new 
// array of data from it.

const arr = [1, 2, 3, 4, 5, 6]

const result = arr.map(function(num){//num = arr[i]<--every item in the array
return num + 2
})
console.log(result)

//ES6
//const result = arr.map(num => num + 2)
//console.log(result)

//using a array of "users"
const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

// const anotherArr = users.map(user => user.name + 's')
// console.log(anotherArr)
//it added an "s" at the end every name

const oneMore = users.map(function(user){
    return user.name
})
console.log(oneMore)
console.log(users)