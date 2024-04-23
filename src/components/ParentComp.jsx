import React, { useState } from "react";

export const ParentComp = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  return (
    <div>
      <Child counterTwo={counterTwo} />
      <button onClick={IncrementOne}>counter one: {counterOne}</button>
    </div>
  );
};
