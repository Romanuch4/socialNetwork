import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter } from 'react-router-dom';

function App({store, addPosts, deleteEvents, updatePostTexts}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content updatePostTexts={updatePostTexts} deleteEvents={deleteEvents} addPosts={addPosts} state={store}/>
      </div>
    </BrowserRouter>
  );
}

export default App;