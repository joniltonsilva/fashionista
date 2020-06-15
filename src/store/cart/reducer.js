const addToCart = (state, payload) => {
  const index = state.cart.findIndex(prod => prod.sku === payload.sku);
  let cart = [];
  
  if (index >= 0) {
    cart = [...state.cart];
    cart[index].quantity += 1;
  } else {
    cart = [...state.cart, payload];
  }  
  window.localStorage.setItem('cart', JSON.stringify(cart));
  return { ...state, cart };  
};


const removeCart = (state, payload) => {
  const { sku, quantity } = payload;
  const prod = state.cart.find(p => p.sku === sku);
  let cart = [];
  
  if (prod && (prod.quantity === quantity || !quantity)) {
    cart = state.cart.filter(p => p.sku !== sku);
  } else {
    cart = [...state.cart];
    const index = cart.findIndex(prod => prod.sku === sku);
    cart[index].quantity -= 1;
  }
  
  window.localStorage.setItem('cart', JSON.stringify(cart));
  return { ...state, cart };
};

export { addToCart, removeCart };
