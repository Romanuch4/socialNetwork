import React from 'react';
import './hellow-content-left_aside-friends-search.css';

const LeftAsideFriendsSearch = () => {
  return (
    <div className="hellow-content-left_aside-friends-block">
      <input
        placeholder="Друзья онлайн..."
        className="hellow-content-left_aside-friends-input"
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default LeftAsideFriendsSearch;