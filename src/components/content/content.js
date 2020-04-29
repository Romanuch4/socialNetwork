import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileContainer from './profile';
import HellowContainer from './hellow';
import LazyLoading from '../../hoc/LazyLoading';
const Exit = React.lazy(() => import('./exit'));
const Register = React.lazy(() => import('./register'));

const Content = React.memo(({ isAuth, login, logout, captchaUrl }) => {
  return (
    <main className="main">
      <Switch>
        <Redirect from="/" to="/hellow" exact/>
        <Route path='/hellow' render={() => <HellowContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/exit' render={() => LazyLoading(Exit, { isAuth: isAuth, logout: logout })} />
        <Route path='/login' render={() => LazyLoading(Register, { login: login, isAuth: isAuth, captchaUrl: captchaUrl })} />
        <Route path='*' render={()=> <div>404 error</div>} />
      </Switch>
    </main>
  );
});

export default Content;