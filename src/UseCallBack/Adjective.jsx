import React, { useState } from "react";

const Adjective = () => {
  const [count, setCount] = useState(0);
  const [adjective, setAcitive] = useState("good");

  const getAdjective = () => {
    return "another";
  };

  return (
    <div>
      <h1>
        <Navbar adjective={"good"} getAdjective={getAdjective}></Navbar>
      </h1>
    </div>
  );
};

export default Adjective;
