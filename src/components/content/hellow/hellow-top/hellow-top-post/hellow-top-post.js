import React from 'react';
import './hellow-top-post.css';
import HellowTopPostButton from './hellow-top-post-button';
import HellowTopPostAreaContainer from './hellow-top-post-textarea';

const HellowTopPost = ({dispatch, newPostText}) => {
  return (
    <div className="hellow-top-post">
      <HellowTopPostAreaContainer dispatch={dispatch} newPostText={newPostText} />
      <HellowTopPostButton />
    </div>
  )
};

export default HellowTopPost;