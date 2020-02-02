import React from 'react';
import HeaderNavItem from './header-nav-item';

const HeaderNav = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        <HeaderNavItem label="hellow" />
        <HeaderNavItem label="profile" />
        <HeaderNavItem label="exit" />
      </ul>
      <label className="label close" htmlFor="menu">
        <i className="fa fa-times"></i>
      </label>
    </nav>
  )
};

export default HeaderNav;