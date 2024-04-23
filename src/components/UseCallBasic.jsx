import React, { useState } from "react";

function UseCallBack() {
  const [countOne, setCounterOne] = useState(0);
  const [countTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(countOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(countTwo - 1);
  };

  const isEven = useMeno(() => {
    console.warr(".....");
    let i = 0;
    while (i < 200000) i++;
    return countOne % 2 === 0;
  });
}
