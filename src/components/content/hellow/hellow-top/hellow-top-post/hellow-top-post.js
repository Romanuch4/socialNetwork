import React from 'react';
import './hellow-top-post.css';
import HellowTopPostArea from './hellow-top-post-textarea';
import HellowTopPostButton from './hellow-top-post-button';

const HellowTopPost = ({dispatch, newPostText}) => {
  return (
    <div className="hellow-top-post">
      <HellowTopPostArea dispatch={dispatch} newPostText={newPostText} />
      <HellowTopPostButton />
    </div>
  )
};

export default HellowTopPost;