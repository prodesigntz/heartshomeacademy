// UserContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context with a default value of null for the user
const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);
export const AppContextProvider = ({ children }) => {
  const [authUser, setUser] = useState(null);

  // Define a function to log in the user
  const setAuthUser = (userData) => {
    setUser(userData);
  };

  // Define a function to log out the user
  const unSetAuthUser = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        authUser,
        setAuthUser,
        unSetAuthUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
