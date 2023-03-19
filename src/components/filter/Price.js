
import React, { useState } from 'react'
import "./price.css"
import { CartState } from '../context/Context';

const Price = () => {
  const {dispatch} =CartState();


  const[low,setLow]=useState(false);
  const[moderate,setModerate]=useState(false);
  const[high,setHigh]=useState(false);


  const handlePrice=(e,option)=>{
    if(e.target.value === "low"){
      setLow(true);
      setModerate(false);
      setHigh(false)
    }
    else if(e.target.value === "moderate"){
       setLow(false);
       setModerate(true);
       setHigh(false);
    }

    else{
       setLow(false);
       setModerate(false);
       setHigh(true);

    }

    dispatch({
     type:option,
    payload:option
    })

  }


  return (
    <div>
      <div className="list_price">
        <h3 className="price_heading">Price</h3>
        <ul className="price_list">
          <li>
            <input
              className="price_input"
              type="radio"
              value="low"
              checked={low}
              onChange={(e) => handlePrice(e, "low")}
            />
            <lable className="price_label" htmlFor="low">$100 - $500</lable>
          </li>
          <li>
            <input
              className="price_input"
              type="radio"
              value="moderate"
              checked={moderate}
              onChange={(e) => handlePrice(e, "moderate")}
            />
            <lable className="price_label" htmlFor="moderate">$500 - $1000</lable>
          </li>
          <li>
            <input
              className="price_input"
              type="radio"
              value="high"
              checked={high}
              onChange={(e) => handlePrice(e, "high")}
            />
            <lable className="price_label" htmlFor="high">$1500 - $2000</lable>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Price