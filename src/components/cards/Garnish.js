import React from "react";

const Garnish = ({ garnish }) => {
  return (
    <div className="d-flex flex-column">
      <h5>🌿 Garnish: </h5>
      <p>{garnish}</p>
    </div>
  );
};

export default Garnish;
