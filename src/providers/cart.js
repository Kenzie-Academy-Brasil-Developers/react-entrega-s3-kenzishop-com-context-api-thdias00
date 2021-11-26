import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    console.log(cart)

    const addToCart = (item) => {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

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