import React from "react";
import Header from "../components/header/Header";
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Header
        title="Fancy Sandwiches"
        tagline="welcome to the sandwich shoppe"
      />

      <div className="d-flex flex-wrap" style={{ gap: "20px" }}>
        <LinkContainer to="/menu" style={{ cursor: "pointer" }}>
          <div className="jumbotron bg-secondary shadow">
            <h2 className="text-white">Menu</h2>
          </div>
        </LinkContainer>
        <LinkContainer
          to={`/sandwich/${new Date().getDay()}`}
          style={{ cursor: "pointer" }}
        >
          <div className="jumbotron bg-secondary shadow">
            <h2 className="text-white">Sandwich of the Day</h2>
          </div>
        </LinkContainer>
      </div>
    </div>
  );
};

export default HomePage;
