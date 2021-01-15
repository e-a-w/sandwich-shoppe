import React from "react";
import SandwichCard from "../components/cards/SandwichCard";
import Header from "../components/header/Header";
import sandwichData from "../data/sandwiches.json";

const CardPage = () => {
  return (
    <>
      <Header
        title="FANCY SANDWICH MENU"
        tagline="take a look at our delicious offerings"
      />
      <section
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "30px" }}
      >
        {sandwichData.map(sandwich => (
          <SandwichCard key={sandwich.id} sandwich={sandwich} />
        ))}
      </section>
    </>
  );
};

export default CardPage;
