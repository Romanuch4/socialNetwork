import React from 'react';
import './hellow-top-post.css';
import HellowTopPostButton from './post-button';
import HellowTopPostArea from './post-textarea';
import { reduxForm } from 'redux-form';

const HellowTopPost = React.memo(({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="hellow-top-post">
      <HellowTopPostArea />
      <HellowTopPostButton />
    </form>
  )
});

const PostReduxForm = reduxForm({
  form: 'post',
})(HellowTopPost);

export default PostReduxForm;