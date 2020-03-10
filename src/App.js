import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';

function App({store, dispatch}) {
  return (
      <div className="App">
        <Header />
        <Content dispatch={dispatch} state={store}/>
      </div>
  );
}

export default App;