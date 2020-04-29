import React from 'react';
import './hellow-top.css';
import HellowTopPersonal from './personal';
import PostReduxForm from './post';
import HellowTopPFriends from './friends';

const HellowTop = React.memo(({ stateFriends, addPosts, downloadPhoto, userImage, isFetching }) => {
  const onSubmit = formData => {
    addPosts(formData.postText);
    formData.postText = '';
  };

  return (
    <section className="hellow-top">
      <HellowTopPersonal userImage={userImage} downloadPhoto={downloadPhoto} />
      <PostReduxForm isFetching={isFetching} onSubmit={onSubmit} />
      <HellowTopPFriends stateFriends={stateFriends} />
    </section>
  );
});

export default HellowTop;