import React, { useState } from "react";
import "./sort.css";
import { CartState } from "../context/Context";

const Sort = () => {
    const[lth,setLth]=useState(false);
    const[htl,setHtl]=useState(false);


  const { dispatch } = CartState();
//   console.log(state.sort);
  // console.log(dispatch);

  const handleSort = (e,option) => {
      if(e.target.value=="lth"){
          setLth(true);
          setHtl(false)
      }else{
          setLth(false);
          setHtl(true);
      }

    dispatch({
      type: option,
      payload: option,
    });
  };

  return (
    <div className="sort_price">
      <h3 className="sort_heading">Sort by:</h3>
      <ul className="price_list">
        <li>
          <input
            id="lth"
            name="sort"
            checked={lth}
            className="sort_input"
            value="lth"
            type="radio"
            onChange={(e) => handleSort(e, "lth")}
          />
          <lable className="sort_label" htmlFor="low">Low to High</lable>
        </li>
        <li>
          <input
            id="htl"
            name="sort"
            checked={htl}
            className="sort_input"
            value="htl"
            type="radio"
            onChange={(e) => handleSort(e,"htl")}
          />
          <lable className="sort_label" htmlFor="moderate">High to Low</lable>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
