import React from 'react';
import './hellow-top-post.css';
import HellowTopPostButton from './hellow-top-post-button';
import HellowTopPostAreaContainer from './hellow-top-post-textarea';

const HellowTopPost = () => {
  return (
    <div className="hellow-top-post">
      <HellowTopPostAreaContainer/>
      <HellowTopPostButton />
    </div>
  )
};

export default HellowTopPost;