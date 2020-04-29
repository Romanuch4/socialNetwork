import React from 'react';
import './hellow-top-post.css';
import HellowTopPostButton from './post-button';
import HellowTopPostArea from './post-textarea';
import { reduxForm } from 'redux-form';
import Preloader from '../../../common/preloader';

const HellowTopPost = React.memo(({ handleSubmit, isFetching }) => {
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <form onSubmit={handleSubmit} className="hellow-top-post">
        <HellowTopPostArea />
        <HellowTopPostButton />
      </form>
    </>
  )
});

const PostReduxForm = reduxForm({
  form: 'post',
})(HellowTopPost);

export default PostReduxForm;