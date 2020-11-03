import React from "react";
import "./order.min.css";

export const Orderer = (props) => {
  console.log(props.isAscending);
  return (
    <div className={props.className}>
      <span className="sort-order" onClick={() => props.onClick()}>
        <div className="order-arrow">
          <span
            className={`bot-arrow ${
              props.isAscending ? "active-order" : "non-active-order"
            }`}
          >
            &#8595;
          </span>
          <span
            className={`top-arrow ${
              !props.isAscending ? "active-order" : "non-active-order"
            }`}
          >
            &#x2191;
          </span>
        </div>
        Name
      </span>
    </div>
  );
};
