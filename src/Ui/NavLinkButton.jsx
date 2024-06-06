import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkButton = ({ currectRouteNumber, to, text }) => {
  const textColor = currectRouteNumber === 2 ? 'text-black' : 'text-white';
 
  return (
    <NavLink
      to={to}
      className={`px-4 py-2 rounded hover:font-medium no-underline ${textColor}`}
      style={{ textDecoration: 'none' }}
    >
      {text}
    </NavLink>
  );
};

export default NavLinkButton;
