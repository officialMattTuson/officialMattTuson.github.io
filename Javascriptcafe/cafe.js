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


// this function below capitalizes each word in a string.  Call the function capitalize with a sentence parameter

function capitalize (sentence){ 
    mySplit = sentence.split(" ");
    
    for (let i = 0; i < mySplit.length; i++) {
        mySplit[i] = mySplit[i][0].toUpperCase() + mySplit[i].substr(1);
    }

console.log(mySplit.join(' '))
}
capitalize ("no way you are cooler than me")

// this function joins an array of strings into a single string

function concatMyArray (arrayOfStrings){
    return arrayOfStrings.join('');
    
  }
  concatMyArray (["hi"])
  concatMyArray (["zoom", "zoom", "!"])

  myArray = [
    {hiding: "Shaggy", doorNumber: 1 },
    {hiding: "Scooby", doorNumber: 2 },
    {hiding: "Daphne", doorNumber: 3 },
    {hiding: "Fred", doorNumber: 4},
    {hiding: "velma", doorNumber:5}
  ]  
function whereAreYou (arrayOfObjects, name){

  arrayFind = arrayOfObjects.find(hiding => hiding == name)
  console.log(arrayFind)
}
whereAreYou(myArray, "Scooby")

const sports = [
    {
      name: "Cricket",
      numberOfInternationalTeams: 10,
      numberOfPlayers: 11,
    }, 
    {
      name: "Football",
      numberOfInternationalTeams: 200,
      numberOfPlayers: 11,
    },
    {
      name: "Rugby",
      numberOfInternationalTeams: 15,
      numberOfPlayers: 15,
    }
    ];

    const totalFirstTeamPlayers = sports.map(sport => sport.numberOfInternationalTeams * sport.numberOfPlayers)
    console.log(totalFirstTeamPlayers)

    myArray = [
        {doorNumber: 1, hiding: "Daphne"}, 
        {doorNumber: 2, hiding: "Shaggy"}, 
        {doorNumber: 3, hiding: "Velma"},   
        {doorNumber: 4, hiding: "Fred"},  
        {doorNumber: 5, hiding: "Scooby"}
      ]

function whereAreYou(arrayOfObjects) {
const foundObject = myArray.findLast((person) => 
{return person.hiding === "Scooby"})
console.log(foundObject)
}
whereAreYou(myArray)



function deBee (string){
    let myString = string.split(" ")
    newString = myString.filter(word => word.toLowerCase() != "buzz")
    console.log(newString)
    console.log(newString.join(' '))
  }
  deBee("Help! I'm buzz buzz surrounded buzz by buzz buzz bees!!")

 