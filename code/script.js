

// Welcome 
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Ask for the name
const name = prompt(`Please enter your name:`)

//Introduction
alert(
  `Hallo, ${name.toUpperCase()} Are you ready to order? - Click 'OK'.`
)

// Submit food choice

const foodChoice = prompt(`What would you like to order? Please enter the number: 
  1 - Pizza
  2 - Pasta
  3 - Salad`)

//The first order

if (foodChoice == 1) {
  alert(`You like to order Pizza. Great choice`)
}
else if (foodChoice == 2) {
  alert(`Pasta, good choice`)
}
else if (foodChoice == 3) {
  alert(`A salad for you today`)
}




// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
