import React from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from './profile';
import Exit from './exit';
import Register from './register';
import HellowBottom from './hellow/hellow-bottom';
import HellowContainer from './hellow';

const Content = React.memo(({ isAuth, login, logout }) => {
  return (
    <>
      <main className="main">
        <Route path='/hellow' render={() => <HellowContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/exit' render={() => <Exit isAuth={isAuth} logout={logout} />} />
        <Route path='/login' render={() => <Register login={login} isAuth={isAuth} />} />
      </main>
      <HellowBottom />
    </>
  );
});

export default Content;