import React, { createContext, useState, useEffect } from "react";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastItem, setToastItem] = useState("");

  const addToCart = (item, price) => {
    let quantity = 1;

    if (cart[item]) {
      quantity = cart[item].quantity + 1;
    }

    setCart({ ...cart, [item]: { price, quantity } });
  };

  const removeFromCart = (item, price) => {
    let quantity = 0;

    if (cart[item] && cart[item].quantity > 0) {
      quantity = cart[item].quantity - 1;
    }

    setCart({ ...cart, [item]: { price, quantity } });
  };

  const calculateTotal = () => {
    let t = 0;

    for (const item in cart) {
      t += cart[item].quantity * cart[item].price;
    }

    setTotal(t.toFixed(2));
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        total,
        showToast,
        setShowToast,
        toastItem,
        setToastItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
