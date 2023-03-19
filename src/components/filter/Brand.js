import React from "react";
import "./brand.css";
import { CartState } from "../context/Context";

const Brand = () => {
  const {dispatch} = CartState();

  const handleBrand=(e,option)=>{
    let check=e.target.checked;
    // check is boolean true or false
    dispatch({
      type:"BRAND",
      payload:{
        option,
        check

      }

    })

  }



  return (
    <div>
      <div className="list_size">
        <h3 className="size_heading">Brand</h3>
        <ul className="size_list">
          <li>
            <input
              className="size_input"
              type="checkbox"
              onChange={(e) => handleBrand(e, "HIGHLANDER")}
            />
            <label className="brand_label" htmlFor="extrasmall">
              HIGHLANDER
            </label>
          </li>
          <li>
            <input
              className="size_input"
              type="checkbox"
              onChange={(e) => handleBrand(e, "H&M")}
            />
            <label className="brand_label" htmlFor="small">
              H&M
            </label>
          </li>
          <li>
            <input
              className="size_input"
              type="checkbox"
              onChange={(e) => handleBrand(e, "INDIETOGA")}
            />
            <label className="brand_label" htmlFor="medium">
              INDIETOGA
            </label>
          </li>
          <li>
            <input
              className="size_input"
              type="checkbox"
              onChange={(e) => handleBrand(e, "RAYMOND")}
            />
            <label className="brand_label" htmlFor="large">
              RAYMOND
            </label>
          </li>
          <li>
            <input
              className="size_input"
              type="checkbox"
              onChange={(e) => handleBrand(e, "TAAVI")}
            />
            <label className="brand_label" htmlFor="extralarge">
              TAAVI
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brand;
