// create a function that will deliver a pizza object, and the two different pizzas requested
function pizzaOven( crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese =    cheese;
    pizza.toppings =  toppings;
    return pizza; 
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed","marinara", ["mozzarella", "feta"], ["mushrooms", " olives", "onions"]);
console.log(pizza2)


// create a function that will deliver a random pizza
var pizza = {
    crustType:  ["deep dish", "hand tossed", "thin", "flatbreat", "sicilian", "neopolitan",  "new york" ],
    sauceType:  ["traditional", "marinara", "spicy red sauce", "peppery red sauce", "pesto Sauce", "pesto sauce"],
    cheese:     ["mozzarella", "feta", "provolone", "smoked guda", "blue cheese"],
    toppings:   ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pineapple", "chicken", "canadian bacon", "bacon"]
};

function randomPizza(){
    var rollTheDice =   pizza.crustType[Math.floor(Math.random() * pizza.crustType.length)] +" with "+ 
                        pizza.sauceType[Math.floor(Math.random() * pizza.sauceType.length)] + ", "+ 
                        pizza.cheese[Math.floor(Math.random() * pizza.cheese.length)] + " and " + 
                        pizza.toppings[Math.floor(Math.random() * pizza.toppings.length)];
    return rollTheDice;
}
var chefsChoice = randomPizza();
console.log( "Your pizza will be a " + chefsChoice);
