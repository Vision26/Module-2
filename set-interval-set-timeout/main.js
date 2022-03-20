//# JS Timing Functions
    
// # setInterval
// Purpose: Call a function on a repeated basis. (ex: every 1 second)

// # setTimeout
// Purpose: Call a function after a certain amount of time.

// * When used, both setInterval and setTimeout return and ID.  That ID can be given to clearInterval or clearTimeout to stop the timers.

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0
let intervalID
timer.textContent = count

function incrementTimer(){
    count++
    timer.textContent = count
}

startBtn.addEventListener("click", function(){
    intervalID = setInterval(incrementTimer, 1000)
})

stopBtn.addEventListener("click", function(){
    clearInterval(intervalID)
})