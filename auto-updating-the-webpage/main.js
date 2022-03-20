// GET's THE TODO's FROM THE DATABASE

function getData(){
    axios.get("https://api.vschool.io/warmachine/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}


// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    // document.getElementById('todo-list').innerHTML = ""
    clearList()
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

//innerHTML








//FORM for the POST request
const todoForm = document["todo-form"]
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const add = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""

    axios.post("https://api.vschool.io/warmachine/todo", add).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(`ERROR: ${err}`)
    })

})