import React from "react";
import Garnish from "../cards/Garnish";
import Bread from "../cards/Bread";
import Notes from "../cards/Notes";
import Ingredients from "../cards/Ingredients";
import { Card } from "react-bootstrap";

const Sandwich = ({ sandwich }) => {
  const imageStyle = {
    backgroundImage: `url('${sandwich.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5px",
    border: "15px solid white",
  };

  return (
    <Card className="bg-secondary text-white border-0 shadow">
      <Card.Body style={{ gap: "30px" }} className="d-flex s-img-container">
        <div className="s-image shadow-sm" style={imageStyle}></div>
        <div
          className="bg-white text-info align-self-start px-5 pt-3 pb-3 shadow-sm"
          style={{ borderRadius: "3px", border: "10px solid lightblue" }}
        >
          <Garnish garnish={sandwich.garnish} />
          <Bread bread={sandwich.bread} />
          <Notes notes={sandwich.notes} />
          <Ingredients ingredients={sandwich.ingredients} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Sandwich;
