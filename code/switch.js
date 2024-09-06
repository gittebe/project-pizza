alert(`Please click 'ok' to start your order.`)

let name = prompt(`Please enter you name:`)

let firstOrder = prompt(`Hi ${name}, welcome to the Pizzeria. Let's start with your order! What would you like to eat? 
    1 - Pizza
    2 - Pasta
    3 - Salad
    Please enter the number!`)

switch (firstOrder()) {
    case '1':
        alert(`You have selected Pizza.`)
        break;
    case '2':
        alert('You have selected Pasta')
        break;
    case '3':
        alert(`You have selected Salad`)
        break;
    default:
        alert(`Sorry, we don't have that`)
}