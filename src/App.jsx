import React, { useContext } from 'react';
import Content from './components/Content';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme ? "app light" : "app dark"}>
        <Content />
    </div>
  );
};

export default App;