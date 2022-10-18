import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
 
 
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );


  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

 export const removeCartItems = (cartItems,cartItemToRemove)=>{
  // find the cart item to remove

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
    

  // check if quantity is equal to 1 if it is remove that from the cart 
   if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
   }

  //

  return cartItems.map((cartItem) =>
  cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
);
 }

const clearCartItem = (cartItems,cartItemToClear)=>{
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

 
export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItems: () =>{},
  clearItemFromCart: ()=>{},
  cartCount: 0,
  cartTotal:0,

});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount ,setcarCount] = useState(0);
  const [cartTotal ,setcartTotal] = useState(0);

 useEffect(()=>{
   const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity, 0)
   setcarCount(newCartCount);
 },[cartItems]);

 useEffect(()=>{
  const newCartTotal = cartItems.reduce((total,cartItem)=> 
  total + cartItem.quantity * cartItem.price, 0)
  setcartTotal(newCartTotal);
},[cartItems])


   
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const removeItemToCart = (cartItemToRemove) =>
    setCartItems(removeCartItems(cartItems, cartItemToRemove));

    const clearItemFromCart = (cartItemToClear) =>
    setCartItems(clearCartItem(cartItems, cartItemToClear));

  const value = { isCartOpen, setIsCartOpen, cartItems, 
    addItemToCart,cartCount , removeItemToCart ,clearItemFromCart ,cartTotal};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};