//# .filter()
// Returns: A new array with only the filtered out items from the original array
// Purpose: Reducing a data set into a sub-data set.
//     Ex: Initial array has all movies ( action, fantasy, horror )
//         You could use filter to return an array with only the action movies.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

1. 
const result = arr.filter(num => num % 2 === 0)
console.log(result)

//2.
// const result = arr.filter(num => num % 2 === 0)
// 3. const result = arr.filter(num => num % 2 === 0 ? true:false) <---this would 
//--> be another way to execute arrow function using ":"
//-->as an "else" statement, but its considered extra work you dont need to do
//-->because "num % 2 === 0" is already a truthy value 
// console.log(result)

const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const genrE = movies.filter(movie => movie.genre === "action")
console.log(genrE)