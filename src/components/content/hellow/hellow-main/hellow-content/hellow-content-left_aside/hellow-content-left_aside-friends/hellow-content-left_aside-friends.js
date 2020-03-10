import React from 'react';
import './hellow-content-left_aside-friends.css';
import LeftAsideFriendsSearchContainer from './hellow-content-left_aside-friends-search';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';
import LeftAsideFriendsMore from './hellow-content-left_aside-friends-more';

const LeftAsideFriends = ({stateFriends, dispatch}) => {
  return (
    <div className="hellow-content-left_aside-friends">
      <LeftAsideFriendsSearchContainer dispatch={dispatch} />
      <LeftAsideFriendsItem stateFriends={stateFriends} />
      <LeftAsideFriendsMore />
    </div>
  );
};

export default LeftAsideFriends;