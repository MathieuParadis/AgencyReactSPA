import React from 'react';
import Navigation from './Navigation';
import ToggleThemeButton from './ToggleThemeButton';

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <ToggleThemeButton />
    </div>
  );
};

export default Header;