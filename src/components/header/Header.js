import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import sandwiches from "../../data/sandwiches.json";

const Header = ({ title, tagline }) => {
  const { id } = useParams();
  const end = sandwiches.length - 1;

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
    padding: "5px 15px",
    width: "50px",
    justifySelf: "center",
  };

  return (
    <header
      id="page-header"
      className="jumbotron text-center bg-primary shadow mb-5"
    >
      {id && (
        <LinkContainer
          id="left-arrow"
          className="bg-white text-info d-flex justify-content-center align-items-center shadow"
          style={arrowStyle}
          to={`/sandwich/${goBack()}`}
        >
          <h2>{`<`}</h2>
        </LinkContainer>
      )}
      <div id="header-title">
        <h1 className="text-white">{title}</h1>
        <h5 className="text-white">{tagline}</h5>
      </div>
      {id && (
        <LinkContainer
          id="right-arrow"
          className="bg-white text-info d-flex justify-content-center align-items-center shadow"
          style={arrowStyle}
          to={`/sandwich/${goForward()}`}
        >
          <h2>{`>`}</h2>
        </LinkContainer>
      )}
    </header>
  );
};

export default Header;
