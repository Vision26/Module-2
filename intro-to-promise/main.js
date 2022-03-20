//resolve - .then()

//reject - .catch()


//when a function returns a promise it becomes a thenable;
//thenable - youre using a promise and the .then is going to handle whatever the promise was aiming to do

function flipCoin(){
     return new Promise((resolve, reject) => { //returns a pending promise
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve("heads")
        } else if(randomNum === 1){
            reject("tails")
        }
     })
}


// flipCoin()
    // .then(response => console.log(`RESOLVED: ${response}`))
    // .catch(error => console.log(`REJECTED: ${error}`))


    //OTHER METHODS:

    // Promise.resolve("Something").then(response => console.log(response))
    // Promise.reject()

    function getData(){
        return new Promise((resolve) => {
            setTimeout(() => resolve("BADEN!!!!"),4000)
        })
    }
    getData()
        .then(res => console.log(res))
        .catch(err => console.log(err))