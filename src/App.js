import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';

function App({store, isAuth, dispatch, login}) {
  return (
      <div className="App">
        <Header login={login} />
        <Content isAuth={isAuth} dispatch={dispatch} state={store}/>
      </div>
  );
}

export default App;