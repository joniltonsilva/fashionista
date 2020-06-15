import { OPEN_SIDEBAR } from './sidebar/types';
import { sidebarReducer } from './sidebar/reducer';

import { ADD_TO_CART, REMOVE_CART } from './cart/types';
import { addToCart, removeCart } from './cart/reducer';

const INITIAL_STATE = {
  catalog: [],
  cart: JSON.parse(window.localStorage.getItem('cart')) || []
};

const appReducer =  (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {  
    case OPEN_SIDEBAR:
      return sidebarReducer(state, payload);  
    case ADD_TO_CART:
        return addToCart(state, payload); 
    case REMOVE_CART:
          return removeCart(state, payload);   
    default:
      return state;
  }
};

export default appReducer;