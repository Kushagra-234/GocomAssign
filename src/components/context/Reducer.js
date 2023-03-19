const CartReducer = (state, action) => {
  switch (action.type) {
    case "lth":
      return {
        ...state,
        sort: action.payload,
      };

    case "htl":
      return {
        ...state,
        sort: action.payload,
      };

    case "BRAND":
      return {
        ...state,
        brand: action.payload.check
          ? [...state.brand, action.payload.option]
          : state.brand.length > 0
          ? state.brand.filter(
              (brandValue) => brandValue !== action.payload.option
            )
          : [],
      };

    case "GENDER":
      return {
        ...state,
        gender: action.payload.check
          ? [...state.gender, action.payload.option]
          : state.gender.length > 0
          ? state.gender.filter(
              (genderValue) => genderValue !== action.payload.option
            )
          : [],
      };

    case "low":
      return {
        ...state,
        price: action.payload,
      };

    case "moderate":
      return {
        ...state,
        price: action.payload,
      };

    case "high":
      return {
        ...state,
        price: action.payload,
      };

    // case "SEARCH":

    //   // console.log(value);
    //   return {
    //     ...state,
    //     search:action.payload
    //   }

    case "SINGLEPRODUCT":
      return {
        ...state,
        singleitem: action.payload,
      };

    // case "WISHPROD":
    //   return {
    //     ...state,
    //     wishitem: action.payload,
    //   };

    case "ADDTOCART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVETOCART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "ADDTOBAG":
      return {
        ...state,
        bag: [...state.bag, { ...action.payload, qty: 1 }],
      };

    case "REMOVEFROMBAG":
      return {
        ...state,
        bag: state.bag.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default CartReducer;
