import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import HellowBottom from './components/content/hellow/hellow-bottom';

const App = React.memo(({ isAuth, login, loginThunkCreator, logoutThunkCreator}) => {
  return (
      <div className="App">
        <Header login={login} />
        <Content logout={logoutThunkCreator} login={loginThunkCreator} isAuth={isAuth} />
        <HellowBottom />
      </div>
  );
});

export default App;