//# Error Handling:

// ## Keywords
// * try purpose is to find errors in code
// * catch purpose is to catch try error, and try stops executing
// * finally purpose is to execute once he try and catch have been used
// * throw puprose bounces the error into catch
// * Error : err common way to call the variable

// try {
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

// var input = "";

// try {
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

xvar = 4
try {
  
  throw xvar = 4
  
} catch (err) {
  console.log(err);
  //handle error
} finally {
  console.log(xvar)
}

