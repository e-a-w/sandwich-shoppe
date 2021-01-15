import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="d-flex flex-column">
      <h5>🧂 Ingredients: </h5>
      <p className="list-unstyled">
        {ingredients?.map((ing, idx) => {
          return (
            <span key={idx}>
              {ing} {idx === ingredients.length - 1 ? "" : "| "}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Ingredients;
