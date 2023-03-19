import React  from "react";
import "./gender.css";
import { CartState } from "../context/Context";

const Gender = () => {

  

  const { dispatch } = CartState();
  // console.log(state);

  const handleGender = (e, option) => {
    let check = e.target.checked;
    // check is boolean true or false
    dispatch({
      type: "GENDER",
      payload: {
        option,
        check,
      },
    });
  };

  return (
    <div>
      <div className="list_gender">
        <h3 className="gender_heading">Category</h3>
        <ul className="gender_list">
          {/* <li>
            <input
              className="gender_input"
              value="all"
              id="all"
              // checked={all}
              onChange={(e) => handleGender(e, "ALL")}
              type="checkbox"
            />
            <label htmlFor="men">ALL</label>
          </li> */}
          <li>
            <input
              className="gender_input"
              // value="men"
              // id="men"
              // checked={men}
              onChange={(e) => handleGender(e, "MEN")}
              type="checkbox"
            />
            <label className="gender_label" htmlFor="men">
              MEN
            </label>
          </li>
          <li>
            <input
              className="gender_input"
              // value="women"
              // id="women"
              // checked={women}
              onChange={(e) => handleGender(e, "WOMEN")}
              type="checkbox"
            />
            <label className="gender_label" htmlFor="women">
              WOMEN
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gender;
