import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Navigation from './Navigation';
import ToggleThemeButton from './ToggleThemeButton';

const Header = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme ? "header light" : "header dark"}>
      <Navigation />
      <ToggleThemeButton />
    </div>
  );
};

export default Header;