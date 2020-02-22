import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (Store) => {
  ReactDOM.render(<App deleteEvents={Store.deleteEvents.bind(Store)}
                       addPosts={Store.addPosts.bind(Store)} 
                       store={Store.getState()} 
                       updatePostTexts={Store.updatePostTexts.bind(Store)}
                  />, document.getElementById('root'));
};

export default rerenderEntireTree;