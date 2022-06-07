import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'rgb(17, 168, 161)',
  };
  return (
    <>
      <ul className="header">
        <li>
          <NavLink style={linkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/quote">
            Quote
          </NavLink>
        </li>
      </ul>
      <h2 className="title">Math Magicians</h2>
    </>
  );
};

export default Navbar;
