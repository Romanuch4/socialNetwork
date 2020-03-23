import React from 'react';
import './header.css';
import HeaderLogo from './header-logo';
import HeaderNav from './header-nav/header-nav';

const Header = ({login}) => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo login={login} />
        <input className="switcher" type="checkbox" id="menu" />
        <label className="label open" htmlFor="menu">
          <i className="fa fa-bars"></i>
        </label>
        <HeaderNav />
      </div>
    </header>
  )
}

export default Header;