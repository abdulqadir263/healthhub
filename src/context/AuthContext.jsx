import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, isFirebaseConfigured } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { login as authLogin, register as authRegister, logout as authLogout } from '../services/authService';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If Firebase is not configured, don't set up auth listener
    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Wrapper functions that handle when Firebase is not configured
  const login = async (email, password) => {
    if (!isFirebaseConfigured) {
      console.warn('Firebase not configured - simulating login');
      setUser({ email, displayName: email.split('@')[0] });
      return { user: { email } };
    }
    return authLogin(email, password);
  };

  const register = async (email, password, displayName) => {
    if (!isFirebaseConfigured) {
      console.warn('Firebase not configured - simulating registration');
      setUser({ email, displayName });
      return { user: { email, displayName } };
    }
    return authRegister(email, password, displayName);
  };

  const logout = async () => {
    if (!isFirebaseConfigured) {
      console.warn('Firebase not configured - simulating logout');
      setUser(null);
      return;
    }
    return authLogout();
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isFirebaseConfigured
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
