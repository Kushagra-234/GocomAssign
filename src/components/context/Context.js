// used for passing of props or children directly to any component solving problem of prop drilling

import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../Data/Data";
import CartReducer from "./Reducer";

// phase 1
// creation
const getLocaldata = () => {
  let newdata = localStorage.getItem("bag");
  if (newdata === []) {
    return [];
  } else {
    return JSON.parse(newdata);
  }
};


const initialData = {
  products: data,

  gender: "men",
  brand: "H&M",
  sort: "HTL",
  search: "enter",
  singleitem: {},
  cart: [],
  // bag:getLocaldata(),
  
};

const Cart = createContext(initialData);

// const getLocalData = () => {
//   let newCartData = localStorage.getItem("bag");

//   if (newCartData === []) {
//     return [];
//   }

//   else{
//     return JSON.parse(newCartData);
//   }
// };

// this cart now contains all data

// provider function to wrap our app(children)

const Context = ({ children }) => {


  

  const [state, dispatch] = useReducer(CartReducer, {
    products: data,
    cart: [],
    bag:getLocaldata(),
    gender: [],
    brand: [],
    price: "",
    sort: "",
    search: [],
    singleitem: "",
  });

  useEffect(()=>{
    localStorage.setItem("bag",JSON.stringify(state.bag));
  },[state.bag]);

  // useEffect(() => {
  //   localStorage.setItem("bag", JSON.stringify(state.bag));
  // }, [state.bag]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

// now consumption

export const CartState = () => {
  return useContext(Cart);
};
