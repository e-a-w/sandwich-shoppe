import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { Button, Jumbotron } from "react-bootstrap";
import sandwiches from "../../data/sandwiches.json";

const Header = ({ title, tagline }) => {
  const { cartClick } = useContext(CartContext);
  const { id } = useParams();
  const end = sandwiches.length - 1;
  const sandwich = sandwiches[id];

  const goBack = () => {
    const n = Number(id);
    if (n > 0) {
      return String(n - 1);
    } else {
      return String(end);
    }
  };

  const goForward = () => {
    const n = Number(id);
    if (n < end) {
      return String(n + 1);
    } else {
      return "0";
    }
  };

  const arrowStyle = {
    cursor: "pointer",
    borderRadius: "100%",
    justifySelf: "center",
    padding: "10px 18px",
    fontWeight: "bolder",
  };

  return (
    <Jumbotron id="page-header" className="text-center bg-primary shadow mb-5">
      {id && (
        <LinkContainer
          id="left-arrow"
          className="bg-white text-info d-flex justify-content-center align-items-center shadow"
          style={arrowStyle}
          to={`/sandwich/${goBack()}`}
        >
          <Button>{`<`}</Button>
        </LinkContainer>
      )}
      <div id="header-title">
        <h1 className="text-white">{title}</h1>
        <h5 className="text-white">{tagline}</h5>
        {id && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%", gap: "10px" }}
          >
            <Button
              onClick={() => cartClick(sandwich.name, sandwich.price, "remove")}
              style={{
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bolder",
                width: "2.5rem",
              }}
              className="bg-white text-danger"
            >
              -
            </Button>
            <Button
              onClick={() => cartClick(sandwich.name, sandwich.price, "add")}
              style={{
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bolder",
                width: "2.5rem",
              }}
              className="bg-white text-info"
            >
              +
            </Button>
          </div>
        )}
      </div>
      {id && (
        <LinkContainer
          id="right-arrow"
          className="bg-white text-info d-flex justify-content-center align-items-center shadow"
          style={arrowStyle}
          to={`/sandwich/${goForward()}`}
        >
          <Button>{`>`}</Button>
        </LinkContainer>
      )}
    </Jumbotron>
  );
};

export default Header;
