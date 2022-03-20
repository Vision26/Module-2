// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML <li> element.

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfFirstName(arr){
    const ageList = arr.reduce(function(final, people){
        if(people.age > 18){
            final.push(people.firstName)
        }
        return final
    }, [])
    // console.log(ageList)
}
// sortedOfFirstName(peopleArray)
 
 function sortedOfLastName(arr){
  const lastNamesList = arr.reduce(function(final, last){
      final.push(last.lastName)
      final.sort()
      return final
  }, [])
  console.log(lastNamesList)
 }
//   sortedOfLastName(peopleArray)

 function sortedOfH1(arr){
    const element = arr.map(function(arrs){
        return `<li> ${arrs.firstName} ${arrs.lastName} is ${arrs.age} <li>`
}, [])
console.log(element)
}
 sortedOfH1(peopleArray)

// //  function stringItUp(arr){
// //     let resultA = arr.map(function(letter){
//       return `${letter}`
//     })
//     // console.log(resultA)
//   }


//  function alphabetical(arr) {
//     arr.sort()
//     console.log(arr)
//     return arr
//     }