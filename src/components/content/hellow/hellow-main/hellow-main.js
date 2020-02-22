import React from 'react';
import './hellow-main.css';
import HellowContent from './hellow-content';

const HellowMain = ({stateFriends, statePosts, stateEvents, deleteEvents}) => {
  return (
    <section className="hellow-main">
      <HellowContent deleteEvents={deleteEvents} statePosts={statePosts} stateFriends={stateFriends} stateEvents={stateEvents} />
    </section>
  )
};

export default HellowMain;