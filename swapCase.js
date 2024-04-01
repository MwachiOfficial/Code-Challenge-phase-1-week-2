// Add the readline requirement
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a function that swaps the case of a specific
function swapCase(text){
    //Set a variable for the string that the user will input
    let input = ""
    // Create a for loop to loop through every character of the said string
    for(let i = 0; i < text.length; i++)
      // Use an if else statement to check the case of each character then swap them for their opposite
      if(text[i] === text[i].toUpperCase()){
        input += text[i].toLowerCase()
      } else {
        input += text[i].toUpperCase()
      }
    return input
}
// Add the readline question that prompts the user to input data
rl.question("Input the text to be case swapped" + ":" + " ", (text) =>{
    // Call the function and assign a variable to it
    let toggleCase = swapCase(text)
    // Condition it so as to not accept numbers as input
   if(isNaN(text)){
    console.log(`${toggleCase}`)
  } else{
    console.log("Invalid Input, please type in characters between a-z, A-Z")
  }
  rl.close()
})

