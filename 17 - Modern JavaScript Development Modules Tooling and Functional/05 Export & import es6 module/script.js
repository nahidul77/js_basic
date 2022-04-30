// Importing Modules

// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';


console.log('Importing Modules');

// addToCart('bread', 5);

// console.log(price);
// console.log(qty);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);

// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.qty);

// import add, { addToCart, totalPrice as price, qty } from './shoppingCart.js'; // Default and named export together, not recommended

// add('pizza', 2);
// console.log(price);
// console.log(qty);

// import add from './shoppingCart.js'; // Dont need to use curly braces

// add('pizza', 2);

import add, { cart } from './shoppingCart.js'; // live connection 

add('pizza', 2);
add('burger', 4);
add('Pastry', 4);

console.log(cart);
