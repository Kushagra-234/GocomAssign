import React from "react";
import "./productdetails.css";
import { CartState } from "../context/Context";
// import ReactImageMagnify from "react-image-magnify";

const ProductDetails = () => {
  const {
    state: { products, singleitem,bag },dispatch
  } = CartState();

  // console.log(rpod);
  // console.log(singleitem);
  console.log(bag);

  return (
    <>
      {products
        .filter((product) => product.id == singleitem)
        .map((product) => {
         
          
          return (
            <div className="product_details">
              <div className="product_imgcont">
                <img
                  src={product.image[0].src}
                  className="productdetails_img1"
                />
                <img
                  src={product.image[1].src}
                  className="productdetails_img1"
                />
                <img
                  src={product.image[2].src}
                  className="productdetails_img1"
                />
                <img
                  src={product.image[3].src}
                  className="productdetails_img1"
                />
              </div>
              <div className="product_textcont">
                <div className="productdesc_cont">
                  <div className="product_text_heading">{product.brand}</div>
                  <div className="product_text_desc">{product.pname}</div>
                </div>
                <div className="product_pricesize">
                  <div className="productdetails_price">${product.price}</div>
                  <div className="productdetails_button">
                    <button className="details_btn">39</button>
                    <button className="details_btn">40</button>
                    <button className="details_btn">42</button>
                    <button className="details_btn">44</button>
                  </div>
                  <div className="product_cartbutton">
                    <button
                      className="cart_btn"
                      onClick={() => {
                        alert("product added to bag")
                        dispatch({
                          type: "ADDTOBAG",
                          payload: product,
                        });
                      }}
                    >
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductDetails;
