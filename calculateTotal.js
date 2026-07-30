import { cart } from '../data/cart.js';

export function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}