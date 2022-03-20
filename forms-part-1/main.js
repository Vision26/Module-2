//<form>, <input>, <button>, addEventListener, Grabbing Values
//Important Attributes: name="", value="", placeholder="", required=""
const form = document["the-form"]

form.addEventListener("submit", function(event){
    event.preventDefault()

    const firstNinja = form.naruto.value
    const secondNinja = form.characters.value
    form.naruto.value = ""
    form.characters.value = ""
    
    //Showing the input on the on the DOM
    const h1 = document.createElement("h1")
    h1.textContent = `${firstNinja} ${secondNinja}`
    h1.style.color = "maroon"
    document.getElementsByTagName("body")[0].append(h1)

    const grabNumber = form.numberbox.value
    form.numberbox.value = ""
    const h2 = document.createElement("h2")
    h2.textContent = `${grabNumber}`
    document.getElementsByTagName("body")[0].append(h2)

    const dateInput = form.recorddate.value
    form.recorddate.value = ""
    const h3 = document.createElement("h3")
    h3.textContent = `${dateInput}`
    document.getElementsByTagName("body")[0].append(h3)

    const colorInput = form.colors.value
    const box = document.createElement("div")
    box.style.padding = "50px"
    box.style.backgroundColor = colorInput
    document.getElementsByTagName("body")[0].append(box)
//radio
    const radio = form.favorite.value
    const h4 = document.createElement("h4")
    h4.textContent = `${radio}`
    document.getElementsByTagName("body")[0].append(h4)
    console.log(radio)

//checkboxes, code to make sure the boxes are checked through console.log using a forLoop
    let boxAnimals = []
    let checkedBoxes = document.querySelectorAll("input[name=likes]:checked")
    for(var i = 0; i < checkedBoxes.length; i++){
            boxAnimals.push(checkedBoxes[i].value)
        
    }
    console.log(boxAnimals)

    

    // document.getElementById("guitar").value
    // document.getElementById("guitar").value = ""

    // const h3 = document.createElement("h3")
    // h3.textContent = document.getElementById("guitar").value
    // document.getElementsByTagName("body")[0].append(h3) ????


    // const firstNumber = form.firstnumber.value
    // const secondNumber = form.secondnumber.value
    // form.firstnumber.value = ""
    // form.secondnumber.value = ""

    // const h1 = document.createElement("h1")
    // h1.textContent = `${firstNumber} ${secondNumber}`
    // document.getElementsByTagName("body")[0].append(h1)

    // const firstWord = form.snow.value
    // const secondWord = form.fall.value
    // form.snow.value = ""
    // form.fall.value = ""
    // const h1 = document.createElement("h1")
    // h1.textContent = `${firstWord} ${secondWord}`
    // document.getElementsByTagName("body")[0].append(h1)

    // const firstWord = form.rock.value
    // const secondWord = form.smash.value
    // form.rock.value = ""
    // form.smash.value = ""
    // const h1 = document.createElement("h1")
    // h1.textContent = `${firstWord} ${secondWord}`
    // document.getElementsByTagName("body")[0].append(h1)

    // const firstNameInput = form.firstname.value
    // form.firstname.value = ""
    // const lastNameInput = form.lastname.value
    // form.lastname.value = ""
    // const h1 = document.createElement("h1")
    // h1.textContent = `${firstNameInput} ${lastNameInput}`
    // document.getElementsByTagName("body")[0].append(h1)
    // console.log(`${firstNameInput} ${lastNameInput}`)

    // const dogInput = form.dognames.value
    // console.log(dogInput)
    // form.dognames.value = ""

    // const foodInput = form.foods.value
    // console.log(foodInput)
    // form.foods.value = ""

    // const hikesInput = form.hikes.value
    // console.log(hikesInput)
    // form.hikes.value = ""

    // const colorInput = form.colors.value
    // console.log(colorInput)
    // form.colors.value = ""



})
