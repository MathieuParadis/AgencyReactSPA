import React, {useContext} from 'react';
import { Switch } from 'antd';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleThemeButton = () => {
  const {toggleTheme, theme} = useContext(ThemeContext);

  return (
    <div className="toggle-theme-button">
      <Switch onClick={toggleTheme} checkedChildren="light" unCheckedChildren="dark" className={theme ? "light" : "dark"}/>
    </div>
  );
};

export default ToggleThemeButton;

