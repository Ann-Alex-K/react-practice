interface ToggleThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const ToggleTheme = ({ theme, toggleTheme }: ToggleThemeProps) => {
  return (
    <div className="toggle_theme__wrapper">
      <div className="toggle_theme">
        <img src={`/${theme}.svg`} alt="theme" onClick={toggleTheme} />
      </div>
    </div>
  );
};
