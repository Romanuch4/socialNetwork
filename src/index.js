import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './state';

export const rerenderEntireTree = () => {
  ReactDOM.render(<App store={Store.getState()} />, document.getElementById('root'));
};

rerenderEntireTree();

serviceWorker.unregister();
