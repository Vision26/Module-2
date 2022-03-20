const axios = require("axios")

// const data = axios.get("https://swapi.dev/api/people")
// console.log(data)

// function assignResponseToVariable(response){
//     console.log(response.data)
// }
// axios.get("https://swapi.dev/api/people").then(assignResponseToVariable)

// axios.get("https://swapi.dev/api/peopl").then(response => {
//     console.log(response.data)
// }).catch(err => {
//     console.log(`ERROR: ${err}`)
// })

// const newTodo = {
//     title:"I am the hokage"
// }
// axios.post("https://api.vschool.io/blackholesynchronize/todo", newTodo).then(response => {
//     console.log(response.data)
// }).catch(err => {
//     console.log(`ERROR: ${err}`)
// })

// const editnewTodo = {
//     title:"I am not the hokage"
// }
// axios.put("https://api.vschool.io/blackholesynchronize/todo/60bffda0ee6f8d3fc3fee093", editnewTodo).then(response => {
//     console.log(response.data)
// }).catch(err => {
//     console.log(`ERROR: ${err}`)
// })

// axios.delete("https://api.vschool.io/blackholesynchronize/todo/60bffdbfee6f8d3fc3fee094").then(response => {
//     console.log(response.data)
// }).catch(err => {
//     console.log(`ERROR: ${err}`)
// })

axios.get("https://api.vschool.io/blackholesynchronize/todo").then(response => {
    console.log(response.data)
}).catch(err => {
    console.log(`ERROR: ${err}`)
})