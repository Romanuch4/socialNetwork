import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter } from 'react-router-dom';

function App({store, addPosts}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content addPosts={addPosts} state={store}/>
      </div>
    </BrowserRouter>
  );
}

export default App;