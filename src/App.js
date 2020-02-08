import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter } from 'react-router-dom';

function App({store}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content state={store}/>
      </div>
    </BrowserRouter>
  );
}

export default App;