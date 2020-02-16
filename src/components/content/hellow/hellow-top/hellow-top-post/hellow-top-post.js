import React from 'react';
import './hellow-top-post.css';
import HellowTopPostArea from './hellow-top-post-textarea';
import HellowTopPostButton from './hellow-top-post-button';

const HellowTopPost = ({addPosts}) => {
  return (
    <div className="hellow-top-post">
      <HellowTopPostArea addPosts={addPosts} />
      <HellowTopPostButton />
    </div>
  )
};

export default HellowTopPost;