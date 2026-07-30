import { cart } from '../data/cart.js';

export function removeFromCart(id) {
  const index = cart.findIndex(p => p.id === id);
  if (index !== -1) cart.splice(index, 1);
}