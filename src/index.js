import Store from './redux/redux-store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store} >
        <AppContainer dispatch={Store.dispatch.bind(Store)} store={Store.getState()} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
};

rerenderEntireTree(Store);

Store.subscribe(() => {
  const state = Store.getState();
  rerenderEntireTree(state);
});

serviceWorker.unregister();
