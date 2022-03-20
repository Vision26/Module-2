// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){

//     }
// }


// xhr.readyState
//Stages:
//1. request has been sent.
//2.
//3.
//4. the server has responded its time to handle your data.

// xhr.status
//status code:200 what you need to see for a success request
//!404!:web page not found!
//201: post request is successfull
//500: something went wrong in the server.

//xhr.responseText



//PART 2:

//  - Two methods are used to set up and send the HTTP request, these methods are:
//xhr.open()- sets up the request 
//xhr.send()- to send the request

// url: https://swapi.co/api/people/1


// const xhr = new XMLHttpRequest()
// //method            //URL              //asynchronous? true or false
// xhr.open("GET", "https://swapi.dev/api/people", true)
// xhr.send()

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         // console.log(data.results)
//         showData(data.results)
//     }
//     // else if(xhr.readyState === 4 && xhr.status !== 200){
//     //     console.log(xhr.responseText)
//     // }
// }

// function showData(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const h1 = document.createElement("h1")
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
//     }
// }
// xhr.readyState

// xhr.status

//PRACTICE!:
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://swapi.dev/api/starships", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        showData(data.results)
    }
}

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}