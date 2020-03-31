import React from 'react';
import './hellow-top-post-textarea.css';
import { Field } from 'redux-form';

const HellowTopPostArea = () => {
  return (
    <Field name="postText" component="textarea" placeholder="Это мой новый пост..." className="hellow-top-post-textarea" />
  )
};

export default HellowTopPostArea;