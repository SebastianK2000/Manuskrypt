import { createContext, useState } from "react";
import { BookData } from "../data/BookData";

interface ContextValue {
    cartItems: { [key: number]: number };
    addToCart: (itemId: number) => void;
    updateCartItemCount: (newAmount: number, itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    getTotalCartAmount: () => number;
    checkout: () => void;
}


interface ContextValue {

    cartItems: { [key: number]: number };

    addToCart: (itemId: number) => void;

    updateCartItemCount: (newAmount: number, itemId: number) => void;

    removeFromCart: (itemId: number) => void;

    getTotalCartAmount: () => number;

    checkout: () => void;

}

export type { ContextValue };

export const ShopContext = createContext<ContextValue | null>(null);

const getDefaultCart = () => {
    let cart: { [key: number]: number } = {};
    for (let i = 1; i < BookData.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

import React from "react";

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = BookData.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };


    const addToCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    };

    const updateCartItemCount = (newAmount: number, itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
       <ShopContext.Provider value={contextValue}>
           {children}
       </ShopContext.Provider>
    );
};