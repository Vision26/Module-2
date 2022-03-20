//1a) Write a function that returns the sum of two numbers.
// --> Throw an error if either argument is not of the data type number:

// function sum(x, y) {
//   if (typeof x != "number" || typeof y != "number") {
//     throw new Error("arguments must be a numbers")
//   }
//   // if(typeof y != "number"){
//   //     throw new Error("second argument must be a number")
//   // }
//   return console.log(x + y) // if everything is good, return x + y
// }
// try {
//   sum(1, 5)
// } catch (err) {
//   console.log(err)
// } 


//2a) Given a user object, write a function called login that takes-->
// -->a username and password as parameters. Throw an error if either of 
// -->them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};

function login(username, password){
  if(username !== "sam" || password !== "123abc"){
  throw new Error("username and password dont match. try again...")
}
return console.log(`${user.username} ${user.password}`)
}


try{
  login("jose", "123abc")
} catch(err){
  console.log(err)
} finally {
  console.log('Login Successful!')
}




// function sum(x, y) {
//   try {
//     if (typeof x === "string") {
//       throw x
//       return x + y
      
//     } catch(err){
//       console.log(err)
//     } finally {

//     }
//   }

// sum(1, 2)


//check data ttryypes first and throw error

  /// try {
//     if(2 === 2){
//         throw new Error("error!")
//     }
//     // console.log("console?") //this proves that the "try" stop executing when "catch" caught the error
// }

// catch(err){
//     console.log(err)
// }

// finally{
//     console.log("Run Forest! RUN!")
// }