import React from 'react';
import HellowTopPostArea from './hellow-top-post-textarea';

const HellowTopPostAreaContainer = ({dispatch, newPostText}) => {
  const addPosts = (text) => {
    dispatch({
      type: 'ADD-POSTS',
      text: text,
    });
  };

  const updatePostTexts = text => {
    dispatch({
      type: 'UPDATE-POST-TEXTS',
      text: text,
    });
  };

  return (
    <HellowTopPostArea 
      addPosts={addPosts} 
      updatePostTexts={updatePostTexts} 
      newPostText={newPostText} 
    />
  );
};

export default HellowTopPostAreaContainer;