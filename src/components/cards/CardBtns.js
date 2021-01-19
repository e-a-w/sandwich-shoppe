import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

const CardBtns = ({ item, price }) => {
  const { cartClick } = useContext(CartContext);
  return (
    <div
      style={{ gap: "15px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Button
        onClick={() => cartClick(item, price, "remove")}
        className="bg-white text-info"
        style={{
          borderRadius: "100%",
          padding: "3px 10px",
          cursor: "pointer",
        }}
      >
        -
      </Button>
      <h4 className="pt-2">${price}</h4>
      <Button
        onClick={() => cartClick(item, price, "add")}
        className="bg-white text-info"
        style={{
          borderRadius: "100%",
          padding: "3px 10px",
          cursor: "pointer",
        }}
      >
        +
      </Button>
    </div>
  );
};

export default CardBtns;
