import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Table } from "react-bootstrap";

const Cart = () => {
  const { cart, cartClick, total } = useContext(CartContext);

  return (
    <div className="card bg-secondary text-white shadow">
      <div className="card-body d-flex flex-column align-items-center">
        <h2>Your Cart</h2>
        <Table
          striped
          bordered
          hover
          size="sm"
          className="table-light text-center shadow"
          style={{ maxWidth: "300px", borderRadius: "5px" }}
        >
          <tbody>
            {Object.keys(cart).map(item => {
              return (
                <tr key={item}>
                  <td>{item} sandwich</td>
                  <td>{cart[item].quantity}</td>
                  <td
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      cartClick(item, cart[item].price, "remove", false)
                    }
                  >
                    -
                  </td>
                  <td
                    className="text-success"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      cartClick(item, cart[item].price, "add", false)
                    }
                  >
                    +
                  </td>
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
        <Button className="btn-info shadow">checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
