import { ADD_TO_CART, REMOVE_CART } from './types';

const addToCart = target => {
  return {
    type: ADD_TO_CART,
    payload: target
  };
};

const removeCart = target => {
  return {
    type: REMOVE_CART,
    payload: target
  };
};

export {
    addToCart,
    removeCart
};