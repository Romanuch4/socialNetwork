import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './header-nav-item.css';

const HeaderNavItem = ({ label }) => {
  return (
    <li className="header-nav-li">
      <Route>
        <NavLink
          className="header-nav-item"
          activeClassName="header-nav-item-active"
          to={`../../../${label}`}>
          {label}
        </NavLink>
      </Route>
    </li>
  )
};

export default HeaderNavItem;