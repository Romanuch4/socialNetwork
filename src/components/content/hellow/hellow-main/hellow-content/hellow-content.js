import React from 'react';
import './hellow-content.css';
import LeftAside from './left_aside';
import Center from './center';
import RightAside from './right_aside';

const HellowContent = ({statePosts, dispatch}) => {
  return (
    <div className="hellow-content">
      <LeftAside dispatch={dispatch}/>
      <Center statePosts={statePosts} />
      <RightAside dispatch={dispatch} />
    </div>
  )
};

export default HellowContent;