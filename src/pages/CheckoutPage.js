import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/header/Header";
import Checkout from "../components/sections/Checkout";

const CheckoutPage = () => {
  const { total } = useContext(CartContext);

  return (
    <>
      <Header
        title="Shopping Cart"
        tagline="ready to buy a delicious sandwich?"
      />
      <Checkout />
    </>
    // <>
    //   {total && total > 0 ? (
    //     <>
    //       <Header
    //         title="Shopping Cart"
    //         tagline="ready to buy a delicious sandwich?"
    //       />
    //       <Checkout />
    //     </>
    //   ) : (
    //     <Header
    //       title="Shopping Cart: Checkout"
    //       tagline="there's nothing in your cart yet!"
    //     />
    //   )}
    // </>
  );
};

export default CheckoutPage;
