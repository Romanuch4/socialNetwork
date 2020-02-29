import React from 'react';
import './hellow-content-right_aside.css';
import RightAsideTitle from './hellow-content-right_aside-title';
import RightAsideContent from './hellow-content-right_aside-content';

const RightAside = ({stateEvents, dispatch}) => {
  return (
    <div className="hellow-content-right_aside">
      <RightAsideTitle />
      <RightAsideContent dispatch={dispatch} stateEvents={stateEvents} />
    </div>
  );
};

export default RightAside;