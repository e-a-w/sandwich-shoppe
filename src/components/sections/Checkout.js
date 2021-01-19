import React from "react";
import { Card } from "react-bootstrap";
import ItemsTable from "../cart/ItemsTable";
import PriceTable from "../cart/PriceTable";
import OrderBox from "../cart/OrderBox";

const Checkout = () => {
  return (
    <Card className="bg-secondary text-white border-0 shadow">
      <Card.Body>
        <h2>Checkout:</h2>
        <div
          className="mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            gridTemplateAreas: "'items info' 'price info'",
          }}
        >
          <ItemsTable style={{ gridArea: "items" }} thead="Items: " />
          <PriceTable style={{ gridArea: "price" }} />
          <OrderBox />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Checkout;
