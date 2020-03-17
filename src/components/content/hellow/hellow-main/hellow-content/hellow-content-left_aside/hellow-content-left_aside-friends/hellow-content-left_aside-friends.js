import React from 'react';
import './hellow-content-left_aside-friends.css';
import LeftAsideFriendsItemContainer from './hellow-content-left_aside-friends-item';
import LeftAsideFriendsSearchContainer from './hellow-content-left_aside-friends-search';

const LeftAsideFriends = ({dispatch}) => {
  return (
    <div className="hellow-content-left_aside-friends">
      <LeftAsideFriendsSearchContainer dispatch={dispatch} />
      <LeftAsideFriendsItemContainer/>
    </div>
  );
};

export default LeftAsideFriends;