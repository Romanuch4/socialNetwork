import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './state';

ReactDOM.render(<App store={Store.getState()} />, document.getElementById('root'));

serviceWorker.unregister();
