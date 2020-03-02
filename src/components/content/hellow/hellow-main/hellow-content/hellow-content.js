import React from 'react';
import './hellow-content.css';
import LeftAside from './hellow-content-left_aside';
import Center from './hellow-content-center';
import RightAside from './hellow-content-right_aside';

const HellowContent = ({stateFriends, statePosts, stateEvents, searchFriendsText, dispatch}) => {
  return (
    <div className="hellow-content">
      <LeftAside dispatch={dispatch} searchFriendsText={searchFriendsText} stateFriends={stateFriends} />
      <Center statePosts={statePosts} />
      <RightAside dispatch={dispatch} stateEvents={stateEvents} />
    </div>
  )
};

export default HellowContent;