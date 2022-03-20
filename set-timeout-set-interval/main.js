// setTimeout:
// setTimeout(function() {
//    console.log("HI")
// },1000) 

// setInterval:
// setInterval(() => {
//     console.log("HI")
    
// }, 1000);

//intervalID:
// let intervalID = setInterval(function() {
//     console.log("hello!")
// }, 3000);

//The off switch for the interval:
// clearInterval(intervalID)

//function that outputs a text:
// function sayHello(){
//     console.log("HEY!")
// }
// let sayHi = setInterval(sayHello, 1000)

//!POINTERS!: The parenthesis calls to be used emediately, so if a function is used 
//--> within another function do not use parenthesis so it executes the original 
//--> function ex: let sayHi = -->setInterval<--outer-->(-within->sayHello<--no parenthesis-->, 1000)

//Now lets use setInterval and setTimeout together to have a 
//-->function run every second for 5 seconds, and then have it cleared.

// function sayHello(){
//     console.log("Hello")
// }

// function stopSayingHello(){
//     clearInterval(intervalID)
// }

// const intervalID = setInterval(sayHello, 1000)

// setTimeout(stopSayingHello, 5000)
var display = document.getElementById('time-display');
    
        function getTime(){
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            
            display.textContent = `${hour}:${min}:${sec}`
        }

        setInterval(getTime, 1000)