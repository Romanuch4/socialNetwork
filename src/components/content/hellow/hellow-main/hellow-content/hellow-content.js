import React from 'react';
import './hellow-content.css';
import LeftAside from './hellow-content-left_aside';
import Center from './hellow-content-center';

const HellowContent = ({stateFriends, statePosts}) => {
  return (
    <div className="hellow-content">
      <LeftAside stateFriends={stateFriends} />
      <Center statePosts={statePosts} />
    </div>
  )
};

export default HellowContent;