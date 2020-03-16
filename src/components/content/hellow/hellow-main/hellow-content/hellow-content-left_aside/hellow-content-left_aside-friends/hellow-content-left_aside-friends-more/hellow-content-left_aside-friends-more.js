import React from 'react';
import './hellow-content-left_aside-friends-more.css';

const LeftAsideFriendsMore = () => {
  return (
    <button onClick={window.addFriends} className="hellow-content-left_aside-friends-button">
      больше
    </button>
  );
};

export default LeftAsideFriendsMore;