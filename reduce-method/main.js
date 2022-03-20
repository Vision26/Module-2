//# .reduce()
// Returns: Whatever you want it to! (See video for explanation)
// Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const resultA = nums.reduce((final, num) => final += num) //<---or you can write final = final + num
// console.log(resultA)

//none ES6:

const resultA = nums.reduce(function (final, num) { //(final, is the final result of data crunch togehter, current, is 
    //-->representing each item in the array in this case youre using "num" instead of current and it is
    // -->representing each number in the nums array)
    //.reduce(you got first function[function(final, current)]{code}, but it can alse take a second arguement!)
    //final = final + num
    //return final
    final += num
    return final
}, 0)//<--this would be a second arguement, and its pretty much a starting point, adding whatever number you add in
// console.log(resultA)





// 2 - reduce the users to an array of strings of the user's first and last names
// const users = [
//     { fName: "joe", lName: "smithy" },
//     { fName: "tina", lName: "johnson" },
//     { fName: "rick", lName: "sanchez" }
// ]
// const resultB = users.reduce(function(final, current){
// final.push(`${current.fName} ${current.lName}`)
// return final
// }, [])
// console.log(resultB)

//ONE MORE:

const doggos = [
    { name: "Baden", type: "Lab Mix" },
    { name: "Zeus", type: "German Shepherd" },
    { name: "Mimi", type: "Chiuhaha" }

]

const result = doggos.reduce(function (final, doggo) {
    final.push(`${doggo.name} ${doggo.type}`)
    return final
}, [])
console.log(result)


// 3 - reduce the array into a count of how many people voted
// const voters = [
//     { name: "steve", voted: true },
//     { name: "janet", voted: true },
//     { name: "rebecca", voted: false },
//     { name: "harvey", voted: true },
// ]

// const finalVote = voters.reduce(function(final, voter){
//     //if(!voter.voted){ <-- if you "!" at the beginning of the statement its saying "not, or did not" logging a falsey value-->
//     //     final++
//     // }
//     if(voter.voted){
//         final++
//     }
//     return final
// }, 0)
// console.log(finalVote)

// Return an object that has a count of both who voted and who didnt
//--> { didVote: 3, didntVote: 1 }:

// const total = voters.reduce(function (final, voter) {
//     if (voter.voted) {
//         final.didVote++
//     } else if(!voter.voted){
//         final.didntVote++
//     }
//     return final
// }, { didVote: 0, didntVote: 0 })
// console.log(total)

const jumpers = [
    {name:"daniel", jumped:true},
    {name:"rafa", jumped:false},
    {name:"Jr", jumped:true},
    {name:"danny", jumped:false},
    {name:"mayra", jumped:false},
    {name:"jose", jumped:true}
    ]

    const whoJumped = jumpers.reduce(function(final, jumper){
        if(jumper.jumped){
            final.didJumped++
        } else if(!jumper.jumped){
            final.didntJumped++
        }
        return final
    }, {didJumped:0, didntJumped:0})
    console.log(whoJumped)