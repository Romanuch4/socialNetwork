import React from 'react';
import './hellow-top-post-textarea.css';

const HellowTopPostArea = ({dispatch, newPostText}) => {
  let postText = React.createRef();
  const addPost = () => {
    let text = postText.current.value;
    dispatch({
      type: 'ADD-POSTS',
      text: text,
    });
  };

  const updatePostText = () => {
    let text = postText.current.value;
    dispatch({
      type: 'UPDATE-POST-TEXTS',
      text: text,
    });
  };

  window.addPost = addPost;
  return (
    <textarea onChange={updatePostText} ref={postText} value={newPostText} placeholder="Это мой новый пост..." className="hellow-top-post-textarea" />
  )
};

export default HellowTopPostArea;