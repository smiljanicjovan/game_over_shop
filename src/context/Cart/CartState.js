import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  CLOSE_DROPDOWN,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = item => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = id => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  console.log(removeItem);
  const closeDropdown = () => {
    dispatch({ type: CLOSE_DROPDOWN });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        closeDropdown,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
