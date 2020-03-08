import React from 'react';
import LeftAsideFriendsSearch from './hellow-content-left_aside-friends-search';

const LeftAsideFriendsSearchContainer = ({searchFriendsText, dispatch}) => {
  const changeInputValues = (text) => {
    dispatch({
      type: 'UPDATE-FRIENDS-TEXTS',
      text: text,
    });
  };

  return (
    <LeftAsideFriendsSearch 
      searchFriendsText={searchFriendsText} 
      changeInputValues={changeInputValues} 
    />
  );
};

export default LeftAsideFriendsSearchContainer;