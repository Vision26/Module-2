// //# .some()
// Returns: Returns true if at least one item in the array matches your criteria, false otherwise
// Purpose: To see if something exists in an array


// # .every()
// Returns: Returns true if EVERY item in the array matches your criteria, false otherwise.
// Purpose: TO see if Everything in an array matches your criteria
//THESE METHODS RETURN BOOLEANS, TRUE OR FALSE

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

//.some():

const result = names.some(function(name){
    if(name[0] === "S"){
        return true
    }
})
// console.log(result)

const resultB = names.every(name => name[0] === "J")
console.log(resultB)