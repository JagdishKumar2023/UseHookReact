import React, { memo } from "react";

export const ChildComp = () => {
  console.log("Child component is Rendered!");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};
memo(ChildComp);
