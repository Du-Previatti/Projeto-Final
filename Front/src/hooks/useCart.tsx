import { useContext } from "react";
import { ICartContext, CartContext } from "../Context/CartContext";


export function useCart(): ICartContext {
    return useContext(CartContext);
  }