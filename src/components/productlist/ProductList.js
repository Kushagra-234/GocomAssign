import React, { useState } from "react";
import "./productlist.css";

import Header from "../header/Header";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Price from "../filter/Price";
import Brand from "../filter/Brand";
import Gender from "../filter/Gender";
import Sort from "../filter/Sort";

const ProductList = () => {
  const[search,setState]=useState();
  // console.log(search);

  const {
    state,
    state: { products},
  } = CartState();

 
 
  

// sort logic started
  const getSortedProducts = (products, sort) => {
    const sortedProducts = [...products].sort((item1, item2) =>
      sort === "lth"
        ? item1.price - item2.price
        : sort === "htl"
        ? item2.price - item1.price
        : products
    );
    return sortedProducts;
  };

  const sortedProducts = getSortedProducts(products, state.sort);

  // sort logic over

  // code to implement filtering by products Brand
  const getProductbyBrand = (products, brand) => {
    const sortedProducts = products.filter((product) =>
      brand.length > 0 ? brand.includes(product.brand) : product
    );
    return sortedProducts;
  };

  const ProductByBrand = getProductbyBrand(sortedProducts, state.brand);

  // logic for filter by brand over

  // get products by gender filter
  const getProductbyGender = (products, gender) => {
    const sortedProducts = products.filter((product) =>
      gender.length > 0 ? gender.includes(product.gender) : product
    );
    return sortedProducts;
  };

  const ProductByGender = getProductbyGender(ProductByBrand, state.gender);

  // logic for filter by gender over

  // logic for filtering by range

  const getProductsByRange = (products, price) => {
    const sortedProducts = products.filter((product) =>
      price === "low"
        ? product.price > 100 && product.price <= 500
        : price === "moderate"
        ? product.price > 500 && product.price <= 1000
        : price === "high"
        ? product.price > 1000 && product.price <= 1500
        : product
    );
    return sortedProducts;
  };

  const ProductByRange = getProductsByRange(ProductByGender, state.price);

  //  logic for range over

  // logic for search with brands
   const getProductBySearch=(products,search)=>{
   const FilteredProducts = products.filter((product) => {
     if (!search) {
       return product;
     } else if (product.brand.toLowerCase().includes(search)) {
       return product;
     }
   })
   return FilteredProducts;
  }

 const ProductBySearch= getProductBySearch(ProductByRange,search);

//  logic for search with brand over







  return (
    <div>
      <Header setfun={setState} />
      <div className="product_list">
        <div className="list_filter">
          <div className="list_content1">
            <span className="list_contentspan1">Filters</span>
            <span className="list_contentspan2">Clear Filters</span>
          </div>

          <div className="list_filtercontainer">
            <Gender />
            <Price />
            <Brand />
            <Sort />
          </div>
        </div>

        <div className="list_cards">
          {ProductBySearch.map((item) => {
            return <SingleProduct item={item} key={item.id} />;
            
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
