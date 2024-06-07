import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkButton = ({ currectRouteNumber, to, text }) => {
  const textColor = currectRouteNumber === 2 ? 'text-black' : 'text-white';

  return (
    <NavLink
      to={to}
      className={`px-4 py-2 rounded no-underline ${textColor}`}
      style={{ textDecoration: 'none', minWidth: '150px' }} // Set a minimum width
      activeClassName="font-medium"
    >
      <span className="block hover:font-bold">
        {text}
      </span>
    </NavLink>
  );
};

export default NavLinkButton;
