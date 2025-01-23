"use client";
import { createContext, useContext, useState } from "react";

// Cart Item interface
interface CartItem {
id: number;
productName: string;
price: string;
image: string;
quantity: number;
selectedColor: string;
selectedSize: string;
description: string;
}

interface CartContextType {
cart: CartItem[];
addToCart: (item: CartItem) => void;
updateQuantity: (id: number, quantity: number) => void;
removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
const [cart, setCart] = useState<CartItem[]>([]);

const addToCart = (item: CartItem) => {
console.log("Adding item:", item);
setCart((prevCart) => {

const existingItem = prevCart.find(
(cartItem) =>
cartItem.id === item.id &&
cartItem.selectedColor === item.selectedColor &&
cartItem.selectedSize === item.selectedSize
);


if (existingItem) {
console.log("Item already in cart, updating quantity");
return prevCart.map((cartItem) =>
cartItem.id === item.id &&
cartItem.selectedColor === item.selectedColor &&
cartItem.selectedSize === item.selectedSize
? { ...cartItem, quantity: cartItem.quantity + 1 }
: cartItem
);
}
else{
    console.log("New item added to cart");
    return [...prevCart, { ...item, quantity: 1 }];
    
    
}


});
alert("Added to cart Successfully!");
};

const updateQuantity = (id: number, quantity: number) => {
if (quantity < 1) return;
setCart((prevCart) =>
prevCart.map((cartItem) =>
cartItem.id === id ? { ...cartItem, quantity } : cartItem
)
);
};


const removeFromCart = (id: number) => {
setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
alert("Removed from cart Successfully!");
};

return (
<CartContext.Provider
value={{ cart, addToCart, updateQuantity, removeFromCart }}
>
{children}
</CartContext.Provider>
);
};

// Custom hook to use Cart context
export const useCart = () => {
const context = useContext(CartContext);

if (!context) {
throw new Error("useCart must be used within a CartProvider");
}
return context;
};