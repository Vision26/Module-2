//review:
// Constructor Functions
// blueprint for generate js objects with the same shape

// Constructor is "what it is to be car"
// function Car(make, model){
//     this.make = make
//     this.model = model
// }

// What do cars "Do"
// Car.prototype.honk = function(){
//     console.log("Honk")
// }

// // instantiate
// const jeep = new Car("jeep", "cherokee")
// const mazda = new Car("mazda", "3")

// mazda.honk()

// ES6 Classes: this class constructor is EXACTLY the same thing as ^^^^ top constructor in line 5
// class Car {
//     constructor(make, model){
//         this.make = make
//         this.model = model
//     }
    
//     honk(){
//         console.log("hooonk")
//     }
// }

// const jeep = new Car("jeep", "cherokee")
// jeep.honk()

//Vehicle Example:

class Vehicle {
    constructor(make, model, honkSound){
        this.make = make
        this.model = model
        this.honkSound = honkSound
    }
    
    honk(){
        console.log(this.honkSound)
    }
    
    drive(){
        console.log("Vrooom")
    }
}




const jeep = new Vehicle("jeep", "cherokee")
// jeep.drive()

// Don't repeat yourself . DRY

class Motorcycle extends Vehicle {
    constructor(make, model, honkSound, hasSideCar){
        super(make, model, honkSound)
        this.hasSideCar = hasSideCar
    
    }
}


const harley = new Motorcycle("Harley", "davidson", "Wahhh!", true)

harley.honk()