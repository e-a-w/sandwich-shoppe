import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Table, Card } from "react-bootstrap";
import AddRemoveButtons from "../cart/AddRemoveButtons.js";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  const history = useHistory();

  return (
    <Card className="bg-secondary text-white border-0 shadow">
      <Card.Body className="d-flex flex-column align-items-center">
        <h2>Your Cart</h2>
        <Table
          striped
          borderless
          hover
          size="sm"
          className="table-light text-center shadow"
          style={{
            maxWidth: "400px",
            borderRadius: "5px",
            borderCollapse: "separate",
          }}
        >
          <tbody>
            {Object.keys(cart).map((item, idx) => {
              return (
                <tr key={item}>
                  <td>{item} sandwich</td>
                  <td style={{ minWidth: "2rem" }}>{cart[item].quantity}</td>
                  <AddRemoveButtons item={item} price={cart[item].price} />
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              {total > 0 ? (
                <>
                  <td colSpan="2" className="text-right">
                    Your Total Is:
                  </td>
                  <td colSpan="2" className="text-left">
                    ${total}
                  </td>
                </>
              ) : (
                <td colSpan="4" className="text-center text-primary">
                  your cart is empty! time to buy some delicious sandwiches
                </td>
              )}
            </tr>
          </tfoot>
        </Table>
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
