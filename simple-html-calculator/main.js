const addForm = document["add"]
addForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumber = addForm.firstnumber.value
    const secondNumber = addForm.secondnumber.value
    addForm.firstnumber.value = ""
    addForm.secondnumber.value = ""
    function addNumbers(){
        return Number(firstNumber) + Number(secondNumber)
    }
    const h1 = document.createElement("h1")
    h1.textContent = `${addNumbers(firstNumber, secondNumber)}`
    document.getElementById("first-section").append(h1)
})

const subtractForm = document["subtract"]
subtractForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumber = subtractForm.firstnumber.value
    const secondNumber = subtractForm.secondnumber.value
    subtractForm.firstnumber.value = ""
    subtractForm.secondnumber.value = ""
    function subtractNumbers(){
        return Number(firstNumber) - Number(secondNumber)
    }
    const h2 = document.createElement("h2")
    h2.textContent = `${subtractNumbers(firstNumber, secondNumber)}`
    document.getElementById("second-section").append(h2)
})

const multiplyForm = document["multiply"]
multiplyForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumber = multiplyForm.firstnumber.value
    const secondNumber = multiplyForm.secondnumber.value
    multiplyForm.firstnumber.value = ""
    multiplyForm.secondnumber.value = ""
    function multiplyNumbers(){
        return Number(firstNumber) * Number(secondNumber)
    }
    const h3 = document.createElement("h3")
    h3.textContent = `${multiplyNumbers(firstNumber, secondNumber)}`
    document.getElementById("third-section").append(h3)
})