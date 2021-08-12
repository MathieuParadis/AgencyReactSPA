import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Navigation = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme ? "navigation-light" : "navigation-dark"}>
        <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
        <NavLink exact to="/about" activeClassName="nav-active">About us</NavLink>
        <NavLink exact to="/works" activeClassName="nav-active">Projects</NavLink>
    </div>
  );
};

export default Navigation;