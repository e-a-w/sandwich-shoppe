import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

const PurchaseToast = () => {
  const { showToast, setShowToast, toastText, total } = useContext(CartContext);

  return (
    <Toast
      style={{ position: "fixed", top: "20px", left: "50%", zIndex: "9999999" }}
      show={showToast}
      onClose={() => setShowToast(false)}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Cart Updated!</strong>
      </Toast.Header>
      <Toast.Body>
        You
        {toastText.action === "add"
          ? ` ${toastText.action}ed `
          : ` ${toastText.action}d `}
        <b>{toastText.item}</b>!<br />
        <b>Total: </b>${total}
        <br />
        <Link
          to="/cart"
          className="text-decoration-none"
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          View Cart
        </Link>
      </Toast.Body>
    </Toast>
  );
};

export default PurchaseToast;
