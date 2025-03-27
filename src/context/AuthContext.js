// AuthContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { setupTokenRefresh } from "@/firebase/authMiddleware";

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authUser, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Setup token refresh mechanism
    const cleanup = setupTokenRefresh((newToken) => {
      setToken(newToken);
    });

    return () => cleanup();
  }, []);

  const setAuthUser = (userData) => {
    setUser(userData);
    setLoading(false);
  };

  const unSetAuthUser = () => {
    setUser(null);
    setToken(null);
    setLoading(false);
  };

  const value = {
    authUser,
    token,
    loading,
    setAuthUser,
    unSetAuthUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};