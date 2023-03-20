import React, { useState } from "react";
import "./header.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import "../bagmodal/bag.css";

const Header = ({ setfun }) => {
  const {
    state: { bag },
    dispatch,
  } = CartState();

  console.log(bag);

  // console.log(cart);

  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  {
    setfun(search);
  }

  // console.log(search);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="header">
      <h2 className="header_heading">GoComet Assignment</h2>
      <div className="header_search">
        <input
          placeholder="Search Shirts"
          className="header_input"
          onChange={(e) => handleSearch(e)}
        />
        <button className="header_btn">Search</button>
      </div>
      <div className="header_icons">
        <Link to="/wish">
          <FavoriteBorderIcon className="icons" />
        </Link>

        <ShoppingBagIcon className="icons" onClick={toggleModal} />
        <div className="cart_length">{bag.length}</div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Cart items</h2>
              {bag.length > 0 ? (
                <>
                  {bag.map((item) => {
                    return (
                      <div className="bag_cont">
                        <img src={item.img} className="bag_img" />
                        <div className="bag_brandanddesc">
                          <p>{item.brand}</p>
                          <p>{item.pname}</p>
                        </div>
                        <div className="bag_price">${item.price}</div>
                        <button
                          className="bag_btn"
                          onClick={() => {
                            dispatch({
                              type: "REMOVEFROMBAG",
                              payload: item,
                            });
                          }}
                        >
                          Remove item
                        </button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h2>Bag is empty</h2>
                </>
              )}

              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
