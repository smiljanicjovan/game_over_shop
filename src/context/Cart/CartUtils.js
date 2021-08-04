export const addItemToCart = (cartItems, addToCart) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.gameID === addToCart.gameID
  );

  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.gameID === addToCart.gameID
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addToCart, quantity: 1 }];
};

export const decreaseItemCart = (cartItem, decrementItems) => {
  const existingCartItem = cartItem.find(
    cartItem => cartItem.gameID === decrementItems.gameID
  );
  if (existingCartItem.quantity === 1) {
    return cartItem.filter(
      cartItem => cartItem.gameID !== decrementItems.gameID
    );
  }

  return cartItem.map(cartItem =>
    cartItem.gameID === decrementItems.gameID
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
