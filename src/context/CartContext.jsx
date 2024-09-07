import React, { createContext, useState } from "react";

// Step 1: Create the context
export const CartContext = createContext();

// Step 2: Create the provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Step 3: Add item to cart, ensuring no duplicates and handling quantities
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Step 4: Remove one item from the cart or remove the product entirely
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Step 5: Return context provider with value
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
