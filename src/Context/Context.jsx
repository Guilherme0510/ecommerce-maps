import React, { createContext, useContext, useState } from 'react';

export const ShopContext = createContext();

export const useShop = () => {
    return useContext(ShopContext);
};

export const ShopContextProvider = ({ children }) => {
    const [currency] = useState("R$"); 

    return (
        <ShopContext.Provider value={{ currency }}>
            {children}
        </ShopContext.Provider>
    );
};

