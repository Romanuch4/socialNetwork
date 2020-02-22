import React from 'react';
import './hellow-top.css';
import HellowTopPersonal from './hellow-top-personal';
import HellowTopPost from './hellow-top-post';
import HellowTopPFriends from './hellow-top-friends';

const HellowTop = ({stateFriends, addPosts, newPostText, updatePostTexts}) => {
  return (
    <section className="hellow-top">
      <HellowTopPersonal />
      <HellowTopPost updatePostTexts={updatePostTexts} newPostText={newPostText} addPosts={addPosts} />
      <HellowTopPFriends stateFriends={stateFriends} />
    </section>
  )
};

export default HellowTop;