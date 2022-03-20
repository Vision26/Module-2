// const axios = require("axios")
// const data = axios.get("https://api.vschool.io/axiosdelirium/todo")
// console.log(data)

//user can see there current list of todos
function getData() {
    axios.get("https://api.vschool.io/axiosdelirium/todo")
        .then(response => {
            createTodo(response.data)
            console.log(response.data)
        }).catch(error => console.log(error))
}
getData()

//todo shows up as soon as the the page loads
function createTodo(res) {
    const todo = document.getElementById("todo-list")
    clearList()
    // let checkedOff = []
    // console.log(checkedOff)
    for(let i = 0; i < res.length; i++) {
        const div = document.createElement("div")
        const title = document.createElement("h1")
        const price = document.createElement("h2")
        const description = document.createElement("h2")
        const img = document.createElement("img")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "checkbox"
        checkbox.checked = res[i].completed
    
        title.textContent = res[i].title
        description.textContent = res[i].description
        img.src = res[i].imgUrl
        price.textContent = res[i].price

        // div.className = res[i].completed
        // div.id = res[i]._id


        div.appendChild(checkbox)
        div.appendChild(title)
        div.appendChild(description)
        div.appendChild(img)
        div.appendChild(price)

        todo.appendChild(div)
        //if statement
        if (res[i].completed === true) {
            div.style.textDecoration = "line-through"
            checkbox.checked = true
        } else {
            div.style.textDecoration = "none"
            checkbox.checked = false
        }
        //do not repeat yourself- DRY
    
    
        checkbox.addEventListener("change", () =>
            axios.put("https://api.vschool.io/axiosdelirium/todo/" + res[i]._id, {completed: checkbox.completed})
            .then(response => {
             getData()})
             .catch(er => {
                 console.log(er)
             }) 
        )

        const delButton = document.createElement("button");
        delButton.textContent = "DELETE";
        div.appendChild(delButton);
        
        delButton.addEventListener("click", function(){
            console.log("delButton is working")
            axios.delete("https://api.vschool.io/axiosdelirium/todo/" + res[i]._id)
            .then(response => {
             getData()})
             .catch(er => {
                 console.log(er)
             })
            })
        }}
    // deleteButtons()


function clearList() {
    const el = document.getElementById("todo-list")
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

//Form/Post Request
const form = document.todo
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.inputNumber.value,
        imgUrl: form.images.value
    }
    console.log(newTodo)
    form.title.value = ""
    form.description.value = ""
    form.inputNumber.value = ""
    form.images.value = ""

    axios.post("https://api.vschool.io/axiosdelirium/todo", newTodo)
        .then(response => {
            getData()
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
})


//DELETE Button
// function deleteButtons(){
//     const el = document.getElementById("todo-list").children;
//     for(let i = 0; i < el.length; i++){
//         const delButton = document.createElement("button");
//         delButton.textContent = "DELETE";
//         el[i].appendChild(delButton);

//         delButton.addEventListener("click", function(event){
//                 axios.delete("https://api.vschool.io/axiosdelirium/todo")
//                 .then(response => {
//                  console.log(response.data)})
//                  .catch(er => {
//                      console.log(er)
//                  })
//         })
//     }
// }


















// const delButton = document.getElementById("delete-button")

// delButton.addEventListener("click", function(event){

// })




