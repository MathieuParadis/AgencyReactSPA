import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
        <NavLink exact to="/about" activeClassName="nav-active">About us</NavLink>
        <NavLink exact to="/works" activeClassName="nav-active">Projects</NavLink>
    </div>
  );
};

export default Navigation;