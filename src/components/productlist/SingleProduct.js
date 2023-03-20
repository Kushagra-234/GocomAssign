import React from "react";
import { Link } from "react-router-dom";
// import "./productlist.css";
import "./singleproduct.css";
import { CartState } from "../context/Context";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SingleProduct = ({ item, key }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(state);

  const handleSingle = (item) => {
    // console.log(item.id);
    dispatch({
      type: "SINGLEPRODUCT",
      payload: item.id,
    });
  };

  // console.log(cart);

  // const handleWish=(item)=>{

  //   // console.log(item.id);

  //    dispatch({
  //      type: "WISHPROD",
  //      payload: item.id,
  //    });

  // }

  return (
    <div
      key={item.id}
      className="list_cardcontent"
      onClick={() => handleSingle(item)}
    >
      <div className="list_img">
        <Link to="/details">
          <img className="img" src={item.img} />
        </Link>
      </div>
      <div className="list_cardname">{item.brand}</div>

      <div className="list_carddes">{item.pname}</div>

      <div className="list_pricing">${item.price}</div>
      <div className="  ">
        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVETOCART",
                payload: item,
              });
            }}
            className="list_btn"
          >
            Remove From Wishlist
          </button>
        ) : (
          <button
            className="list_btn"
            onClick={() => {
              dispatch({
                type: "ADDTOCART",
                payload: item,
              });
            }}
          >
            Add to Wishlist
            
            
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
