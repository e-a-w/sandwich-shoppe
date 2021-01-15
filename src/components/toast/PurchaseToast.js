import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Toast } from "react-bootstrap";

const PurchaseToast = () => {
  const { showToast, setShowToast, toastItem } = useContext(CartContext);

  return (
    <Toast
      style={{ position: "fixed", top: "20px", left: "50%", zIndex: "9999999" }}
      show={showToast}
      onClose={() => setShowToast(false)}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Added to Cart!</strong>
      </Toast.Header>
      <Toast.Body>
        You added <b>{toastItem}</b>!
      </Toast.Body>
    </Toast>
  );
};

export default PurchaseToast;
