import { display } from "@mui/system";
import React from "react";

import { CartState } from "../context/Context";
import "./wishlist.css";
// import SingleProduct from '../productlist/SingleProduct'

const Wishlist = () => {
  const {
    state: { products, cart },dispatch
  } = CartState();
  console.log(cart);
  return (
    <div className="product_wishlist">
      <div className="product_headingcont">Wishlist</div>

      <div className="product_wishcards">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div className="list_cardcontent">
                <div className="list_img">
                  <img className="img" src={item.img} />
                </div>
                <div className="list_cardname">{item.brand}</div>

                <div className="list_carddes">{item.pname}</div>

                <div className="list_pricing">${item.price}</div>
                <button
                  className="list_button"
                  onClick={() => {
                    
                    dispatch({
                      type: "ADDTOBAG",
                      payload:item,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </>
        ) : (
          <h2
            style={{
              marginLeft: "30px",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
            }}
          >
            Wishlist empty
          </h2>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

// questions.map((q) => {
//   if (q === "a") {
//     console.log(q);
//   }
// });
