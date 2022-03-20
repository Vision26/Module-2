// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    const total = arr.reduce(function (final, num) {
        final = final + num
        return final
    })
    // console.log(total)
}

total([1, 2, 3])

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    const stringify = arr.reduce(function (final, strings) {
        final.push(`${strings}`)
        return final
    }, [])
    // console.log(stringify)
}

stringConcat([1, 2, 3])

//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    const votes = arr.reduce(function (final, voter) {
        if (voter.voted) {
            final.didVote++
        } else {
            final.didntVote++
        }
        return final
    }, { didVote: 0, didntVote: 0 })
    // console.log(votes)
}

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
totalVotes(voters)

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    const totalB = arr.reduce(function (final, arrs) {
        final += arrs.price
        return final
    }, 0)
    //  console.log(totalB)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

shoppingSpree(wishlist)

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    const flat = arr.reduce(function (final, array) {
        const one = array.slice(0, 1)
        const two = array.slice(1, 2)
        const three = array.slice(2)
        // console.log(one, two, three)
        const together = one.concat(two)
        const again = together.concat(three)
        final.push(again)
        return final
    }, [])
    // console.log(flat)
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays)

// 6) Given an array of potential voters, return an object representing the results of the vote
//-->Include how many of the potential voters were in the ages 18-25, how many from 26-35, how 
//-->many from 36-55, and how many of each of those age ranges actually voted. The resulting object
//-->containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    const votes = arr.reduce(function (final, voter) {
        if (voter.age > 18, voter.age < 26) {
            final.numYoungPeople++
            if(voter.voted){
                final.numYoungVotes++
            }
        } else if(voter.age > 26, voter.age < 36){
                final.numMidsPeople++
                if(voter.voted){
                        final.numMidVotesPeople++
                }
        } else if(voter.age > 36 ){
            final.numOldsPeople++
            if(voter.voted){
                final.numOldVotesPeople++
            }
        }
        return final
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    })

    console.log(votes)
}

voterResults(voters)








// const resultA = nums.reduce(function (final, num) { //(final, is the final result of data crunch togehter, current, is 
//     //-->representing each item in the array in this case youre using "num" instead of current and it is
//     // -->representing each number in the nums array)
//     //.reduce(you got first function[function(final, current)]{code}, but it can alse take a second arguement!)
//     //final = final + num
//     //return final
//     final += num
//     return final
// }, 0)//<--this would be a second arguement, and its pretty much a starting point, adding whatever number you add in
// // console.log(resultA)