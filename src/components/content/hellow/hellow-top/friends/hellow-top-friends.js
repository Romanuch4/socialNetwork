import React from 'react';
import './hellow-top-friends.css';
import HellowTopPFriendsTitle from './friends-title';
import HellowTopPFriendsContent from './friends-content';

const HellowTopPFriends = ({stateFriends}) => {


  return (
    <div className="hellow-top-friends">
      <HellowTopPFriendsTitle />
      <HellowTopPFriendsContent stateFriends={stateFriends} />
    </div>
  )
};

export default HellowTopPFriends;