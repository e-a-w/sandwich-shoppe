import React from "react";

const Bread = ({ bread }) => {
  return (
    <div className="d-flex flex-column">
      <h5>🥐 Bread: </h5>
      <p>{bread}</p>
    </div>
  );
};

export default Bread;
