import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';

function App({ isAuth, login}) {
  return (
      <div className="App">
        <Header login={login} />
        <Content isAuth={isAuth} />
      </div>
  );
}

export default App;