import React from 'react';
import './hellow-top.css';
import HellowTopPersonal from './hellow-top-personal';
import HellowTopPost from './hellow-top-post';
import HellowTopPFriends from './hellow-top-friends';

const HellowTop = ({stateFriends, dispatch, newPostText}) => {
  return (
    <section className="hellow-top">
      <HellowTopPersonal />
      <HellowTopPost dispatch={dispatch} newPostText={newPostText} />
      <HellowTopPFriends stateFriends={stateFriends} />
    </section>
  )
};

export default HellowTop;