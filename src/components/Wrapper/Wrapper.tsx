import { ReactNode, useContext } from 'react';
import { Theme, ThemeContext } from '../../contexts/ThemeContext';
import { ToggleTheme } from '../common/ToggleTheme/ToggleTheme';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const targetTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(targetTheme);
  };

  return (
    <div className={theme}>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
};
