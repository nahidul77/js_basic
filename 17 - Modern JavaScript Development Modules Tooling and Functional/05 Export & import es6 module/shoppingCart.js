// Exporting Modules

/**
 * All the top level variable scope only respective modules.
 * In ES6 Module , there is two types of exports, named Exports and Default Exports.
 * Import are not copies of export, they are instead like a live connection
 */

console.log('Exporting Modules');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  }

const totalPrice = 237;
const totalQuantity = 30;

export { totalPrice, totalQuantity as qty };

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
