import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';

function App({ isAuth, login, loginThunkCreator, logoutThunkCreator, initialized}) {
  return (
      <div className="App">
        <Header login={login} />
        <Content logout={logoutThunkCreator} login={loginThunkCreator} isAuth={isAuth} />
      </div>
  );
}

export default App;