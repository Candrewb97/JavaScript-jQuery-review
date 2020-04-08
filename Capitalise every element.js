/*Exercise - Capitalise every element
1. Write a short function to capitalise every element of the array.
2. You must use the Array#map function and the String#uppercase function.
*/

var pizza = ["cheese", "pepperoni", "sausage", "peppers", "mushrooms"]
console.log('A delicious pizza with',pizza.join());

var pizza = pizza.map(function(x){return x.toUpperCase()});

console.log(pizza)