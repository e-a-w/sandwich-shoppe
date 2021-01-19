import React, { createContext, useState, useEffect } from "react";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState({
    tax: (total * 0.03).toFixed(2),
    delivery: 2.5,
    tip: (total * 0.2).toFixed(2),
  });

  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState({});

  const addToCart = (item, price) => {
    let quantity = 1;

    if (cart[item]) {
      quantity = cart[item].quantity + 1;
    }

    setCart({ ...cart, [item]: { price, quantity } });

    return quantity;
  };

  const removeFromCart = (item, price) => {
    let quantity = 0;

    if (cart[item] && cart[item].quantity > 0) {
      quantity = cart[item].quantity - 1;
    }

    setCart({ ...cart, [item]: { price, quantity } });

    return quantity;
  };

  const calculateItemTotal = () => {
    let t = 0;

    for (const item in cart) {
      t += cart[item].quantity * cart[item].price;
    }

    setTotal(t.toFixed(2));
  };

  const cartClick = (item, price, addOrRemove, show = true) => {
    let quantity = 0;

    if (addOrRemove === "add") {
      quantity = addToCart(item, price);
    } else if (addOrRemove === "remove") {
      quantity = removeFromCart(item, price);
    }

    if (show && quantity) {
      setShowToast(show);
      setToastText({ item, price, action: addOrRemove });
      clearTimeout();
      setTimeout(() => {
        setShowToast(false);
      }, 8000);
    }
  };

  useEffect(() => {
    calculateItemTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        showToast,
        setShowToast,
        toastText,
        cartClick,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
