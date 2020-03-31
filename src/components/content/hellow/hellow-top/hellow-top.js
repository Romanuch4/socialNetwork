import React from 'react';
import './hellow-top.css';
import HellowTopPersonal from './hellow-top-personal';
import PostReduxForm from './hellow-top-post';
import HellowTopPFriends from './hellow-top-friends';

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