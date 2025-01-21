"use client";

import React, { useReducer } from "react";

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increase' : 
            return { count: state.count + 1};
        case 'decrease' : 
            return {count: state.count - 1};
        case 'reset' : 
            return {count: 0};
        default: 
            return state;
    }
}

const page = () => {
    const initialState = {count : 0}
   const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">USE REDUCER EXAMPLE</h1>

      {/* MANAGING A COUNTER WITH MULTIPLE ACTIONS */}
      <div className="flex items-center justify-center gap-8 mt-5">
        <button
          onClick={() => dispatch({type : "increase"})}
          className="bg-blue-800 text-white rounded-3xl py-2 px-8"
        >
            Increase
        </button>
        <p> {state.count} </p>
        <button
          onClick={() => dispatch({type: "decrease"})}
          className="bg-orange-800 text-white rounded-3xl py-2 px-8"
        >
          Decrease
        </button>
      </div>
      <div className="flex items-center justify-center mt-8 font-bold">
        <button onClick= {() => dispatch({type: 'reset'})} className="bg-white text-black py-2 px-3 rounded-full">
            RESET
        </button>
      </div>
    </div>
  );
};

export default page;
