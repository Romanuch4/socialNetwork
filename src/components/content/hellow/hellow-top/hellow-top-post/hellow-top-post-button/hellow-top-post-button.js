import React from 'react';
import './hellow-top-post-button.css';

const HellowTopPostButton = () => {
  return (
    <button onClick={ window.addPost } className="hellow-top-post-button">
      Отправить
    </button>
  )
};

export default HellowTopPostButton;