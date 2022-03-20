//Web Storage; Local Storage and Session Storage - both properties of the browser
//its a storage for user use (ex:login info)
//# Local Storage 
// - Persists on page refresh and closing of the browser, info stays in the browser
// # Session Storage
//     - Does not persist on refresh or closing of the browser, info does not stay in the browser
// ## Both Session and Local storage are saved as JSON in the browser
//Getter-How to get data
//Setter- how to save data
// type: localStorage or window.localStorage, it is similar to using "document."
//JSON - Javascript Object Notation, a common way to save data, it would turn arrays and object into giant strings
//

//Setter:
localStorage.setItem("name", "steve") //string
//this take two arguements: (keyname, value)
localStorage.setItem("age", 10) //number
localStorage.setItem("isAlive", true) //boolean

//save the array
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))//in dev tools it wants this converted into JSON
//save object
localStorage.setItem("address", JSON.stringify({street: "1189 N Redwood Rd", city: "Salt Lake City", state: "UT"}))

//Getter:
const name = localStorage.getItem("name") //recommended
console.log(name)
const age = localStorage.getItem("age")
console.log(age)
const isAlive = localStorage.getItem("isAlive")
console.log(isAlive)
//For getter you have to do the opposite of stringify
// JSON.stringify() => turns JS into JSON
// JSON.parse() => turns JSON into JS
const friends = JSON.parse(localStorage.getItem("friends"))
console.log(friends)
const address = JSON.parse(localStorage.getItem("address")) //recommended
console.log(address)

//Remove
// localStorage.removeItem("age")

//localStorage <-- IS AN OBJECT, YOU DONT NECESSARILY HAVE TO USE 
//localStorage.getItem or localStorage.setItem you can just do this:

localStorage.cars = "Nissan" //setItem
console.log(localStorage.cars) //getItem
