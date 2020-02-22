import React from 'react';
import './hellow-content-right_aside.css';
import RightAsideTitle from './hellow-content-right_aside-title';
import RightAsideContent from './hellow-content-right_aside-content';

const RightAside = ({stateEvents, deleteEvents}) => {
  return (
    <div className="hellow-content-right_aside">
      <RightAsideTitle />
      <RightAsideContent deleteEvents={deleteEvents} stateEvents={stateEvents} />
    </div>
  );
};

export default RightAside;