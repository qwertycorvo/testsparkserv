import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Roles: 'customer', 'technician', 'admin', 'system_admin'
  const [user, _setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('sparkserv_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  });

  const setUser = (newUser) => {
    _setUser(newUser);
    if (newUser) {
      localStorage.setItem('sparkserv_user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('sparkserv_user');
    }
  };

  const login = (role) => {
    const userNames = {
      customer: 'Jane Customer',
      technician: 'John Technician',
      admin: 'Admin User',
      system_admin: 'System Administrator'
    };
    const newUser = {
      id: 1,
      name: userNames[role],
      role: role,
      email: `${role}@sparkserv.com`
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
