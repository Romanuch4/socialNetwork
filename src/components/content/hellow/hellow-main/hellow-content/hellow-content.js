import React from 'react';
import './hellow-content.css';
import LeftAside from './hellow-content-left_aside';
import Center from './hellow-content-center';
import RightAside from './hellow-content-right_aside';

const HellowContent = ({stateFriends, statePosts, dispatch}) => {
  return (
    <div className="hellow-content">
      <LeftAside dispatch={dispatch} stateFriends={stateFriends} />
      <Center statePosts={statePosts} />
      <RightAside dispatch={dispatch} />
    </div>
  )
};

export default HellowContent;