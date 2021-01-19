import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Table, Form } from "react-bootstrap";

const PriceTable = () => {
  const { total, cart, totalPrice } = useContext(CartContext);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    for (const price in totalPrice) {
      setFinalPrice(p => p + Number(totalPrice[price]));
    }
  }, [cart]);

  return (
    <Table
      striped
      borderless
      hover
      size="sm"
      className="table-light text-center shadow mt-4"
      style={{
        justifySelf: "center",
        maxWidth: "400px",
        borderRadius: "5px",
        borderCollapse: "separate",
      }}
    >
      <thead colSpan="2">
        <tr>
          <th>Price: </th>
        </tr>
      </thead>
      <tbody className="text-left">
        <tr>
          <td>Items: </td>
          <td>${total}</td>
        </tr>
        <tr>
          <td>Tax: </td>
          <td>${totalPrice.tax}</td>
        </tr>
        <tr>
          <td>Delivery Fee: </td>
          <td>${totalPrice.delivery.toFixed(2)}</td>
        </tr>
        <tr>
          <td>20% Tip: </td>
          <td className="d-flex align-items-center">${totalPrice.tip}</td>
        </tr>
      </tbody>
      <tfoot colSpan="2" className="text-left" style={{ fontWeight: "bold" }}>
        <tr>
          <td>Total Price of Order: </td>
          <td>$XXX</td>
          {/* <td>${finalPrice}</td> */}
        </tr>
      </tfoot>
    </Table>
  );
};

export default PriceTable;
