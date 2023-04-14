import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actionCreatorsIndex";

const Shop = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <h1>Welcome to Fruit Shop!</h1>
      <div className="shop-box">
        <div className="fruit">
          <p style={{ marginRight: "20px" }}>Fruit</p>
          <button
            onClick={() => {
              if (count > 0) {
                actions.removeCart(1);
              }
            }}
          >
            -
          </button>
          <p style={{ margin: "0px 10px" }}>{count}</p>
          <button
            onClick={() => {
              actions.addCart(1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
