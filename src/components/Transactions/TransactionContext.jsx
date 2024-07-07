import React, { createContext, useState } from 'react';

// Create Context
export const TransactionContext = createContext();

// Create Provider Component
export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (text, amount) => {
        const newTransaction = { text, amount: parseFloat(amount) };
        setTransactions([...transactions, newTransaction]);
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
