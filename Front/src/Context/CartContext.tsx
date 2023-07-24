import { createContext, useState } from "react";
import { IProduct } from "../utils/types";

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeItemFromCart: (itemId: number) => void;
}

export const CartContext = createContext<ICartContext>({
  cartItems: [],
  addToCart: () => {null},
  removeItemFromCart: () => {null},
});


export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (product: IProduct) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
