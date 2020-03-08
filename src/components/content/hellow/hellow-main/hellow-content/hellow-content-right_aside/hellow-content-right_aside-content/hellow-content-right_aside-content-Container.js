import React from 'react';
import RightAsideContent from './hellow-content-right_aside-content';

const RightAsideContentContainer = ({stateEvents, dispatch}) => {
  const deleteEvents = (text) => {
    dispatch({
      type: 'DELETE-EVENTS',
      text: text,
    });
  };
  return (
    <RightAsideContent stateEvents={stateEvents} deleteEvents={deleteEvents} />
  );
};

export default RightAsideContentContainer;