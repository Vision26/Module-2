// console.log(axios)

// Get requests with axios
// url: https://api.vschool.io/<yourname>/todo

// Get All
axios.get("https://api.vschool.io/warmachine/todo/").then(response => {
    console.log(response.data)
}).catch(error => {
    console.log(`ERROR: ${error}`)
})
2

const form = document["todoform"]
form.addEventListener("submit", function(event){
    event.preventDefault()
    const newTodo = {
        title:form.title.value,
        description:form.description.value,
        imgUrl:form.imgUrl.value
    }
// POST request
    axios.post("https://api.vschool.io/warmachine/todo/", newTodo).then(res => {
        console.log(res.data)})
        const h1 = document.createElement("h1")
        h1.textContent = newTodo.title
        document.body.appendChild(h1)})
        .catch(err => console.log(err)
        )
    

//GET request

// axios.get("https://api.vschool.io/warmachine/todo").then(response => {
//     console.log(response.data)
//    for(let i = 0; i < response.data.length; i++ ){
       
//           const h1 = document.createElement("h1")
//           h1.textContent = response.data[i].title
//           document.body.appendChild(h1)
//    }
// }).catch(error => {
//     console.log(`ERROR: ${error}`)
// })


//Delete request

axios.delete("https://api.vschool.io/warmachine/todo/60c13758ee6f8d3fc3fee0e9").then(response => {
    console.log(response)
}).catch(error => {
    console.log(`ERROR: ${error}`)
})

// Delete with a button: pretend theres a button in the html
// the axios.delete would trigger the addEventListener
const button = document.getElementById('delete-button')

button.addEventListener("click", function(){
    axios.delete("https://api.vschool.io/scrimbalessons/todo/60c13778ee6f8d3fc3fee0ea")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})


//PUT request

// const updates = {
//     description:"this new title sucks!"
// }
// axios.put("https://api.vschool.io/warmachine/todo/60c13e36ee6f8d3fc3fee0eb/", updates).then(response => {
//     console.log(response.data)
// }).catch(error => console.log(`ERROR: ${error}`))

const person = {
    name:"jose",
    age:27
}

const update = {
    name:"baden"
}
const result = Object.assign(person, update)
console.log(result)