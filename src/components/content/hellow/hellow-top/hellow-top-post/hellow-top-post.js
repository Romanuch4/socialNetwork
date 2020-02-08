import React from 'react';
import './hellow-top-post.css';
import HellowTopPostArea from './hellow-top-post-textarea';
import HellowTopPostButton from './hellow-top-post-button';

const HellowTopPost = () => {
  return (
    <div className="hellow-top-post">
      <HellowTopPostArea />
      <HellowTopPostButton />
    </div>
  )
};

export default HellowTopPost;