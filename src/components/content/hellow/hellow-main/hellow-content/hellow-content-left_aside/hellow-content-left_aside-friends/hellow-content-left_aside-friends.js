import React from 'react';
import './hellow-content-left_aside-friends.css';
import LeftAsideFriendsSearch from './hellow-content-left_aside-friends-search';
import LeftAsideFriendsItem from './hellow-content-left_aside-friends-item';
import LeftAsideFriendsMore from './hellow-content-left_aside-friends-more';

const LeftAsideFriends = ({stateFriends}) => {
  return (
    <div>
      <LeftAsideFriendsSearch />
      <LeftAsideFriendsItem stateFriends={stateFriends} />
      <LeftAsideFriendsMore />
    </div>
  );
};

export default LeftAsideFriends;