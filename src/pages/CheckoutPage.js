import React from "react";
import Header from "../components/header/Header";
import Checkout from "../components/sections/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <Header
        title="Shopping Cart"
        tagline="ready to buy a delicious sandwich?"
      />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
