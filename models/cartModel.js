
let cartItems = [];

export const addToCart = (item) => {
  cartItems.push(item);
};

export const getCartItems = () => {
  return cartItems;
};

export const removeCartItem = (itemId) => {
  cartItems = cartItems.filter((item) => item.id !== itemId);
};

export const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
