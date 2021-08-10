import React from 'react';
import { Switch } from 'antd';


const ToggleThemeButton = () => {
  return (
    <div className="toggle-theme-button">
      <button>Dark mode</button>
      <Switch />

    </div>
  );
};

export default ToggleThemeButton;

