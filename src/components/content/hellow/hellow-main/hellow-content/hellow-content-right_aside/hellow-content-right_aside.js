import React from 'react';
import './hellow-content-right_aside.css';
import RightAsideTitle from './hellow-content-right_aside-title';
import RightAsideContentContainer from './hellow-content-right_aside-content';

const RightAside = ({stateEvents, dispatch}) => {
  return (
    <div className="hellow-content-right_aside">
      <RightAsideTitle />
      <RightAsideContentContainer dispatch={dispatch} stateEvents={stateEvents} />
    </div>
  );
};

export default RightAside;