'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';

interface CartItem {
  id: number;
  image: StaticImageData | string;
  productName: string;
  detail: string;
  quantity: number;
  price: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, type: 'increase' | 'decrease') => void;
  clearCart: () => void;
  getTotalPrice: () => string;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotalPrice: () => '0',
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        const hydratedCart = parsedCart.map((item: CartItem) => ({
          ...item,
          image: item.image
        }));
        setItems(hydratedCart);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }, []);

  useEffect(() => {
    try {
      const cartToSave = items.map(item => ({
        ...item,
        image: typeof item.image === 'string' ? item.image : item.image.src
      }));
      localStorage.setItem('cart', JSON.stringify(cartToSave));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, newItem];
    });
  };

  const updateQuantity = (id: number, type: 'increase' | 'decrease') => {
    setItems(currentItems => 
      currentItems.map(item => {
        if (item.id === id) {
          const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
          if (newQuantity === 0) {
            return null;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      return total + (itemPrice * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  
  // Error handling if useCart is used outside CartProvider
  if (!context) {
  throw new Error("useCart must be used within a CartProvider");
  }
  return context;
  };