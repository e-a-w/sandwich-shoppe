import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Garnish from "./Garnish";
import Bread from "./Bread";
import Notes from "./Notes";
import Ingredients from "./Ingredients";
import { Link } from "react-router-dom";

const SandwichCard = ({ sandwich }) => {
  const { cartClick } = useContext(CartContext);
  const [message, setMessage] = useState(sandwich.name);

  return (
    <>
      <div
        className="card text-white border-0 shadow"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <div className="card-header text-center bg-primary position-relative">
          <div className="sandwich-icon">
            <Link
              onMouseEnter={() => setMessage("click to see more!")}
              onMouseOut={() => setMessage(sandwich.name)}
              className="text-decoration-none"
              to={`/sandwich/${sandwich.id}`}
            >
              🥪
            </Link>
          </div>
          <h2 className="card-title">{message}</h2>
          <div
            style={{ gap: "15px" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              onClick={() => cartClick(sandwich.name, sandwich.price, "remove")}
              className="bg-white text-info"
              style={{
                borderRadius: "100%",
                padding: "3px 10px",
                cursor: "pointer",
              }}
            >
              -
            </div>
            <h4 className="pt-2">${sandwich.price}</h4>
            <div
              onClick={() => cartClick(sandwich.name, sandwich.price, "add")}
              className="bg-white text-info"
              style={{
                borderRadius: "100%",
                padding: "3px 10px",
                cursor: "pointer",
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="card-body bg-secondary">
          <Garnish garnish={sandwich.garnish} />
          <Bread bread={sandwich.bread} />
          <Notes notes={sandwich.notes} />
          <Ingredients ingredients={sandwich.ingredients} />
        </div>
      </div>
    </>
  );
};

export default SandwichCard;
