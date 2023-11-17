
import express from 'express';
import { addToCart, getCartItems, removeCartItem, calculateTotalPrice } from '../models/cartModel.js';

const router = express.Router();

router.post('/add-to-cart', (req, res) => {
  const { id, quantity } = req.body;
  const item = { id, quantity, ...getProductDetails(id) };
  addToCart(item);
  res.json({ message: 'Item added to the cart successfully' });
});

router.get('/view-cart', (req, res) => {
  const cartItems = getCartItems();
  res.json(cartItems);
});

router.delete('/remove/:id', (req, res) => {
  const itemId = req.params.id;
  removeCartItem(itemId);
  res.json({ message: 'Item removed from the cart successfully' });
});

router.get('/calculate-total', (req, res) => {
  const totalPrice = calculateTotalPrice();
  res.json({ totalPrice });
});


export default router;
