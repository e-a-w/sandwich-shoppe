import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <Card className="bg-secondary text-white border-0 shadow text-center">
      <Card.Body>
        <h3 className="text-white pt-3 pb-3">
          Who doesn't love the sandwich life?
        </h3>
        <p>
          Fancy sandwiches are delicious, beautiful & brighten everyone's day.
          Check out our delicious selection!
        </p>
      </Card.Body>
    </Card>
  );
};

export default About;
