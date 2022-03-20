// # .sort()
//     Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
//     Purpose: To sort an unsorted array of items.

//.sort():
const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// arr.sort(function(a, b){
//     return b - a
// })

//ES6 Syntax:
arr.sort((a, b) => a - b)
console.log(arr)