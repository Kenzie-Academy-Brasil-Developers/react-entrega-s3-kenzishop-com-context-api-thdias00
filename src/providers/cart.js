import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])

    const removeFromCart = (item) => {
        const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    };


    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}