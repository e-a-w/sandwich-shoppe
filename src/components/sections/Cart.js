import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ItemsTable from "../cart/ItemsTable";

const Cart = () => {
  const history = useHistory();

  return (
    <Card className="bg-secondary text-white border-0 shadow">
      <Card.Body className="d-flex flex-column align-items-center">
        <h2>Your Cart</h2>
        <ItemsTable showFooter={true} />
        <Button
          className="btn-info shadow"
          onClick={() => history.push("/cart/checkout")}
        >
          ready to checkout?
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
