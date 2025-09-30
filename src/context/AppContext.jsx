import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null); // данные KYC
  const [transfer, setTransfer] = useState({
    amount: 0,
    eur: 0,
    status: 'init',
  });

  return (
    <AppContext.Provider value={{ user, setUser, transfer, setTransfer }}>
      {children}
    </AppContext.Provider>
  );
}
