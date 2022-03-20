fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(res => {
    console.log(res)
    for(let i = 0; i < res.results.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = res.results[i].name
        document.body.appendChild(h1)
    }
})
.catch(err => console.log(err))



// fetch("https://rickandmortyapi.com/api/character", {method: "post",
// body: JSON.stringify({})}) <---you can use this structure to "GET", "POST", "PUT", "Delete"