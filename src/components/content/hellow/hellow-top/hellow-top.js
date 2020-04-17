import React from 'react';
import './hellow-top.css';
import HellowTopPersonal from './personal';
import PostReduxForm from './post';
import HellowTopPFriends from './friends';

const HellowTop = ({stateFriends, addPosts}) => {
  const onSubmit = formData => {
    addPosts(formData.postText);
  };

  return (
    <section className="hellow-top">
      <HellowTopPersonal />
      <PostReduxForm onSubmit={onSubmit} />
      <HellowTopPFriends stateFriends={stateFriends} />
    </section>
  );
};

export default HellowTop;