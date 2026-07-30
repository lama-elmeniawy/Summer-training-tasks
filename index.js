import { addToCart } from './modules/addToCart.js';
import { removeFromCart } from './modules/removeFromCart.js';
import { listCart } from './modules/listCart.js';
import { calculateTotal } from './modules/calculateTotal.js';

addToCart(1);
addToCart(2);
addToCart(3);
removeFromCart(2);

listCart();
console.log('Total Price:', calculateTotal());