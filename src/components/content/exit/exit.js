import React from 'react';
import './exit.css';
import { Redirect } from 'react-router-dom';

const Exit = React.memo(({ logout, isAuth }) => {
  if (!isAuth) {
    return <Redirect to="login" />
  }
  return (
    <div className="exit">
      Вы действительно хотите выйти? Это действие отменить нельзя.<br />
      <button className="exit-button" onClick={logout}>Выйти</button>
    </div>
  )
});

export default Exit;