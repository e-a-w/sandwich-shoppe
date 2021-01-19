import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Table } from "react-bootstrap";
import AddRemoveButtons from "../cart/AddRemoveButtons.js";

const ItemsTable = ({ showFooter, thead }) => {
  const { cart, total } = useContext(CartContext);
  return (
    <Table
      striped
      borderless
      hover
      size="sm"
      className="table-light text-center shadow"
      style={{
        justifySelf: "center",
        maxWidth: "400px",
        borderRadius: "5px",
        borderCollapse: "separate",
      }}
    >
      {thead && (
        <thead colSpan="4">
          <tr>
            <th>{thead}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {Object.keys(cart).map(item => {
          return (
            <tr key={item}>
              <td>{item} sandwich</td>
              <td style={{ minWidth: "2rem" }}>{cart[item].quantity}</td>
              <AddRemoveButtons item={item} price={cart[item].price} />
            </tr>
          );
        })}
      </tbody>
      {showFooter && (
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
      )}
    </Table>
  );
};

export default ItemsTable;
