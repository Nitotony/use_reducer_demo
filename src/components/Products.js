import React from "react";

const Product = (props) => {
  return (
    <div className="product">


      <img src={props.image} />
      <h2>{props.name}</h2>
      <h3>Price: ${props.price}</h3>

      

      <button
        onClick={() => {
          props.dispatch({ type: "add", payload: { name: props.name } });
          props.dispatch({ type: "increase" });
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          if (props.booked[props.name] > 0) {
            props.dispatch({ type: "remove", payload: { name: props.name } });
            props.dispatch({ type: "decrease" });
          }
        }}
      >
        Remove from Cart
      </button>

      <p>Quantity: {props.booked[props.name] || 0}</p>
    </div>
  );
};

export default Product;
