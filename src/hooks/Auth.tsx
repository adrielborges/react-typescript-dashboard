import React, { createContext, useCallback, useState, useContext } from 'react';

// import { Container } from './styles';

interface IuserState {
  user: Icredentials;
}

interface Icredentials {
  name: string;
  password: string;
}

interface IauthContext {
  user: object;
  signIn(credentials: Icredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as IauthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@ReactDashboard:user');
    if (user) {
      return { user: JSON.parse(user) };
    }
    return {} as IuserState;
  });

  const signIn = useCallback(async ({ name, password }: Icredentials) => {
    const { login, loginPassword } = { login: 'user', loginPassword: '123' }; // axios

    const user = { name, password };

    if (login === name && password === loginPassword) {
      localStorage.setItem('@ReactDashboard:user', JSON.stringify(user));
      return setData({ user });
    }
    throw new Error('You do not have permition');
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@ReactDashboard:user');
    setData({} as IuserState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IauthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider ');
  }

  return context;
}
