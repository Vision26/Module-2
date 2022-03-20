const formA = document["form-a"]
const formB = document["form-b"]
const formC = document["form-c"]
formA.addEventListener("submit", event => {
    event.preventDefault()
    const goombaA = {
        totalA: formA.goombaInput.value,
        cost: 5
    }
    function totalGoombaCost(){
        return Number(firstNumber) * Number(secondNumber)
    }
    let firstNumber = goombaA.totalA
    let secondNumber = goombaA.cost
    formA.goombaInput.value = ""
    const numberBox = document.getElementById("total")
    numberBox.textContent = `Total: ${goombaA.totalA}`
    const extraA = document.getElementById("extraA")
    extraA.textContent = `Total Goomba Cost: ${totalGoombaCost(firstNumber, secondNumber)}`
})

formB.addEventListener("submit", event => {
    event.preventDefault()
    const bombB = {
        totalB: formB.bombInput.value,
        costB: 7
    }
    function totalBombCost(){
        return Number(bombFirstNumber) * Number(bombSecondNumber)
    }
    let bombFirstNumber = bombB.totalB
    let bombSecondNumber = bombB.costB
    formB.bombInput.value = ""
    const numberBoxB = document.getElementById("total-B")
    numberBoxB.textContent = `Total: ${bombB.totalB}`
    const extraB = document.getElementById("extraB")
    extraB.textContent = `Total Bomb-omb Cost: ${totalBombCost(bombFirstNumber, bombSecondNumber)}`
    
})

formC.addEventListener("submit", event => {
    event.preventDefault()
    const cheepC = {
        totalC:  formC.cheepInput.value,
        costC:11
    }
    function totalCheepCost(){
        return Number(cheepFirstNumber) * Number(cheepSecondNumber)
    }
    let cheepFirstNumber = cheepC.totalC
    let cheepSecondNumber = cheepC.costC
    formC.cheepInput.value = ""
    const numberBoxC = document.getElementById("total-C")
    numberBoxC.textContent = `Total: ${cheepC.totalC}`
    const extraC = document.getElementById("extraC")
    extraC.textContent = `Total Cheep-cheep Cost: ${totalCheepCost(cheepFirstNumber, cheepSecondNumber)}`
})

const formD = document["form-D"]
formD.addEventListener("click", event => {
    event.preventDefault()
    const totalAll = formD.jobcompleted.value
    formD.jobcompleted.value = ""
    const showMe = document.getElementById("showMe")
    showMe.textContent = `Total Coin Cost: ${totalAll}`
    showMe.style.color = "Black"

})


