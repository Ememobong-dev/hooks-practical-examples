"use client";

import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1 < 0 ? 0 : prev - 1 );
  };



  return (
    <div>
      <h1 className="font-bold text-3xl text-center">USE STATE EXAMPLE</h1>

      {/* MANAGING A COUNTER WITH useState */}
      <div className="flex items-center justify-center gap-8 mt-5">
        <button
          onClick={handleIncrease}
          className="bg-blue-800 text-white rounded-3xl py-2 px-8"
        >
          {" "}
          Increase{" "}
        </button>
        <p> {count} </p>
        <button
          onClick={handleDecrease}
          className="bg-orange-800 text-white rounded-3xl py-2 px-8"
        >
          {" "}
          Decrease{" "}
        </button>
      </div>
    </div>
  );
};

export default page;
