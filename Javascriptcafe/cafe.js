// -- JAVASCRIPT CAFE! -- //
let products = {

    whiteCoffee: {
        stock:4,
        price:4
    },

    blackCoffee: {
        stock:7,
        price:3.50
    },

    muffin: {
        stock:5,
        price:8.50
    },

    eggs: {
        stock:1,
        price:12.50
    }

}
function displayProducts() {

    document.getElementById("whiteCoffee").innerHTML = "White Coffee: " + products.whiteCoffee.stock
    document.getElementById("blackCoffee").innerHTML = "Black Coffee: " + products.blackCoffee.stock
    document.getElementById("muffin").innerHTML = "Muffin: " + products.muffin.stock
    document.getElementById("eggs").innerHTML = "Eggs: " + products.eggs.stock

}

displayProducts()

// ---- Customers----//
let customer = {
    order: []
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {

    //random size order in range between 1 to 5 items
    //make a new array of the things they order
    //assign the new order to the customer object
    //display custom er order

    let orderSize = getRandomInt(minOrderSize, maxOrderSize)

    let newOrder = []

    let productNames = Object.keys(products)

    // fpr (starting iterator value; condition for iterator to loop until; what happens after each iteration) {}
        for (let i = 0; i <= orderSize; i++) {

            let productIndex = getRandomInt(0, productNames.length - 1)
            let productName = productNames[productIndex] //productName is the specific product selected, productNames is the array of all the products
            newOrder.push(productName)
    }

    customer.order = newOrder
    displayCustomerOrder()
}

function displayCustomerOrder() {

    document.getElementById("customerOrder").innerHTML = "Customer Order: " + customer.order
}

document.getElementById("customerButton").onclick = generateCustomerOrder


//----Transactions---//
 
let cash = 0

function displayCash () {
    document.getElementById("cash").innerHTML = "Cash: " + cash
}
displayCash()

function fillOrder () {
    //make a variable to keep track of our sale total
    // loop through customer order array
    //if we have the product in stock, sell it to them and keep track of sale
    //if we are out of stock of the product reject sale

    let saleTotal = 0
    for (let i = 0; i < customer.order.length; i++) {
     
        let productName = customer.order[i]

        if (products[productName].stock > 0) {

            products[productName].stock --
            saleTotal += products[productName].price
        }
        else {
            alert("I'm sorry, we're out of " + productName)

        }
    }
    cash += saleTotal
    customer.order = []
    displayCash()
    displayProducts()
    displayCustomerOrder()
}
document.getElementById("fillOrder").onclick = fillOrder


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}