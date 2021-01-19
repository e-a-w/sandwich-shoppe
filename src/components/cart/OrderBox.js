import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

const OrderBox = () => {
  const { total } = useContext(CartContext);
  return (
    <div
      className="bg-dark px-0 pt-4 pb-4 d-flex justify-content-center align-items-start shadow-sm"
      style={{ gridArea: "info", borderRadius: "3px" }}
    >
      <Button className="bg-info shadow">place your order!</Button>
    </div>
  );
};

export default OrderBox;
