import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { sign } from 'jsonwebtoken';

interface IuserState {
  name: string;
  token: string;
}

interface Icredentials {
  name: string;
  password: string;
}

interface IauthContext {
  user: IuserState;
  signIn(credentials: Icredentials): void;
  signOut(): void;
}

export const AuthContext = createContext({} as IauthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IuserState>({} as IuserState);

  useEffect(() => {
    const user = localStorage.getItem('@ReactDashboard:user');
    if (user) {
      setData(JSON.parse(user));
    }
  }, []);

  const signIn = useCallback(({ name, password }: Icredentials) => {
    const { login, loginPassword } = { login: 'user', loginPassword: '123' };

    if (login === name && password === loginPassword) {
      const token = sign({}, `${process.env.REACT_APP_JWT}`, {
        expiresIn: '1d',
      });
      const user = { name, token };
      localStorage.setItem('@ReactDashboard:user', JSON.stringify(user));
      return setData(user);
    }
    throw new Error('You do not have permition');
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ReactDashboard:user');
    setData({} as IuserState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
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
