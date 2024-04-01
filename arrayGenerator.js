// Add the readline requirement
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a function that adds values to an array
// The values should be in chronological order
function formArray(num1, num2){
    let array = []
    if(num1 < num2){
        // Loop for when the first value is smaller than the second
        for(let i = num1; i <= num2; i++){
        array.push(i)
      }
    }
    if(num1 > num2){
        // Loop for when the second value is smaller than the first
      for(let i = num1; i >= num2; i--){
      array.unshift(i)
      }
    }
    // Return the values inside the array
    return array
}

// Add the readline question that prompts the user to input data
rl.question("Input your first value:", (num1) =>{
    rl.question("Input your second value:" + " ", (num2) =>{
        // Convert values into integers
        num1 = parseInt(num1)
        num2 = parseInt(num2)

        // Call the function and assign a variable to it
        let results = formArray(num1, num2)

        // Condition it to only accept numbers as input
        if(!isNaN(num1) && !isNaN(num2)){
            console.log(results)
        } else{
            console.log("Invalid input, please type in numbers between 0-9")
        }
        rl.close()
    })
})