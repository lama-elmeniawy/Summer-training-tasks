import { products } from '../data/products.js';
import { cart } from '../data/cart.js';

export function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) cart.push(product);
}