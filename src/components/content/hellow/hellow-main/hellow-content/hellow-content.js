import React from 'react';
import './hellow-content.css';
import LeftAside from './hellow-content-left_aside';
import Center from './hellow-content-center';
import RightAside from './hellow-content-right_aside';

const HellowContent = ({stateFriends, statePosts, stateEvents, deleteEvents}) => {
  return (
    <div className="hellow-content">
      <LeftAside stateFriends={stateFriends} />
      <Center statePosts={statePosts} />
      <RightAside deleteEvents={deleteEvents} stateEvents={stateEvents} />
    </div>
  )
};

export default HellowContent;