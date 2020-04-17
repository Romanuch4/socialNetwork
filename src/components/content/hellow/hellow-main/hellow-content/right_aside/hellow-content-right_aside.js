import React from 'react';
import './hellow-content-right_aside.css';
import RightAsideTitle from './title';
import RightAsideContentContainer from './content';

const RightAside = ({ dispatch }) => {
  return (
    <div className="hellow-content-right_aside">
      <RightAsideTitle />
      <RightAsideContentContainer dispatch={dispatch} />
    </div>
  );
};

export default RightAside;