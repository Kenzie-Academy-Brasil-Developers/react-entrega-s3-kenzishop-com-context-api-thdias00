import { createContext, useState, usestate } from "react";
import { Products } from "../assets";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(Products);
    return (
        <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
    )
}