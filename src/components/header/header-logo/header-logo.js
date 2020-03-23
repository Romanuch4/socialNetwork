import React from 'react';
import './header-logo.css';

const HeaderLogo = ({login}) => {
  return (
    <div className="header-logo">
      uPublic <span className="header-logo-span">{login}</span>
    </div>
  )
}

export default HeaderLogo;