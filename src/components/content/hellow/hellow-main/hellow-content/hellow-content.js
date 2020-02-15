import React from 'react';
import './hellow-content.css';
import LeftAside from './hellow-content-left_aside';

const HellowContent = ({stateFriends}) => {
  return (
    <div className="hellow-content">
      <LeftAside stateFriends={stateFriends} />
    </div>
  )
};

export default HellowContent;