import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthState {
  email: any;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  login(credentials: SignInCredentials): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>(() => {
    const token = localStorage.getItem('@Pokemon:email');

    if (token) {
      return { token };
    }

    return {} as AuthState;
  });

  const login = useCallback(({ email }) => {
    localStorage.setItem('@Pokemon:email', email);

    setData({ email });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@Pokemon:email');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
