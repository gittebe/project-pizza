

// Welcome 
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Ask for the name
const name = prompt(`Please enter your name:`)

//Introduction
alert(
  `Hallo, ${name} Are you ready to order? - Click 'OK'.`
)

// Submit food choice

let firstOrder = prompt(`What would you like to order? Please enter the number: 
  1 - Pizza
  2 - Pasta
  3 - Salad`)

//The first order

if (firstOrder === `1`) {
  firstOrder = `Pizza`
}
else if (firstOrder === `2`) {
  firstOrder = `Pasta`
}
else if (firstOrder === `3`) {
  firstOrder = `Salad`
}
else {
  firstOrder = `try again`
}

alert(
  `Great choice! You selected ${firstOrder}`
)

// The second order

//Pizza Type

if (firstOrder === `Pizza`) {
  secondOrder = prompt(`Which Pizza would you like to have today?
  1 - Pizza Margherita
  2 - Pizza Pepperoni
  3 - Pizza Hawaiian`)


  if (secondOrder === `1`) {
    secondOrder = `Pizza Margherita`
  }

  else if (secondOrder === `2`) {
    secondOrder = `Pizza Pepperoni`
  }

  else if (secondOrder === `3`) {
    secondOrder = `Pizza Hawaiian`
  }
}

// Pasta Type

else if (firstOrder === `Pasta`) {
  secondOrder = prompt(`What kind of Pasta would you like to eat today? Plase write the number:
    1 - Spaghetti
    2 - Carbonara
    3 - Lasagna`)

  if (secondOrder === `1`) {
    secondOrder = `Spaghetti`
  }
  else if (secondOrder === `2`) {
    secondOrder = `Carbonara`
  }
  else if (secondOrder === `3`) {
    secondOrder = `Lasagna`
  }
  // else {
  //   secondOrder = `no food`
  // }

}

// Salad Type

else if (firstOrder === `Salad`) {
  secondOrder = prompt(`What kind of Salad would you love to order today? Please write the number:
    1 - Greek Salad
    2 - Fish Salad
    3 - Chicken Salad`)

  if (secondOrder === `1`) {
    secondOrder = `Greek Salad`
  }
  else if (secondOrder === `2`) {
    secondOrder = `Fish Salad`
  }
  else if (secondOrder === `3`) {
    secondOrder = `Chicken Salad`
  }
  // else {
  //   secondOrder = `no food`
  // }
}

alert(
  `Your order is ${secondOrder}`
)

// Step 4 - Age
let age = prompt(`To get the right size of your dish one last question: How old are you, ${name}?`)


// Step 5 - Order confirmation
if (age > 15) {
  alert(`Thank you! You like to order ${secondOrder} normal size.`)
}

else if (age < 15) {
  alert(`Thank you. You like to order ${secondOrder} for kids`)
}

// else {

// }

