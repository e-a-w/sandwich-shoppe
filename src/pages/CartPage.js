import React from "react";
import Header from "../components/header/Header";
import Cart from "../components/sections/Cart";

const CartPage = () => {
  return (
    <>
      <Header
        title="Shopping Cart"
        tagline="ready to buy a delicious sandwich?"
      />
      <Cart />
    </>
  );
};

export default CartPage;
