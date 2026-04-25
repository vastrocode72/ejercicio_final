import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        Urban Threads
      </NavLink>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
