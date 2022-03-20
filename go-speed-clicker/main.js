let count = localStorage.getItem("clicks")
const button = document.getElementById("button")
button.addEventListener("click", function(event){
    event.preventDefault()
    count++
    localStorage.setItem("clicks", count)
    const paragraph = document.getElementById("show")
    paragraph.innerText = count
    paragraph.style.textAlign = "center"
    paragraph.style.color = "maroon"
    paragraph.style.fontSize = "100px"
})
//Ask TA for help**

