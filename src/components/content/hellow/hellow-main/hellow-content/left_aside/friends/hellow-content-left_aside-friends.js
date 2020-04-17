import React from 'react';
import './hellow-content-left_aside-friends.css';
import LeftAsideFriendsItemContainer from './friends-item';
import LeftAsideFriendsSearchContainer from './friends-search';

const LeftAsideFriends = ({dispatch}) => {
  return (
    <div className="hellow-content-left_aside-friends">
      <LeftAsideFriendsSearchContainer dispatch={dispatch} />
      <LeftAsideFriendsItemContainer/>
    </div>
  );
};

export default LeftAsideFriends;