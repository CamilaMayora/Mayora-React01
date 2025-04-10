import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const addItem = (item, quantity) => {
    setCartItems(prevItems => {
      
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

 
  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  
  const clear = () => {
    setCartItems([]);
  };

  
  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider