import React from 'react';
import './hellow-content-left_aside.css';
import LeftAsideMessages from './hellow-content-left_aside-messages';
import LeftAsideFriends from './hellow-content-left_aside-friends';

const LeftAside = ({stateFriends, searchFriendsText, dispatch}) => {
  return (
    <div className="hellow-content-left_aside">
      <LeftAsideMessages />
      <LeftAsideFriends dispatch={dispatch} searchFriendsText={searchFriendsText} stateFriends={stateFriends} />
    </div>
  )
};

export default LeftAside;