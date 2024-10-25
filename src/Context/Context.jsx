// src/Context/Context.jsx
import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const useShop = () => {
    return useContext(ShopContext);
};

export const ShopContextProvider = ({ children }) => {
    const [value, setValue] = useState(null);

    return (
        <ShopContext.Provider value={{ value, setValue }}> 
            {children}
        </ShopContext.Provider>
    );
};
