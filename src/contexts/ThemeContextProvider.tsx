import React, { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};
