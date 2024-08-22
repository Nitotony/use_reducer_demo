import React, { useReducer } from "react";
import "./App.css";
import Product from "./components/Products"; 
import ppk from "./assets/walter_ppk.jpg"
import ak47 from "./assets/AK-47.jpg";

import double from "./assets/doublebarrel.jpg";


const initialState = {
  count: 0,
  booked: {},
};

const reducers = (state, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrease":
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };

    case "add":
      return {
        ...state,
        booked: {
          ...state.booked,
          [action.payload.name]: (state.booked[action.payload.name] || 0) + 1,
        },
      };

    case "remove":
     
      return {
        ...state,
        booked: {
          ...state.booked,
          [action.payload.name]:state.booked[action.payload.name] > 0? state.booked[action.payload.name] - 1: 0 ,
        },
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <div className="App">
      <h1>Gun Shop</h1>
      <div className="Product_collection">
        <Product
         image={ppk}
          name="Walter ppk"
          dispatch={dispatch}
          price={12}
          booked={state.booked}
        />
        <Product
        image={ak47}
          name="AK-47"
          dispatch={dispatch}
          price={20}
          booked={state.booked}
        />
        <Product
         image={double}
          name="double-barrel"
          dispatch={dispatch}
          price={50}
          booked={state.booked}
        />
      </div>

      <div>
        <h3>Booked Items and Quantities:</h3>
        <ul>
          {Object.keys(state.booked).map((key) => {
            if (state.booked[key] > 0) {
              return (
                <li key={key}>
                  <p>{key}: </p>
                  <p>{state.booked[key]}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <p>Total Items in Cart: {state.count}</p>
      </div>
    </div>
  );
}

export default App;
