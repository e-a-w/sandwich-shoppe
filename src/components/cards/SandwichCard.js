import React, { useState } from "react";
import Garnish from "./Garnish";
import Bread from "./Bread";
import Notes from "./Notes";
import Ingredients from "./Ingredients";
import CardBtns from "./CardBtns";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const SandwichCard = ({ sandwich }) => {
  const [message, setMessage] = useState(sandwich.name);

  return (
    <>
      <Card
        className="text-white border-0 shadow"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <Card.Header className="text-center bg-primary position-relative">
          <div className="sandwich-icon">
            <Link
              onMouseEnter={() => setMessage("click to see more!")}
              onMouseOut={() => setMessage(sandwich.name)}
              className="text-decoration-none"
              to={`/sandwich/${sandwich.id}`}
            >
              🥪
            </Link>
          </div>
          <Card.Title as="h2" className="text-white">
            {message}
          </Card.Title>
          <CardBtns item={sandwich.name} price={sandwich.price} />
        </Card.Header>
        <Card.Body className="bg-secondary">
          <Garnish garnish={sandwich.garnish} />
          <Bread bread={sandwich.bread} />
          <Notes notes={sandwich.notes} />
          <Ingredients ingredients={sandwich.ingredients} />
        </Card.Body>
      </Card>
    </>
  );
};

export default SandwichCard;
