import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { total } = useContext(CartContext);
  return (
    <Navbar bg="info" sticky="top" className="shadow" expand="md">
      <Navbar.Brand
        to="/"
        className="text-white d-flex align-items-center justify-content-between"
      >
        <span style={{ fontSize: "2rem" }}>🥪</span>
        <span>&nbsp;Home</span>
      </Navbar.Brand>
      <Navbar.Toggle className="bg-white" aria-controls="navigation" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} className="text-white" to="/menu">
            🍞&nbsp;&nbsp;Full Menu
          </Nav.Link>
          <Nav.Link as={Link} className="text-white" to={`/sandwich/0`}>
            ℹ️&nbsp;&nbsp;Sandwiches
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="text-white"
            to={`/sandwich/${new Date().getDay()}`}
          >
            🗓️&nbsp;&nbsp;Sandwich of the Day
          </Nav.Link>
          <Nav.Link as={Link} className="text-white" to="/cart">
            🛒&nbsp;&nbsp;Cart: ${total}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
