import Store from './state';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {subscribe} from './state';

const rerenderEntireTree = () => {
  ReactDOM.render(<App deleteEvents={Store.deleteEvents.bind(Store)}
                       addPosts={Store.addPosts.bind(Store)} 
                       store={Store.getState()} 
                       updatePostTexts={Store.updatePostTexts.bind(Store)}
                  />, document.getElementById('root'));
};

rerenderEntireTree(Store);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
