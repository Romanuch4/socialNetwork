import React from 'react';
import './hellow-top-post-textarea.css';

const HellowTopPostArea = ({addPosts}) => {
  let newPostText = React.createRef();
  const addPost = () => {
    let text = newPostText.current.value;
    newPostText.current.value = '';
    addPosts(text);
  };

  window.addPost = addPost;
  return (
    <textarea ref={newPostText} placeholder="Это мой новый пост..." className="hellow-top-post-textarea" />
  )
};

export default HellowTopPostArea;