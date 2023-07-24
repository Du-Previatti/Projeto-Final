import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const CartContext = createContext({
    cartItems: [],
    addToCart: () => { null; },
    removeItemFromCart: () => { null; },
});
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems((prevItems) => prevItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const removeItemFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    return (_jsx(CartContext.Provider, { value: { cartItems, addToCart, removeItemFromCart }, children: children }));
}
