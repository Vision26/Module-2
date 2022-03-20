const form = document["travel-form"]

form.addEventListener("submit", event => {
    event.preventDefault()
    const firstName = form.firstname.value
    form.firstname.value = ""
    const lastName = form.lastname.value    
    form.lastname.value = ""
    const age = form.age.value
    form.age.value = ""
    const gender = form.gender.value
    const hikeInputs = form.hikes.value
    const box = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            box.push(form.diet[i].value)
        }
    console.log(box)
    }
    alert(`First Name: ${firstName} 
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}
Location: ${hikeInputs}
Diet: ${box}`)
    // console.log(`${firstName} ${lastName} ${age} ${gender} ${hikeInputs} ${box}`)

})
