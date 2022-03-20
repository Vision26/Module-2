//player class
//write contstructor
//use default parameters if so included
//write methods
//gotHit()
//if else block determine new status
//gotPowerUp

class Player {
    constructor(name, totalCoins = 0, status = "small", hasStar = false, gameActive = true) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked) {
        this.name = namePicked
        // if (namePicked === "m") {
        //     this.name = 'mario'
        // } else if (namePicked === 'l') {
        //     this.name = "luigi"
        // } else {
        //     console.log("You have two choice's, pick a player and proceed...")
        // }
    }

    gotHit() {
        if (this.status === "small") {
            this.status = "dead"
            this.gameActive = false
        } else if (this.status === "big") {
            this.status = "small"
        } else if (this.status === "powerUp") {
            this.status = "big"
            // console.log("no hit!")

        }
    }
    // gotHit(){
    //     if (this.status === "small"){
    //         this.status = "Dead"
    //         this.gameActive = false;
    //     } else if (this.status === "Big"){
    //         this.status = "small"
    //     } else if (this.status === "Powered up"){
    //         this.status = "Big"
    //     }
    // }

    gotPowerup() {
        if (this.status === "small") {
            this.status = "big"
        } else if (this.status === "big") {
            this.status = "powerUp"
            // this.hasStar = true
            // console.log("got star")
        }
    }
    // gotPowerUp(){
    //     if (this.status === "small"){
    //         this.status = "Big"
    //     } else if (this.status === "Big"){
    //         this.status = "Powered up"
    //     }
    // }

    gotCoin() {
        this.totalCoins += 1
        console.log("you got a coin!")
    }

    print() {
        console.log(`Name: ${this.name}, Total Coins: ${this.totalCoins}, Status: ${this.status}`)
    }
}
const player = new Player("mario")


//setinterval :
//Create a random range function that returns either 0, 1, or 2.

// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// then call the print method on the object
//getHit, powerUp, receivecoin

//check if our player is dead if they are clearInterval

const gameLoop = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 3) ///write as function return rand number
    // console.log(gameLoop)
    if (player.gameActive != false) {
        if (randomNum === 0) {
            player.gotHit()
        } else if (randomNum === 1) {
            player.gotPowerup()
        } else if (randomNum === 2) {
            player.gotCoin()
        }
        player.print()
    } else {
       console.log('gameover...')
       clearInterval(gameLoop)
    }
}, 1000)