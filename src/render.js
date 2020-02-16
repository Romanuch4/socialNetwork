import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (Store) => {
  ReactDOM.render(<App addPosts={Store.addPosts.bind(Store)} store={Store.getState()} />, document.getElementById('root'));
};

export default rerenderEntireTree;