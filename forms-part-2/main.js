const form = document["theForm"]
form.addEventListener("submit", function(event){
    event.preventDefault()
    //radio:
    // const genderChoice = form.gender.value
    // console.log(genderChoice)
    // const h1 = document.createElement("h1")
    // h1.textContent = `${genderChoice}`
    // document.getElementsByTagName("body")[0].append(h1)

    //checkbox:
    // const box = []
    // for(let i = 0; i < form.animals.length; i++){
    //     if(form.animals[i].checked){
    //         box.push(form.animals[i].value)
    //     }
    //     console.log(box)
        // console.log(form.animals[i].checked)
//     }
//Select Dropdown Option:
    const chooseGame = form.games.value
    const h3 = document.createElement("h3")
    h3.textContent = `${chooseGame}`
    document.getElementsByTagName("body")[0].append(h3)
})