import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import ITheme from '../styles/themes/Itheme';
import dark from '../styles/themes/Dark';
import light from '../styles/themes/Light';

interface IThemeContext {
  theme: ITheme;
  toggleTheme(): void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(light);

  useEffect(() => {
    const loadTheme = localStorage.getItem('@ReactDashboard:theme');
    if (loadTheme) {
      setTheme(loadTheme === 'dark' ? dark : light);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const themeTitle = theme.title;
    setTheme(themeTitle === 'light' ? dark : light);
    return localStorage.setItem(
      '@ReactDashboard:theme',
      themeTitle === 'light' ? 'dark' : 'light',
    );
  }, [theme.title]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider ');
  }

  return context;
}
