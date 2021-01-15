import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Sandwich from "../components/sections/Sandwich";
import sandwiches from "../data/sandwiches.json";

const SandwichPage = ({ match }) => {
  const { id } = match.params;
  const [sandwich, setSandwich] = useState({});

  useEffect(() => {
    setSandwich(sandwiches[id]);
  }, [id]);

  return (
    <>
      <Header
        title={sandwich.name}
        tagline={`price: $${sandwich.price}`}
        image={sandwich.image}
      />
      <Sandwich sandwich={sandwich} />
    </>
  );
};

export default SandwichPage;
