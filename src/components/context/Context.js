// used for passing of props or children directly to any component solving problem of prop drilling

import { createContext, useContext, useReducer } from "react";
import { data } from "../Data/Data";
import CartReducer from "./Reducer";

// phase 1
// creation

const initialData = {
  products: data,

  gender: "men",
  brand: "H&M",
  sort: "HTL",
  search: "enter",
  singleitem: {},
  cart: [],
  bag: [],
};

const Cart = createContext(initialData);

// this cart now contains all data

// provider function to wrap our app(children)

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    products: data,
    cart: [],
    bag: [],
    gender: [],
    brand: [],
    price: "",
    sort: "",
    search: [],
    singleitem: "",
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

// now consumption

export const CartState = () => {
  return useContext(Cart);
};
