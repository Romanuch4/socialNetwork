import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;