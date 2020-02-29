import Store from './state';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {subscribe} from './state';

const rerenderEntireTree = () => {
  ReactDOM.render(<App dispatch={Store.dispatch.bind(Store)}
                       store={Store.getState()}
                  />, document.getElementById('root'));
};

rerenderEntireTree(Store);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
