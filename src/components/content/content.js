import React from 'react';
import { Route } from 'react-router-dom';
import Hellow from './hellow';
import Profile from './profile';
import Exit from './exit';
import Register from './register';

const Content = () => {
  return (
      <main className="main">
        <Route path='/hellow' render={() => <Hellow />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/exit' render={() => <Exit />} />
        <Route exact path='/' render={()=> <Register />}/>
      </main>
  )
};

export default Content;