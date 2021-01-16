import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

const AddRemoveButtons = ({ item, price }) => {
  const { cartClick } = useContext(CartContext);
  return (
    <>
      <td
        className="text-white bg-danger"
        style={{ cursor: "pointer", width: "2rem" }}
        onClick={() => cartClick(item, price, "remove", false)}
      >
        <Button
          style={{
            background: "none",
            border: "none",
            borderRadius: "0px",
            width: "100%",
            height: "100%",
          }}
        >
          -
        </Button>
      </td>
      <td
        as={Button}
        className="bg-success"
        style={{
          cursor: "pointer",
          width: "2rem",
        }}
        onClick={() => cartClick(item, price, "add", false)}
      >
        <Button
          style={{
            background: "none",
            border: "none",
            borderRadius: "0px",
            width: "100%",
            height: "100%",
          }}
        >
          +
        </Button>
      </td>
    </>
  );
};

export default AddRemoveButtons;
